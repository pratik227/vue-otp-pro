<script setup>
import ThemeShowcase from '../../components/ThemeShowcase.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# 主题

Vue OTP Pro 自带 **11 种内置主题**。与 **5 种颜色变体** 搭配可产生 **55+ 种组合**。

## 所有主题

<ThemeShowcase />

## 颜色变体

<div class="demo-container">
  <OtpDemo :num-inputs="4" variant="primary" label="Primary" />
  <OtpDemo :num-inputs="4" variant="success" label="Success" />
  <OtpDemo :num-inputs="4" variant="danger" label="Danger" />
  <OtpDemo :num-inputs="4" variant="warning" label="Warning" />
</div>

## CSS 自定义属性

```css
.vop {
  --vop-border-color: #d1d5db;
  --vop-border-focus: #6366f1;
  --vop-bg: #ffffff;
  --vop-text: #1f2937;
  --vop-shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
```

### 暗黑模式

```css
.dark .vop {
  --vop-border-color: #374151;
  --vop-border-focus: #818cf8;
  --vop-bg: #1f2937;
  --vop-text: #f9fafb;
}
```

## 尺寸

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="小" />
  <OtpDemo :num-inputs="4" size="md" label="中" />
  <OtpDemo :num-inputs="4" size="lg" label="大" />
  <OtpDemo :num-inputs="4" size="xl" label="超大" />
</div>
