import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig.mjs';

/** [docs](https://vitepress.dev/reference/site-config) */
export default defineConfig({
  title: "前端开发文档",
  description: "科创海前端开发文档",
  srcDir: './src',
  outDir: './dist',
  cacheDir: './.vite',
  /** vite相关配置 */
  vite: {
    server: {
      port: 5151,
    },
  },
  /** 路由配置 / 主题配置 */
  themeConfig: themeConfig,
})
