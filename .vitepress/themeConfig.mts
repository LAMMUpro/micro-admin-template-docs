import { DefaultTheme, UserConfig } from "vitepress";
import fse from 'fs-extra';
import path from 'path';

/**
 * 过滤掉index.md和非.md的文件
 */
const dirList = fse.readdirSync('./src')
  .filter(name => 
    name!=='index.md' 
    && 
    (
      fse.statSync(path.resolve('./src', name)).isDirectory()
      ||
      name.endsWith('.md')
    )
  )

/**
 * 动态生成目录
 */
const sidebar = dirList
  .map(name => generateCatalog(path.resolve('./src'), name))
  .filter(Boolean);

/**
 * 生成目录
 */
function generateCatalog(_path: string, name: string, _prefix: string = '') {
  const prefix = `${_prefix}/${name}`;
  if (fse.statSync(path.resolve(_path, name)).isFile()) {
    return {
      text: name.slice(0, -3),
      items: [
        { text: name, link: name },
      ]
    }
  } else if (fse.statSync(path.resolve(_path, name)).isDirectory()) {
    return {
      text: name,
      items: fse.readdirSync(path.resolve(_path, name)).map(_name => {
        if (fse.statSync(path.resolve(_path, name, _name)).isFile()) { // 处理文件
          if (_name.endsWith('.md')) {
            const name_without_type = _name.slice(0, -3);
            return { text: name_without_type, link: `${prefix}/${_name}` };
          }
        } else if (fse.statSync(path.resolve(_path, name, _name)).isDirectory()) { // 处理目录
          return generateCatalog(path.resolve(_path, name), _name, prefix); // 循环处理
        }
      }).filter(Boolean)
    }
  }
}

/**
 * 取第一个有效路由
 */
function getFirstRoute(sidebar: DefaultTheme.SidebarItem[]) {
  for (let i = 0; i < sidebar.length; i++) {
    const item = sidebar[i];
    if (item.link) {
      return item.link;
    } else if (item.items) {
      const link = getFirstRoute(item.items);
      if (link) return link;
    }
  }
}

/** [docs](https://vitepress.dev/reference/default-theme-config) */
const themeConfig: UserConfig<DefaultTheme.Config>['themeConfig'] = {
  nav: [
    { text: '首页', link: '/' },
    { text: '文档', link: getFirstRoute(sidebar) },
    { text: '更新历史', link: '/history' },
  ],
  sidebar: sidebar,
  socialLinks: [
    { icon: 'github', link: 'https://github.com/LAMMUpro/micro-admin-template' }
  ]
}

export default themeConfig;