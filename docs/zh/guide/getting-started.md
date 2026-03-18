<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# 快速开始

## 安装

::: code-group
```sh [npm]
npm install vue-otp-pro
```
```sh [pnpm]
pnpm add vue-otp-pro
```
```sh [yarn]
yarn add vue-otp-pro
```
:::

## 基本用法

导入组件及其样式：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP 已输入：', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

**试一试：**

<div class="demo-container">
  <div class="demo-container__title">实时预览</div>
  <OtpDemo />
</div>

## 全局注册

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro) // 全局注册 <OtpInput>
app.mount('#app')
```

## 在 Nuxt 中使用

```ts
// plugins/vue-otp-pro.client.ts
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueOtpPro)
})
```

## 依赖要求

Vue OTP Pro 需要 **Vue 3.3+** 作为 peer 依赖。

## 接下来

- [Props 和事件](/guide/props) — 完整 API 参考
- [主题](/guide/theming) — 11 种主题、CSS 自定义属性、暗黑模式
- [在线示例](/examples/) — 交互式演练场
