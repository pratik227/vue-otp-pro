export type OtpInputType = 'number' | 'tel' | 'letter-numeric' | 'password'
export type OtpTheme =
  | 'box'
  | 'underline'
  | 'rounded'
  | 'pill'
  | 'separated'
  | 'flush'
  | 'shadow'
  | 'neon'
  | 'glass'
  | 'minimal'
  | 'filled'
export type OtpVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning'
export type OtpSize = 'sm' | 'md' | 'lg' | 'xl'

export interface OtpInputProps {
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
}

export interface OtpInputExpose {
  clear: () => void
  fill: (value: string) => void
  focus: () => void
  focusInput: (index: number) => void
}
