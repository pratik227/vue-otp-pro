<script setup>
import OtpDemo from '../components/OtpDemo.vue'
</script>

# Props & Events

Complete API reference for the `<OtpInput>` component.

## Props

### Core

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | v-model binding for the OTP value |
| `numInputs` | `number` | `6` | Number of input fields |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | Input validation type |
| `inputmode` | `string` | `'numeric'` | HTML inputmode for virtual keyboard |

### Appearance

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `OtpTheme` | `'box'` | Visual theme (see [Theming](/guide/theming)) |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | Color variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Input size |
| `placeholder` | `string \| string[]` | `''` | Placeholder (string for all, or array per-input) |
| `separator` | `string` | `''` | HTML to render between inputs |

### State

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shouldAutoFocus` | `boolean` | `false` | Auto-focus first input on mount |
| `shouldFocusOrder` | `boolean` | `false` | Enforce sequential input order |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `readonly` | `boolean` | `false` | Read-only mode |
| `error` | `boolean` | `false` | Error state (triggers shake animation) |
| `success` | `boolean` | `false` | Success state (triggers pulse animation) |

### Styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inputClasses` | `string \| string[]` | `''` | CSS classes for each input |
| `conditionalClass` | `string[] \| (index, value) => string` | — | Per-input classes (array or function) |
| `containerClass` | `string` | `''` | CSS class for the container |
| `ariaLabel` | `string` | `'OTP Input'` | Accessible label |

### Theme Type

```ts
type OtpTheme =
  | 'box'        // Clean bordered with rounded corners
  | 'underline'  // Minimal bottom-border
  | 'rounded'    // Circular inputs
  | 'pill'       // Capsule-shaped
  | 'separated'  // Elevated cards with lift
  | 'flush'      // Joined continuous bar
  | 'shadow'     // Prominent shadow
  | 'neon'       // Glowing on dark background
  | 'glass'      // Glassmorphism with blur
  | 'minimal'    // Thin borders, ultra clean
  | 'filled'     // Solid background, no border
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Every change (v-model support) |
| `change` | `string` | Every character change |
| `complete` | `string` | All inputs filled |

```vue
<OtpInput
  v-model="otp"
  @change="onEveryChange"
  @complete="onAllFilled"
/>
```

## Exposed Methods

Access via a template ref:

```vue
<script setup>
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'

const otpRef = ref<InstanceType<typeof OtpInput> | null>(null)

// Available methods:
otpRef.value?.clear()        // Clear all inputs, focus first
otpRef.value?.fill('123456') // Fill all inputs
otpRef.value?.focus()        // Focus the first input
otpRef.value?.focusInput(3)  // Focus a specific input by index
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

| Method | Arguments | Description |
|--------|-----------|-------------|
| `clear()` | — | Clears all inputs and focuses the first one |
| `fill(value)` | `string` | Fills inputs with the given value |
| `focus()` | — | Focuses the first input |
| `focusInput(index)` | `number` | Focuses a specific input by index |

## Slots

### `separator`

Override the default separator with custom content:

```vue
<OtpInput separator="-">
  <template #separator>
    <span style="color: #6366f1; font-weight: bold;">-</span>
  </template>
</OtpInput>
```

## Conditional Classes

### Array mode

Pass an array where each index maps to an input:

```vue
<OtpInput :conditional-class="['first', '', '', '', '', 'last']" />
```

### Function mode

Pass a function for dynamic per-input styling:

```vue
<OtpInput
  :conditional-class="(index, value) =>
    value ? 'has-value' : 'empty'
  "
/>
```

## TypeScript

All types are exported:

```ts
import type {
  OtpInputProps,
  OtpInputExpose,
  OtpInputType,
  OtpTheme,
  OtpVariant,
  OtpSize,
} from 'vue-otp-pro'
```
