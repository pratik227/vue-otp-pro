<script setup>
import ThemeShowcase from '../../components/ThemeShowcase.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Temas

Vue OTP Pro incluye **11 temas integrados** listos para usar. Combínalos con **5 variantes de color** para **55+ combinaciones**.

## Todos los Temas

<ThemeShowcase />

## Variantes de Color

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

## Propiedades CSS Personalizadas

```css
.vop {
  --vop-border-color: #d1d5db;
  --vop-border-focus: #6366f1;
  --vop-bg: #ffffff;
  --vop-text: #1f2937;
  --vop-shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
```

### Modo Oscuro

```css
.dark .vop {
  --vop-border-color: #374151;
  --vop-border-focus: #818cf8;
  --vop-bg: #1f2937;
  --vop-text: #f9fafb;
}
```

## Tamaños

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="Pequeño" />
  <OtpDemo :num-inputs="4" size="md" label="Mediano" />
  <OtpDemo :num-inputs="4" size="lg" label="Grande" />
  <OtpDemo :num-inputs="4" size="xl" label="Extra Grande" />
</div>
