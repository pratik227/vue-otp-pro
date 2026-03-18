<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import type { OtpInputType } from '../types'

const props = withDefaults(
  defineProps<{
    value?: string
    inputType?: OtpInputType
    inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
    isFocused?: boolean
    isDisabled?: boolean
    isReadonly?: boolean
    placeholder?: string
    inputClasses?: unknown
    isLastChild?: boolean
    label?: string
  }>(),
  {
    value: '',
    inputType: 'tel',
    inputmode: 'numeric',
    isFocused: false,
    isDisabled: false,
    isReadonly: false,
    placeholder: '',
    inputClasses: undefined,
    isLastChild: false,
    label: 'OTP digit',
  }
)

const emit = defineEmits<{
  change: [value: string]
  keydown: [event: KeyboardEvent]
  paste: [event: ClipboardEvent]
  focus: []
  blur: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isComposing = ref(false)

const isIOS =
  typeof navigator !== 'undefined' &&
  /iPhone|iPad|iPod/i.test(navigator.userAgent)

function handleCompositionStart() {
  isComposing.value = true
}

function handleCompositionEnd(e: CompositionEvent) {
  isComposing.value = false
  const target = e.target as HTMLInputElement
  const val = target.value

  // After IME composition ends, validate the result
  if (val.length === 0) {
    emit('change', '')
    return
  }

  // Filter to only valid characters
  const validChars = val.split('').filter((c) => isValidKeyForType(c, props.inputType!))
  if (validChars.length === 0) {
    // Reset input — no valid characters from composition
    target.value = ''
    emit('change', '')
    return
  }

  // If multiple valid chars, let parent handle multi-char
  if (validChars.length > 1) {
    emit('change', validChars.join(''))
  } else {
    emit('change', validChars[0])
  }
}

function handleInput(e: Event) {
  // Ignore input events during IME composition
  if (isComposing.value) return

  const target = e.target as HTMLInputElement
  const val = target.value

  if (val.length > 1) {
    // iOS SMS autofill or paste-like behavior
    // Filter invalid characters before passing up
    const validChars = val.split('').filter((c) => isValidKeyForType(c, props.inputType!))
    if (validChars.length === 0) {
      target.value = ''
      emit('change', '')
      return
    }
    emit('change', validChars.join(''))
    return
  }

  // Single char — validate
  if (val && !isValidKeyForType(val, props.inputType!)) {
    target.value = ''
    emit('change', '')
    return
  }

  emit('change', val)
}

function handleKeyDown(e: KeyboardEvent) {
  // Allow navigation & special keys
  if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) {
    emit('keydown', e)
    return
  }

  // Meta/Ctrl combos (paste, select all, etc.)
  if (e.metaKey || e.ctrlKey) {
    emit('keydown', e)
    return
  }

  // Validate character
  const char = e.key
  if (char.length === 1) {
    const isValid = isValidKeyForType(char, props.inputType)
    if (!isValid && !isIOS) {
      e.preventDefault()
      return
    }
  }

  emit('keydown', e)
}

function isValidKeyForType(key: string, type: OtpInputType): boolean {
  switch (type) {
    case 'number':
    case 'tel':
      return /^\d$/.test(key)
    case 'letter-numeric':
      return /^[a-zA-Z0-9]$/.test(key)
    case 'password':
      return key.length === 1
    default:
      return /^\d$/.test(key)
  }
}

function handleFocus() {
  inputRef.value?.select()
  emit('focus')
}

function handlePaste(e: ClipboardEvent) {
  emit('paste', e)
}

watch(
  () => props.isFocused,
  (focused) => {
    if (focused) {
      nextTick(() => inputRef.value?.focus())
    }
  }
)

defineExpose({ inputRef })
</script>

<template>
  <input
    ref="inputRef"
    :class="[
      'vop__input',
      { 'is-filled': value !== '' },
      { 'is-readonly': isReadonly },
      inputClasses,
    ]"
    :type="inputType === 'password' ? 'password' : 'text'"
    :inputmode="inputmode"
    :value="value"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :readonly="isReadonly"
    :maxlength="isLastChild ? 1 : undefined"
    :aria-label="label"
    autocomplete="one-time-code"
    @input="handleInput"
    @keydown="handleKeyDown"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @focus="handleFocus"
    @blur="$emit('blur')"
    @paste="handlePaste"
  />
</template>
