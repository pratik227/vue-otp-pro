<script setup>
import ThemeShowcase from '../components/ThemeShowcase.vue'
import OtpDemo from '../components/OtpDemo.vue'
</script>

# Theming

Vue OTP Pro ships with **11 built-in themes** that work out of the box. Mix them with **5 color variants** for **55+ combinations**.

## All Themes

<ThemeShowcase />

## Color Variants

Each variant applies a cohesive color scheme — border, focus ring, background, and caret.

<div class="demo-container">
  <div class="demo-container__title">Default</div>
  <OtpDemo :num-inputs="4" variant="default" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Primary</div>
  <OtpDemo :num-inputs="4" variant="primary" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Success</div>
  <OtpDemo :num-inputs="4" variant="success" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Danger</div>
  <OtpDemo :num-inputs="4" variant="danger" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Warning</div>
  <OtpDemo :num-inputs="4" variant="warning" />
</div>

## Mixing Theme + Variant

```vue
<OtpInput theme="underline" variant="danger" />
<OtpInput theme="separated" variant="success" />
<OtpInput theme="flush" variant="primary" />
```

<div class="demo-container">
  <div class="demo-container__title">Underline + Danger</div>
  <OtpDemo theme="underline" variant="danger" :num-inputs="4" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Separated + Success</div>
  <OtpDemo theme="separated" variant="success" :num-inputs="4" />
</div>

<div class="demo-container">
  <div class="demo-container__title">Flush + Primary</div>
  <OtpDemo theme="flush" variant="primary" :num-inputs="4" />
</div>

## CSS Custom Properties

Override these variables on the `.vop` selector to customize globally:

```css
.vop {
  /* Layout */
  --vop-font-family: 'Your Font', monospace;
  --vop-gap: 10px;
  --vop-transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* Colors */
  --vop-border-color: #d1d5db;
  --vop-border-focus: #6366f1;
  --vop-bg: #ffffff;
  --vop-bg-focus: #ffffff;
  --vop-text: #1f2937;
  --vop-placeholder: #9ca3af;
  --vop-caret-color: #6366f1;

  /* Focus ring */
  --vop-shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
```

### Dark Mode

```css
.dark .vop,
[data-theme="dark"] .vop {
  --vop-border-color: #374151;
  --vop-border-focus: #818cf8;
  --vop-bg: #1f2937;
  --vop-bg-focus: #1f2937;
  --vop-text: #f9fafb;
  --vop-placeholder: #6b7280;
  --vop-shadow-focus: 0 0 0 3px rgba(129, 140, 248, 0.2);
}
```

### Variant Colors

Each variant has its own set of CSS variables you can override:

```css
.vop {
  /* Success */
  --vop-success-border: #86efac;
  --vop-success-focus: #22c55e;
  --vop-success-bg: #f0fdf4;
  --vop-success-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);

  /* Danger */
  --vop-danger-border: #fca5a5;
  --vop-danger-focus: #ef4444;
  --vop-danger-bg: #fef2f2;
  --vop-danger-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);

  /* Warning */
  --vop-warning-border: #fde68a;
  --vop-warning-focus: #f59e0b;
  --vop-warning-bg: #fffbeb;
  --vop-warning-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}
```

## Sizes

Four built-in sizes that scale width, height, font, and gap proportionally.

| Size | Input dimensions | Font size |
|------|-----------------|-----------|
| `sm` | 36 x 36 px | 16px |
| `md` | 48 x 48 px | 22px |
| `lg` | 60 x 60 px | 28px |
| `xl` | 72 x 72 px | 34px |

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="Small" />
  <OtpDemo :num-inputs="4" size="md" label="Medium" />
  <OtpDemo :num-inputs="4" size="lg" label="Large" />
  <OtpDemo :num-inputs="4" size="xl" label="XL" />
</div>
