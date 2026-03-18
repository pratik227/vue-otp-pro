<script setup>
import OtpPlayground from '../../components/OtpPlayground.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Playground Interactivo

Construye tu input OTP perfecto alternando opciones. El código generado se actualiza en vivo.

<OtpPlayground />

## Ejemplos Rápidos

### OTP básico de 6 dígitos

<div class="demo-container">
  <OtpDemo />
</div>

```vue
<OtpInput v-model="otp" />
```

### PIN de 4 dígitos

<div class="demo-container">
  <OtpDemo :num-inputs="4" />
</div>

```vue
<OtpInput v-model="pin" :num-inputs="4" />
```

### Modo Contraseña

<div class="demo-container">
  <OtpDemo :num-inputs="4" input-type="password" />
</div>

```vue
<OtpInput :num-inputs="4" input-type="password" />
```

### Todos los Tamaños

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="Pequeño" />
  <OtpDemo :num-inputs="4" size="md" label="Mediano" />
  <OtpDemo :num-inputs="4" size="lg" label="Grande" />
  <OtpDemo :num-inputs="4" size="xl" label="Extra Grande" />
</div>
