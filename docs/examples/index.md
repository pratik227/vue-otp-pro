<script setup>
import OtpPlayground from '../components/OtpPlayground.vue'
import OtpDemo from '../components/OtpDemo.vue'
</script>

# Interactive Playground

Build your perfect OTP input by toggling options. The generated code updates live.

<OtpPlayground />

## Quick Examples

### Basic 6-digit OTP

<div class="demo-container">
  <OtpDemo />
</div>

```vue
<OtpInput v-model="otp" />
```

### 4-digit PIN

<div class="demo-container">
  <OtpDemo :num-inputs="4" />
</div>

```vue
<OtpInput v-model="pin" :num-inputs="4" />
```

### With Separator

<div class="demo-container">
  <OtpDemo :num-inputs="4" separator="-" />
</div>

```vue
<OtpInput :num-inputs="4" separator="-" />
```

### Password Mode

<div class="demo-container">
  <OtpDemo :num-inputs="4" input-type="password" />
</div>

```vue
<OtpInput :num-inputs="4" input-type="password" />
```

### Custom Placeholders

<div class="demo-container">
  <OtpDemo :num-inputs="6" :placeholder="['O', 'T', 'P', 'C', 'O', 'D']" />
</div>

```vue
<OtpInput :placeholder="['O', 'T', 'P', 'C', 'O', 'D']" />
```

### Error State

<div class="demo-container">
  <OtpDemo :num-inputs="4" :error="true" label="Shake animation plays on mount" />
</div>

```vue
<OtpInput :error="isError" />
```

### Success State

<div class="demo-container">
  <OtpDemo :num-inputs="4" :success="true" label="Pulse animation plays on mount" />
</div>

```vue
<OtpInput :success="isVerified" />
```

### Disabled

<div class="demo-container">
  <OtpDemo :num-inputs="4" :disabled="true" />
</div>

```vue
<OtpInput disabled />
```

### Readonly

<div class="demo-container">
  <OtpDemo :num-inputs="4" :readonly="true" />
</div>

```vue
<OtpInput readonly />
```

### All Sizes

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="Small" />
  <OtpDemo :num-inputs="4" size="md" label="Medium" />
  <OtpDemo :num-inputs="4" size="lg" label="Large" />
  <OtpDemo :num-inputs="4" size="xl" label="Extra Large" />
</div>

### Programmatic Control

```vue
<script setup>
const otpRef = ref(null)
</script>

<template>
  <OtpInput ref="otpRef" />

  <button @click="otpRef.fill('123456')">Fill</button>
  <button @click="otpRef.clear()">Clear</button>
  <button @click="otpRef.focus()">Focus</button>
  <button @click="otpRef.focusInput(3)">Focus 4th</button>
</template>
```

### Real-World: Verification Form

```vue
<script setup>
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const otp = ref('')
const isError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)

async function verify() {
  isLoading.value = true
  try {
    await api.verifyOtp(otp.value)
    isSuccess.value = true
  } catch {
    isError.value = true
    setTimeout(() => (isError.value = false), 600)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="verify-form">
    <h2>Enter verification code</h2>
    <p>We sent a 6-digit code to your email.</p>

    <OtpInput
      v-model="otp"
      theme="separated"
      size="lg"
      :error="isError"
      :success="isSuccess"
      :disabled="isLoading"
      should-auto-focus
      @complete="verify"
    />
  </div>
</template>
```
