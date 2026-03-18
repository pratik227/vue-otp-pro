<script setup>
import OtpDemo from '../components/OtpDemo.vue'
import AuthorCard from '../components/AuthorCard.vue'
</script>

# Getting Started

## Installation

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

## Quick Start

Import the component and its styles:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP entered:', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

**Try it:**

<div class="demo-container">
  <div class="demo-container__title">Live Preview</div>
  <OtpDemo />
</div>

## Global Registration

Register the component globally with the Vue plugin:

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro) // registers <OtpInput> globally
app.mount('#app')
```

## With Nuxt

```ts
// plugins/vue-otp-pro.client.ts
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueOtpPro)
})
```

## Peer Dependencies

Vue OTP Pro requires **Vue 3.3+** as a peer dependency.

## What's Next?

- [Props & Events](/guide/props) — Full API reference
- [Theming](/guide/theming) — 11 themes, CSS custom properties, dark mode
- [Live Examples](/examples/) — Interactive playground with all options

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="Enjoying Vue OTP Pro? Consider sponsoring to support continued development and new features."
/>
