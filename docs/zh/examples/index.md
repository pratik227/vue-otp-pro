<script setup>
import OtpPlayground from '../../components/OtpPlayground.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# 交互式演练场

通过切换选项构建你的完美 OTP 输入。生成的代码实时更新。

<OtpPlayground />

## 快速示例

### 基础 6 位 OTP

<div class="demo-container">
  <OtpDemo />
</div>

```vue
<OtpInput v-model="otp" />
```

### 4 位 PIN 码

<div class="demo-container">
  <OtpDemo :num-inputs="4" />
</div>

```vue
<OtpInput v-model="pin" :num-inputs="4" />
```

### 密码模式

<div class="demo-container">
  <OtpDemo :num-inputs="4" input-type="password" />
</div>

### 所有尺寸

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="小" />
  <OtpDemo :num-inputs="4" size="md" label="中" />
  <OtpDemo :num-inputs="4" size="lg" label="大" />
  <OtpDemo :num-inputs="4" size="xl" label="超大" />
</div>
