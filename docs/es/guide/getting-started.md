<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Primeros Pasos

## Instalación

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

## Inicio Rápido

Importa el componente y sus estilos:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP ingresado:', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

**Pruébalo:**

<div class="demo-container">
  <div class="demo-container__title">Vista previa en vivo</div>
  <OtpDemo />
</div>

## Registro Global

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro) // registra <OtpInput> globalmente
app.mount('#app')
```

## Con Nuxt

```ts
// plugins/vue-otp-pro.client.ts
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueOtpPro)
})
```

## Dependencias

Vue OTP Pro requiere **Vue 3.3+** como dependencia peer.

## ¿Qué sigue?

- [Props y Eventos](/guide/props) — Referencia completa de la API
- [Temas](/guide/theming) — 11 temas, propiedades CSS personalizadas, modo oscuro
- [Ejemplos en Vivo](/examples/) — Playground interactivo con todas las opciones
