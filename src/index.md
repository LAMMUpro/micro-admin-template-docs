---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "micro-admin docs"
  text: "微前端后台模板"
  tagline: 集成京东micro-app微前端框架的后台模板，支持vue3/vue2/react子应用，内置阿里低代码引擎
  image:
    src: /images/1-1.png
    alt: x
  actions:
    - theme: alt
      text: ⚡快速开始
      link: /Docs/1.指南/介绍
    - theme: brand
      text: 🐛常见问题总结
      link: /Docs/常见问题总结/常见问题
    - theme: alt
      text: 🚧历史更新
      link: /About/history
    - theme: brand
      text: 🔗在线demo
      link: https://micro-admin-template.lammu.cn/micromain/introduce

features:
  - icon:
      src: /svgs/Vue.svg
    title: 项目拆分
    details: 单一项目可拆分成多个子应用，子应用可使用不同技术栈
  - icon:
      src: /svgs/React.svg
    title: 组件共享1-路由组件
    details: 利用微前端支持应用嵌套的特性，将组件注册成路由供其它应用使用（跨框架组件）
  - icon:
      src: /svgs/Vite.svg
    title: 组件共享2-派发组件
    details: 利用主应用可访问子应用dom的特性，通过事件通知主应用向下“派发”组件（跨框架组件）
  - icon:
      src: /svgs/Webpack.svg
    title: 333333
    details: 利用主应用可访问子应用dom的特性，通过事件通知主应用向下“派发”组件（跨框架组件）
---


