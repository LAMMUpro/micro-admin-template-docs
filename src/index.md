---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "micro-admin docs"
  text: "微后台模板（集成微前端）"
  tagline: 集成京东micro-app微前端框架的后台模板，支持vue3/vue2/react等子应用
  actions:
    - theme: alt
      text: 快速开始
      link: /Docs/1.指南/介绍
    - theme: brand
      text: 常见问题总结
      link: /Docs/常见问题总结/常见问题
    - theme: alt
      text: 历史更新
      link: /history

features:
  - title: 项目拆分
    details: 单一项目可拆分成多个子应用，子应用可使用不同技术栈
  - title: 组件共享1-应用嵌套
    details: 利用微前端支持应用嵌套的特性，可以实现不同项目直接的组件相互调用（跨框架组件）
  - title: 组件共享2-跨项目渲染
    details: 利用主应用可访问子应用dom的特性，可实现子应用调用主应用的组件（跨框架组件）
---


