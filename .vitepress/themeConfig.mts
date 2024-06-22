import { DefaultTheme, UserConfig } from "vitepress";

/** [docs](https://vitepress.dev/reference/default-theme-config) */
const themeConfig: UserConfig<DefaultTheme.Config>['themeConfig'] = {
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Docs', link: '/常见问题总结/Nuxt2' }
  ],

  sidebar: [
    {
      text: '常见问题总结',
      items: [
        { text: 'Nuxt2', link: '/常见问题总结/Nuxt2' },
        { text: 'Uniapp', link: '/常见问题总结/Uniapp' },
        { text: 'Vue2', link: '/常见问题总结/Vue2' },
        { text: 'Vue3', link: '/常见问题总结/Vue3' },
      ]
    },
    {
      text: '项目说明',
      items: [
        { text: 'admin', link: '/项目说明/admin' },
        { text: 'serviceAdmin', link: '/项目说明/serviceAdmin' },
      ]
    },
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' },
      ]
    }
  ],

  socialLinks: [
    { icon: 'github', link: 'https://boshi.gitlab.com/vuejs/vitepress' }
  ]
}
export default themeConfig;