# Vue OTP Pro

A beautiful, customizable OTP input component for Vue 3 with built-in themes and animations.

[![npm version](https://img.shields.io/npm/v/vue-otp-pro.svg)](https://www.npmjs.com/package/vue-otp-pro)
[![license](https://img.shields.io/npm/l/vue-otp-pro.svg)](https://github.com/pratik227/vue-otp-pro/blob/main/LICENSE)

## Features

- **11 Themes** — Box, Underline, Rounded, Pill, Separated, Flush, Shadow, Neon, Glass, Minimal, Filled
- **5 Color Variants** — Default, Primary, Success, Danger, Warning (55+ combinations)
- **4 Sizes** — sm, md, lg, xl
- **Smooth Animations** — Pop on fill, shake on error, pulse on success
- **Mobile First** — iOS SMS autofill, Android paste, IME composition handling
- **Accessible** — ARIA labels, keyboard navigation, screen reader support, WCAG AA contrast
- **TypeScript** — Fully typed with exported types
- **Lightweight** — ~3 KB gzipped, tree-shakeable

## Installation

```bash
# npm
npm install vue-otp-pro

# yarn
yarn add vue-otp-pro

# pnpm
pnpm add vue-otp-pro
```

## Quick Start

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')

function handleComplete(value: string) {
  console.log('OTP:', value)
}
</script>

<template>
  <OtpInput v-model="otp" @complete="handleComplete" />
</template>
```

### Global Registration

```ts
import { createApp } from 'vue'
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const app = createApp(App)
app.use(VueOtpPro)
```

### Nuxt

```ts
// plugins/vue-otp-pro.client.ts
import { VueOtpPro } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueOtpPro)
})
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | v-model binding |
| `numInputs` | `number` | `6` | Number of input fields |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | Input validation type |
| `inputmode` | `string` | `'numeric'` | HTML inputmode for virtual keyboards |
| `theme` | `string` | `'box'` | One of: `box`, `underline`, `rounded`, `pill`, `separated`, `flush`, `shadow`, `neon`, `glass`, `minimal`, `filled` |
| `variant` | `string` | `'default'` | One of: `default`, `primary`, `success`, `danger`, `warning` |
| `size` | `string` | `'md'` | One of: `sm`, `md`, `lg`, `xl` |
| `placeholder` | `string \| string[]` | `''` | Placeholder per input or global |
| `separator` | `string` | `''` | HTML separator between inputs |
| `shouldAutoFocus` | `boolean` | `false` | Auto-focus first input on mount |
| `shouldFocusOrder` | `boolean` | `false` | Enforce sequential input order |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `readonly` | `boolean` | `false` | Make inputs read-only |
| `error` | `boolean` | `false` | Error state with shake animation |
| `success` | `boolean` | `false` | Success state with pulse animation |
| `inputClasses` | `string \| string[]` | `''` | Custom CSS classes for inputs |
| `conditionalClass` | `string[] \| function` | — | Per-input dynamic classes |
| `containerClass` | `string` | `''` | CSS class for container |
| `ariaLabel` | `string` | `'OTP Input'` | Accessible label |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | v-model support, fires on any change |
| `change` | `string` | Every character change |
| `complete` | `string` | Fires when all inputs are filled |

## Exposed Methods

Access via template ref:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { OtpInputExpose } from 'vue-otp-pro'

const otpRef = ref<OtpInputExpose>()

otpRef.value?.clear()           // Clear all inputs and focus first
otpRef.value?.fill('123456')    // Fill inputs with value
otpRef.value?.focus()           // Focus first input
otpRef.value?.focusInput(2)     // Focus specific input by index
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

## Slots

| Slot | Description |
|------|-------------|
| `#separator` | Custom separator content between inputs |

## Themes

```vue
<OtpInput theme="box" />
<OtpInput theme="underline" />
<OtpInput theme="rounded" />
<OtpInput theme="pill" />
<OtpInput theme="separated" />
<OtpInput theme="flush" />
<OtpInput theme="shadow" />
<OtpInput theme="neon" />
<OtpInput theme="glass" />
<OtpInput theme="minimal" />
<OtpInput theme="filled" />
```

Combine with variants:

```vue
<OtpInput theme="neon" variant="primary" />
<OtpInput theme="glass" variant="success" />
<OtpInput theme="box" variant="danger" />
```

## CSS Customization

Override CSS variables on the `.vop` selector:

```css
.vop {
  --vop-font-family: 'JetBrains Mono', monospace;
  --vop-gap: 12px;
  --vop-border-color: #d1d5db;
  --vop-border-focus: #3b82f6;
  --vop-bg: #ffffff;
  --vop-bg-focus: #f0f7ff;
  --vop-text: #1f2937;
  --vop-placeholder: #9ca3af;
  --vop-shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.15);
  --vop-caret-color: #3b82f6;
  --vop-transition: all 0.2s ease;
}
```

### Dark Mode

```css
.dark .vop {
  --vop-bg: #1f2937;
  --vop-text: #f9fafb;
  --vop-border-color: #4b5563;
  --vop-border-focus: #60a5fa;
  --vop-placeholder: #6b7280;
}
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `0-9` | Enter digit, auto-advance |
| `A-Z` | Enter letter (letter-numeric mode) |
| `Backspace` | Clear current or move to previous |
| `Delete` | Clear current input |
| `ArrowLeft / ArrowRight` | Navigate between inputs |
| `Tab` | Standard tab navigation |
| `Enter` | Trigger `complete` event if filled |
| `Ctrl/Cmd + V` | Paste |

## TypeScript

```ts
import type {
  OtpInputProps,
  OtpInputExpose,
  OtpInputType,
  OtpTheme,
  OtpVariant,
  OtpSize,
} from 'vue-otp-pro'

import { useOtp } from 'vue-otp-pro'
```

## Composable

Use the `useOtp` composable for custom implementations:

```ts
import { useOtp } from 'vue-otp-pro'

const { otp, activeInput, handleInput, handleKeyDown, clear, fill } = useOtp({
  numInputs: 6,
  inputType: 'number',
})
```

## Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

```bash
# Install dependencies
pnpm install

# Start playground
pnpm dev

# Build library
pnpm build

# Run tests
pnpm test

# Start docs
pnpm docs:dev
```

## License

[MIT](./LICENSE)

## Author

**Pratik Patel** — [GitHub](https://github.com/pratik227) | [Sponsor](https://github.com/sponsors/pratik227)
