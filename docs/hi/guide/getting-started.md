<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# शुरू करें

## इंस्टॉलेशन

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

## क्विक स्टार्ट

कंपोनेंट और उसकी स्टाइल्स इम्पोर्ट करें:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP दर्ज किया गया:', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

**इसे आज़माएं:**

<div class="demo-container">
  <div class="demo-container__title">लाइव प्रीव्यू</div>
  <OtpDemo />
</div>

## ग्लोबल रजिस्ट्रेशन

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro)
app.mount('#app')
```

## Nuxt के साथ

```ts
// plugins/vue-otp-pro.client.ts
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueOtpPro)
})
```

## डिपेंडेंसी

Vue OTP Pro को peer dependency के रूप में **Vue 3.3+** की आवश्यकता है।

## आगे क्या?

- [Props और Events](/guide/props) — पूर्ण API रेफरेंस
- [थीमिंग](/guide/theming) — 11 थीम, CSS कस्टम प्रॉपर्टीज, डार्क मोड
- [लाइव डेमो](/examples/) — इंटरैक्टिव प्लेग्राउंड
