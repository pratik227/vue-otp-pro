<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Props 和事件

`<OtpInput>` 组件的完整 API 参考。

## Props

### 核心

| Prop | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `modelValue` | `string` | `''` | OTP 值的 v-model 绑定 |
| `numInputs` | `number` | `6` | 输入框数量 |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | 输入验证类型 |
| `inputmode` | `string` | `'numeric'` | 虚拟键盘的 HTML inputmode |

### 外观

| Prop | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `theme` | `OtpTheme` | `'box'` | 视觉主题（见 [主题](/zh/guide/theming)） |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | 颜色变体 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 输入框大小 |
| `placeholder` | `string \| string[]` | `''` | 占位符（字符串或每个输入框的数组） |
| `separator` | `string` | `''` | 输入框之间渲染的 HTML |

### 状态

| Prop | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `shouldAutoFocus` | `boolean` | `false` | 挂载时自动聚焦第一个输入框 |
| `shouldFocusOrder` | `boolean` | `false` | 强制顺序输入 |
| `disabled` | `boolean` | `false` | 禁用所有输入框 |
| `readonly` | `boolean` | `false` | 只读模式 |
| `error` | `boolean` | `false` | 错误状态（触发抖动动画） |
| `success` | `boolean` | `false` | 成功状态（触发脉冲动画） |

### 样式

| Prop | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `inputClasses` | `string \| string[]` | `''` | 每个输入框的 CSS 类 |
| `conditionalClass` | `string[] \| (index, value) => string` | — | 每个输入框的类（数组或函数） |
| `containerClass` | `string` | `''` | 容器的 CSS 类 |
| `ariaLabel` | `string` | `'OTP Input'` | 无障碍标签 |

## 事件

| 事件 | 载荷 | 描述 |
|------|------|------|
| `update:modelValue` | `string` | 每次变化（v-model 支持） |
| `change` | `string` | 每次字符变化 |
| `complete` | `string` | 所有输入框填满 |

## 暴露的方法

通过模板 ref 访问：

```vue
<script setup>
const otpRef = ref(null)

otpRef.value?.clear()        // 清空所有输入框，聚焦第一个
otpRef.value?.fill('123456') // 填充所有输入框
otpRef.value?.focus()        // 聚焦第一个输入框
otpRef.value?.focusInput(3)  // 按索引聚焦特定输入框
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

| 方法 | 参数 | 描述 |
|------|------|------|
| `clear()` | — | 清空所有输入框并聚焦第一个 |
| `fill(value)` | `string` | 用给定值填充输入框 |
| `focus()` | — | 聚焦第一个输入框 |
| `focusInput(index)` | `number` | 按索引聚焦特定输入框 |

## TypeScript

所有类型均已导出：

```ts
import type {
  OtpInputProps, OtpInputExpose, OtpInputType,
  OtpTheme, OtpVariant, OtpSize,
} from 'vue-otp-pro'
```
