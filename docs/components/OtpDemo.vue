<script setup lang="ts">
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const props = withDefaults(
  defineProps<{
    theme?: string
    variant?: string
    size?: string
    numInputs?: number
    separator?: string
    placeholder?: string | string[]
    inputType?: string
    disabled?: boolean
    readonly?: boolean
    error?: boolean
    success?: boolean
    label?: string
  }>(),
  {
    theme: 'box',
    variant: 'default',
    size: 'md',
    numInputs: 6,
    separator: '',
    inputType: 'tel',
    disabled: false,
    readonly: false,
    error: false,
    success: false,
  }
)

const value = ref('')
</script>

<template>
  <div class="otp-demo">
    <div v-if="label" class="otp-demo__label">{{ label }}</div>
    <div class="otp-demo__input">
      <OtpInput
        v-model="value"
        :theme="(theme as any)"
        :variant="(variant as any)"
        :size="(size as any)"
        :num-inputs="numInputs"
        :separator="separator"
        :placeholder="placeholder"
        :input-type="(inputType as any)"
        :disabled="disabled"
        :readonly="readonly"
        :error="error"
        :success="success"
      />
    </div>
    <div v-if="value" class="otp-demo__value">
      <span class="otp-demo__value-label">Value:</span>
      <code>{{ value }}</code>
    </div>
  </div>
</template>

<style scoped>
.otp-demo {
  padding: 20px 0;
}
.otp-demo__label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
  margin-bottom: 10px;
}
.otp-demo__input {
  display: flex;
  align-items: center;
}
.otp-demo__value {
  margin-top: 10px;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.otp-demo__value-label {
  margin-right: 6px;
}
.otp-demo__value code {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 2px;
}
</style>
