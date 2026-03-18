<script setup>
import ThemeShowcase from '../../components/ThemeShowcase.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# テーマ

Vue OTP Pro には **11 のビルトインテーマ**が付属。**5 つのカラーバリアント**と組み合わせて **55 以上の組み合わせ**が可能。

## すべてのテーマ

<ThemeShowcase />

## カラーバリアント

<div class="demo-container">
  <OtpDemo :num-inputs="4" variant="primary" label="Primary" />
  <OtpDemo :num-inputs="4" variant="success" label="Success" />
  <OtpDemo :num-inputs="4" variant="danger" label="Danger" />
  <OtpDemo :num-inputs="4" variant="warning" label="Warning" />
</div>

## CSS カスタムプロパティ

```css
.vop {
  --vop-border-color: #d1d5db;
  --vop-border-focus: #6366f1;
  --vop-bg: #ffffff;
  --vop-text: #1f2937;
}
```

### ダークモード

```css
.dark .vop {
  --vop-border-color: #374151;
  --vop-border-focus: #818cf8;
  --vop-bg: #1f2937;
  --vop-text: #f9fafb;
}
```

## サイズ

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="小" />
  <OtpDemo :num-inputs="4" size="md" label="中" />
  <OtpDemo :num-inputs="4" size="lg" label="大" />
  <OtpDemo :num-inputs="4" size="xl" label="特大" />
</div>
