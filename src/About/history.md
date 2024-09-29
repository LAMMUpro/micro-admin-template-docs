---
sidebar: false
footer: false
prev: false
---

# 更新历史

## 1.2.0（排期中）
- 项目解耦
  - 将micro-app-utils独立成一个npm库
- 动态菜单

## 1.1.0（开发中）
- [wwj]react18子应用
  - 接入路由 ✔
    - 路由拦截 ✔
- [cyc]主应用支持将Element组件注册成派发组件(按需加载) ✔
- [cyc]vue2子应用 ✔
  - 路由 ✔
- [cyc]vue3子应用 ✔
  - 路由 ✔
- [cyc]线上demo ✔
- [cyc]子应用复用主应用的404/403/login页面（派发组件形式） ✔
- [cyc]输入url在线预览网址 ✔
- 路由组件优化
  - 命名唯一性
  - 解决循环嵌套问题 ✔
  - 加载状态 ✔
  - 加载失败处理 ✔
- 派发组件优化
  - 插槽渲染 ✔
  - 插槽参数传递 ✔
  - 插槽内数据响应式 ✔
  - 微前端多层嵌套下的事件穿透 ✔
  - react插槽局部更新
  - 销毁时机 ✔
- 路由拦截

## 1.0.0
- 项目初始化
  - vitest 测试框架 ✔
  - monorepo 共享 microapp 工具 / shared ... ✔
  - micro-app-utils 基于 micro-app 的二次封装 ✔
  - shared 常用模块共享 ✔
  - sass ✔
  - router ✔
  - 公共组件 ✔
    - svg-icon ✔
  - Prettier 文件格式化(需要 vscode 安装 Prettier) ✔
  - eslint 代码规范(需要 vscode 安装 ESLint 2.4.4) ✔
  - element-plus (组件及样式按需引入) ✔
  - react18 子应用 ✔
