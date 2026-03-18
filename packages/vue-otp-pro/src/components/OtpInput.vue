<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import OtpSingleInput from './OtpSingleInput.vue'
import { useOtp } from '../composables/useOtp'
import type { OtpInputType, OtpTheme, OtpVariant, OtpSize } from '../types'
import '../styles/themes.css'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    numInputs?: number
    inputType?: OtpInputType
    inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
    theme?: OtpTheme
    variant?: OtpVariant
    size?: OtpSize
    placeholder?: string | string[]
    separator?: string
    shouldAutoFocus?: boolean
    disabled?: boolean
    readonly?: boolean
    error?: boolean
    success?: boolean
    inputClasses?: string | string[]
    conditionalClass?: string[] | ((index: number, value: string) => string)
    containerClass?: string
    shouldFocusOrder?: boolean
    ariaLabel?: string
  }>(),
  {
    modelValue: '',
    numInputs: 6,
    inputType: 'tel',
    inputmode: 'numeric',
    theme: 'box',
    variant: 'default',
    size: 'md',
    placeholder: '',
    separator: '',
    shouldAutoFocus: false,
    disabled: false,
    readonly: false,
    error: false,
    success: false,
    inputClasses: '',
    conditionalClass: undefined,
    containerClass: '',
    shouldFocusOrder: false,
    ariaLabel: 'OTP Input',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
  complete: [value: string]
}>()

const {
  otp,
  activeInput,
  otpValue,
  isComplete,
  isValidChar,
  setInputValue,
  clearAll,
  fillAll,
  syncLength,
} = useOtp(
  () => props.numInputs,
  () => props.inputType
)

const inputRefs = ref<InstanceType<typeof OtpSingleInput>[]>([])
const justFilledIndex = ref<number | null>(null)

const containerClasses = computed(() => [
  'vop',
  `vop--${props.theme}`,
  `vop--${props.size}`,
  `vop--${props.variant}`,
  {
    'is-error': props.error,
    'is-success': props.success,
    'is-disabled': props.disabled,
  },
  props.containerClass,
])

function getPlaceholder(index: number): string {
  if (Array.isArray(props.placeholder)) {
    return props.placeholder[index] || ''
  }
  return props.placeholder
}

function getConditionalClass(index: number): string {
  if (!props.conditionalClass) return ''
  if (typeof props.conditionalClass === 'function') {
    return props.conditionalClass(index, otp.value[index] || '')
  }
  if (Array.isArray(props.conditionalClass)) {
    return props.conditionalClass[index] || ''
  }
  return ''
}

function focusInput(index: number) {
  activeInput.value = Math.max(0, Math.min(index, props.numInputs - 1))
}

function focusNext() {
  focusInput(activeInput.value + 1)
}

function focusPrev() {
  focusInput(activeInput.value - 1)
}

function handleChange(index: number, value: string) {
  // Enforce sequential focus order: redirect to first empty index if skipping ahead
  if (props.shouldFocusOrder && value) {
    const firstEmptyIndex = otp.value.findIndex((v) => !v)
    if (firstEmptyIndex !== -1 && firstEmptyIndex < index) {
      focusInput(firstEmptyIndex)
      return
    }
  }

  if (value.length > 1) {
    // Multi-char input (iOS autofill or paste-like behavior)
    handleMultiCharInput(index, value)
    return
  }

  if (value && !isValidChar(value)) return

  setInputValue(index, value)

  if (value) {
    triggerPopAnimation(index)
    focusNext()
  }

  emitValues()
}

function handleMultiCharInput(startIndex: number, value: string) {
  const chars = value.split('').filter(isValidChar)
  let idx = startIndex

  for (const char of chars) {
    if (idx >= props.numInputs) break
    setInputValue(idx, char)
    triggerPopAnimation(idx)
    idx++
  }

  focusInput(Math.min(idx, props.numInputs - 1))
  emitValues()
}

function handleKeyDown(index: number, e: KeyboardEvent) {
  switch (e.key) {
    case 'Backspace':
      e.preventDefault()
      if (otp.value[index]) {
        setInputValue(index, '')
      } else {
        focusPrev()
        setInputValue(Math.max(0, index - 1), '')
      }
      emitValues()
      break

    case 'Delete':
      e.preventDefault()
      setInputValue(index, '')
      emitValues()
      break

    case 'ArrowLeft':
      e.preventDefault()
      focusPrev()
      break

    case 'ArrowRight':
      e.preventDefault()
      focusNext()
      break

    case 'Enter':
      if (isComplete.value) {
        emit('complete', otpValue.value)
      }
      break
  }
}

function handlePaste(index: number, e: ClipboardEvent) {
  e.preventDefault()
  const pasteData = e.clipboardData?.getData('text/plain') || ''
  const chars = pasteData.split('').filter(isValidChar)

  if (chars.length === 0) return

  let idx = index
  for (const char of chars) {
    if (idx >= props.numInputs) break
    setInputValue(idx, char)
    triggerPopAnimation(idx)
    idx++
  }

  focusInput(Math.min(idx, props.numInputs - 1))
  emitValues()
}

function handleFocus(index: number) {
  activeInput.value = index
}

function triggerPopAnimation(index: number) {
  justFilledIndex.value = index
  setTimeout(() => {
    if (justFilledIndex.value === index) {
      justFilledIndex.value = null
    }
  }, 200)
}

function emitValues() {
  const value = otpValue.value
  emit('update:modelValue', value)
  emit('change', value)

  if (isComplete.value) {
    emit('complete', value)
  }
}

// Sync with external v-model
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== otpValue.value) {
      if (newVal) {
        fillAll(newVal)
      } else {
        clearAll()
      }
    }
  }
)

// Sync numInputs changes
watch(
  () => props.numInputs,
  (newLen) => syncLength(newLen)
)

onMounted(() => {
  if (props.modelValue) {
    fillAll(props.modelValue)
  }
  if (props.shouldAutoFocus) {
    nextTick(() => focusInput(0))
  }
})

// Exposed API
function clear() {
  clearAll()
  emitValues()
  nextTick(() => focusInput(0))
}

function fill(value: string) {
  if (fillAll(value)) {
    emitValues()
  }
}

function focusFirst() {
  focusInput(0)
}

defineExpose({ clear, fill, focus: focusFirst, focusInput })
</script>

<template>
  <div :class="containerClasses" :aria-label="ariaLabel" role="group">
    <template v-for="(_, i) in numInputs" :key="i">
      <OtpSingleInput
        ref="inputRefs"
        :value="otp[i] || ''"
        :input-type="inputType"
        :inputmode="inputmode"
        :is-focused="activeInput === i"
        :is-disabled="disabled"
        :is-readonly="readonly"
        :placeholder="getPlaceholder(i)"
        :input-classes="[
          inputClasses,
          getConditionalClass(i),
          { 'just-filled': justFilledIndex === i },
        ]"
        :is-last-child="i === numInputs - 1"
        :label="`${ariaLabel} digit ${i + 1}`"
        @change="handleChange(i, $event)"
        @keydown="handleKeyDown(i, $event)"
        @paste="handlePaste(i, $event)"
        @focus="handleFocus(i)"
      />
      <slot v-if="i < numInputs - 1 && separator" name="separator">
        <span class="vop__separator" v-html="separator" />
      </slot>
    </template>
  </div>
</template>
