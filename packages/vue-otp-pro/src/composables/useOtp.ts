import { ref, computed } from 'vue'
import type { OtpInputType } from '../types'

const NUMERIC_REGEX = /^\d$/
const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]$/

export function useOtp(numInputs: () => number, inputType: () => OtpInputType) {
  const otp = ref<string[]>(Array(numInputs()).fill(''))
  const activeInput = ref(0)

  const otpValue = computed(() => otp.value.join(''))
  const isComplete = computed(() => otp.value.every((v) => v !== ''))

  function isValidChar(char: string): boolean {
    switch (inputType()) {
      case 'number':
      case 'tel':
        return NUMERIC_REGEX.test(char)
      case 'letter-numeric':
        return ALPHANUMERIC_REGEX.test(char)
      case 'password':
        return char.length === 1
      default:
        return NUMERIC_REGEX.test(char)
    }
  }

  function setInputValue(index: number, value: string) {
    const newOtp = [...otp.value]
    newOtp[index] = value
    otp.value = newOtp
  }

  function clearAll() {
    otp.value = Array(numInputs()).fill('')
    activeInput.value = 0
  }

  function fillAll(value: string) {
    const chars = value.split('').filter(isValidChar).slice(0, numInputs())
    if (chars.length === 0) return false
    // Pad with empty strings to fill remaining slots
    const padded = [...chars, ...Array(Math.max(0, numInputs() - chars.length)).fill('')]
    otp.value = padded
    activeInput.value = Math.min(chars.length, numInputs() - 1)
    return true
  }

  function syncLength(newLength: number) {
    if (otp.value.length < newLength) {
      otp.value = [...otp.value, ...Array(newLength - otp.value.length).fill('')]
    } else if (otp.value.length > newLength) {
      otp.value = otp.value.slice(0, newLength)
    }
    if (activeInput.value >= newLength) {
      activeInput.value = Math.max(0, newLength - 1)
    }
  }

  return {
    otp,
    activeInput,
    otpValue,
    isComplete,
    isValidChar,
    setInputValue,
    clearAll,
    fillAll,
    syncLength,
  }
}
