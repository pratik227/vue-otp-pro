<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Props और Events

`<OtpInput>` कंपोनेंट का पूर्ण API रेफरेंस।

## Props

### कोर

| Prop | टाइप | डिफ़ॉल्ट | विवरण |
|------|-------|---------|--------|
| `modelValue` | `string` | `''` | OTP वैल्यू के लिए v-model बाइंडिंग |
| `numInputs` | `number` | `6` | इनपुट फ़ील्ड की संख्या |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | इनपुट वैलिडेशन टाइप |
| `inputmode` | `string` | `'numeric'` | वर्चुअल कीबोर्ड के लिए HTML inputmode |

### दिखावट

| Prop | टाइप | डिफ़ॉल्ट | विवरण |
|------|-------|---------|--------|
| `theme` | `OtpTheme` | `'box'` | विज़ुअल थीम ([थीमिंग](/hi/guide/theming) देखें) |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | कलर वेरिएंट |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | इनपुट का आकार |
| `placeholder` | `string \| string[]` | `''` | प्लेसहोल्डर |
| `separator` | `string` | `''` | इनपुट के बीच रेंडर करने के लिए HTML |

### स्थिति

| Prop | टाइप | डिफ़ॉल्ट | विवरण |
|------|-------|---------|--------|
| `shouldAutoFocus` | `boolean` | `false` | माउंट पर पहले इनपुट को ऑटो-फोकस |
| `shouldFocusOrder` | `boolean` | `false` | क्रमिक इनपुट ऑर्डर लागू करें |
| `disabled` | `boolean` | `false` | सभी इनपुट अक्षम करें |
| `readonly` | `boolean` | `false` | केवल-पढ़ने मोड |
| `error` | `boolean` | `false` | एरर स्थिति (शेक एनिमेशन) |
| `success` | `boolean` | `false` | सफलता स्थिति (पल्स एनिमेशन) |

## Events

| Event | पेलोड | विवरण |
|-------|-------|--------|
| `update:modelValue` | `string` | हर बदलाव (v-model सपोर्ट) |
| `change` | `string` | हर कैरेक्टर बदलाव |
| `complete` | `string` | सभी इनपुट भरने पर |

## एक्सपोज़्ड मेथड्स

टेम्पलेट ref से एक्सेस करें:

```vue
<script setup>
const otpRef = ref(null)

otpRef.value?.clear()        // सभी इनपुट साफ़ करें
otpRef.value?.fill('123456') // सभी इनपुट भरें
otpRef.value?.focus()        // पहले इनपुट पर फोकस
otpRef.value?.focusInput(3)  // इंडेक्स से विशिष्ट इनपुट पर फोकस
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

| मेथड | आर्ग्युमेंट्स | विवरण |
|------|-------------|--------|
| `clear()` | — | सभी साफ़ करें और पहले पर फोकस |
| `fill(value)` | `string` | दिए गए मान से इनपुट भरें |
| `focus()` | — | पहले इनपुट पर फोकस |
| `focusInput(index)` | `number` | इंडेक्स से विशिष्ट इनपुट पर फोकस |

## TypeScript

सभी टाइप्स एक्सपोर्टेड हैं:

```ts
import type {
  OtpInputProps, OtpInputExpose, OtpInputType,
  OtpTheme, OtpVariant, OtpSize,
} from 'vue-otp-pro'
```
