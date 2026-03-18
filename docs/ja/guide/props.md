<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Props とイベント

`<OtpInput>` コンポーネントの完全な API リファレンス。

## Props

### コア

| Prop | 型 | デフォルト | 説明 |
|------|---|-----------|------|
| `modelValue` | `string` | `''` | OTP 値の v-model バインディング |
| `numInputs` | `number` | `6` | 入力フィールドの数 |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | 入力バリデーションタイプ |
| `inputmode` | `string` | `'numeric'` | 仮想キーボード用の HTML inputmode |

### 外観

| Prop | 型 | デフォルト | 説明 |
|------|---|-----------|------|
| `theme` | `OtpTheme` | `'box'` | ビジュアルテーマ（[テーマ](/ja/guide/theming)参照） |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | カラーバリアント |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 入力サイズ |
| `placeholder` | `string \| string[]` | `''` | プレースホルダー |
| `separator` | `string` | `''` | 入力間に表示する HTML |

### 状態

| Prop | 型 | デフォルト | 説明 |
|------|---|-----------|------|
| `shouldAutoFocus` | `boolean` | `false` | マウント時に最初の入力にオートフォーカス |
| `shouldFocusOrder` | `boolean` | `false` | 順次入力を強制 |
| `disabled` | `boolean` | `false` | すべての入力を無効化 |
| `readonly` | `boolean` | `false` | 読み取り専用モード |
| `error` | `boolean` | `false` | エラー状態（シェイクアニメーション） |
| `success` | `boolean` | `false` | 成功状態（パルスアニメーション） |

## イベント

| イベント | ペイロード | 説明 |
|---------|-----------|------|
| `update:modelValue` | `string` | 変更ごと（v-model サポート） |
| `change` | `string` | 文字変更ごと |
| `complete` | `string` | すべての入力が埋まった時 |

## 公開メソッド

テンプレート ref でアクセス：

```vue
<script setup>
const otpRef = ref(null)

otpRef.value?.clear()        // すべてクリアし最初にフォーカス
otpRef.value?.fill('123456') // すべての入力を埋める
otpRef.value?.focus()        // 最初の入力にフォーカス
otpRef.value?.focusInput(3)  // インデックスで特定の入力にフォーカス
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

| メソッド | 引数 | 説明 |
|---------|------|------|
| `clear()` | — | すべてクリアし最初にフォーカス |
| `fill(value)` | `string` | 値で入力を埋める |
| `focus()` | — | 最初の入力にフォーカス |
| `focusInput(index)` | `number` | インデックスで特定の入力にフォーカス |

## TypeScript

すべての型がエクスポートされています：

```ts
import type {
  OtpInputProps, OtpInputExpose, OtpInputType,
  OtpTheme, OtpVariant, OtpSize,
} from 'vue-otp-pro'
```
