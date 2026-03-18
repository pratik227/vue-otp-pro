<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# はじめる

## インストール

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

## クイックスタート

コンポーネントとスタイルをインポートします：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP入力完了:', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

**お試しください：**

<div class="demo-container">
  <div class="demo-container__title">ライブプレビュー</div>
  <OtpDemo />
</div>

## グローバル登録

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro)
app.mount('#app')
```

## 依存関係

Vue OTP Pro は **Vue 3.3+** をピア依存関係として必要とします。

## 次のステップ

- [Props とイベント](/guide/props) — 完全なAPIリファレンス
- [テーマ](/guide/theming) — 11テーマ、CSSカスタムプロパティ、ダークモード
- [ライブデモ](/examples/) — インタラクティブプレイグラウンド
