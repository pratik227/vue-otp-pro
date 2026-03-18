import OtpInput from './components/OtpInput.vue'
import type { App, Plugin } from 'vue'

export { OtpInput }
export type {
  OtpInputProps,
  OtpInputExpose,
  OtpInputType,
  OtpTheme,
  OtpVariant,
  OtpSize,
} from './types'
export { useOtp } from './composables/useOtp'

export const VueOtpPro: Plugin = {
  install(app: App) {
    app.component('OtpInput', OtpInput)
  },
}

export default OtpInput
