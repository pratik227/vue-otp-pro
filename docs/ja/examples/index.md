<script setup>
import OtpPlayground from '../../components/OtpPlayground.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# インタラクティブプレイグラウンド

オプションを切り替えて完璧なOTP入力を作成。コードはリアルタイムで更新されます。

<OtpPlayground />

## クイック例

### 基本的な6桁OTP

<div class="demo-container">
  <OtpDemo />
</div>

```vue
<OtpInput v-model="otp" />
```

### 4桁PINコード

<div class="demo-container">
  <OtpDemo :num-inputs="4" />
</div>

### すべてのサイズ

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="小" />
  <OtpDemo :num-inputs="4" size="md" label="中" />
  <OtpDemo :num-inputs="4" size="lg" label="大" />
  <OtpDemo :num-inputs="4" size="xl" label="特大" />
</div>
