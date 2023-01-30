<h1 align="center">
    scq-UI
</h1>

![v](https://img.shields.io/npm/v/scq-ui)
![d](https://img.shields.io/npm/dt/scq-ui)

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

<p align="center">scq UI - A Vue.js 3 UI library</p>

## Install

```
npm i scq-ui
```

## 快速开始

```html
<template>
  <scqButton type="primary">按钮</scqButton>
</template>
<script lang="ts" setup>
  import { scqButton } from "scq-ui";
</script>
```

### button 组件

| 参数 | 说明 | 类型   | 可选值                | 必选 |
| ---- | ---- | ------ | --------------------- | ---- |
| type | 类型 | string | btn-1 ~ btn-16        | 否   |
| size | 尺寸 | string | medium / small / mini | 否   |
