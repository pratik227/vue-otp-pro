<script setup>
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# Props y Eventos

Referencia completa de la API del componente `<OtpInput>`.

## Props

### Básicos

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Enlace v-model para el valor OTP |
| `numInputs` | `number` | `6` | Número de campos de entrada |
| `inputType` | `'number' \| 'tel' \| 'letter-numeric' \| 'password'` | `'tel'` | Tipo de validación de entrada |
| `inputmode` | `string` | `'numeric'` | Inputmode HTML para teclado virtual |

### Apariencia

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `theme` | `OtpTheme` | `'box'` | Tema visual (ver [Temas](/es/guide/theming)) |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | Variante de color |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del input |
| `placeholder` | `string \| string[]` | `''` | Placeholder (string para todos, o array por input) |
| `separator` | `string` | `''` | HTML a renderizar entre inputs |

### Estado

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `shouldAutoFocus` | `boolean` | `false` | Auto-focus en el primer input al montar |
| `shouldFocusOrder` | `boolean` | `false` | Forzar orden secuencial de entrada |
| `disabled` | `boolean` | `false` | Deshabilitar todos los inputs |
| `readonly` | `boolean` | `false` | Modo solo lectura |
| `error` | `boolean` | `false` | Estado de error (activa animación shake) |
| `success` | `boolean` | `false` | Estado de éxito (activa animación pulse) |

### Estilo

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `inputClasses` | `string \| string[]` | `''` | Clases CSS para cada input |
| `conditionalClass` | `string[] \| (index, value) => string` | — | Clases por input (array o función) |
| `containerClass` | `string` | `''` | Clase CSS para el contenedor |
| `ariaLabel` | `string` | `'OTP Input'` | Etiqueta accesible |

### Tipo de Tema

```ts
type OtpTheme =
  | 'box'        // Bordes limpios con esquinas redondeadas
  | 'underline'  // Borde inferior mínimo
  | 'rounded'    // Inputs circulares
  | 'pill'       // Forma de cápsula
  | 'separated'  // Tarjetas elevadas con efecto lift
  | 'flush'      // Barra continua unida
  | 'shadow'     // Sombra prominente
  | 'neon'       // Brillo neón sobre fondo oscuro
  | 'glass'      // Glassmorfismo con blur
  | 'minimal'    // Bordes finos, ultra limpio
  | 'filled'     // Fondo sólido, sin borde
```

## Eventos

| Evento | Payload | Descripción |
|--------|---------|-------------|
| `update:modelValue` | `string` | Cada cambio (soporte v-model) |
| `change` | `string` | Cada cambio de carácter |
| `complete` | `string` | Todos los inputs completados |

```vue
<OtpInput
  v-model="otp"
  @change="enCadaCambio"
  @complete="alCompletar"
/>
```

## Métodos Expuestos

Accede mediante una ref de template:

```vue
<script setup>
import { ref } from 'vue'
import { OtpInput } from 'vue-otp-pro'

const otpRef = ref<InstanceType<typeof OtpInput> | null>(null)

otpRef.value?.clear()        // Limpiar todos los inputs
otpRef.value?.fill('123456') // Rellenar todos los inputs
otpRef.value?.focus()        // Enfocar el primer input
otpRef.value?.focusInput(3)  // Enfocar un input específico por índice
</script>

<template>
  <OtpInput ref="otpRef" />
</template>
```

| Método | Argumentos | Descripción |
|--------|------------|-------------|
| `clear()` | — | Limpia todos los inputs y enfoca el primero |
| `fill(value)` | `string` | Rellena los inputs con el valor dado |
| `focus()` | — | Enfoca el primer input |
| `focusInput(index)` | `number` | Enfoca un input específico por índice |

## Slots

### `separator`

```vue
<OtpInput separator="-">
  <template #separator>
    <span style="color: #6366f1; font-weight: bold;">-</span>
  </template>
</OtpInput>
```

## TypeScript

Todos los tipos son exportados:

```ts
import type {
  OtpInputProps, OtpInputExpose, OtpInputType,
  OtpTheme, OtpVariant, OtpSize,
} from 'vue-otp-pro'
```
