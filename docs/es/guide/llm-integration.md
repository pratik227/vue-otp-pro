<script setup>
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# Integración IA y LLM

Vue OTP Pro proporciona archivos de documentación estructurada que los asistentes de IA pueden usar para generar código correcto.

## llms.txt

Siguiendo el [estándar llms.txt](https://llmstxt.org/), proporcionamos documentación legible por máquinas en:

- **`/llms.txt`** — Resumen con enlaces a todas las secciones
- **`/llms-full.txt`** — Referencia completa de API en un solo archivo

## Para Asistentes de Código IA

Si estás usando un asistente de IA (Claude, Cursor, Copilot, etc.):

```
Lee /llms-full.txt de la documentación de Vue OTP Pro para la referencia completa de la API.
```

## Patrones Comunes de Generación

**OTP Básico:**
```vue
<OtpInput v-model="otp" @complete="verify" />
```

**Con tema y manejo de errores:**
```vue
<OtpInput
  v-model="otp"
  theme="separated"
  variant="primary"
  size="lg"
  :error="hasError"
  should-auto-focus
  @complete="verify"
/>
```

<SponsorBanner message="¿Construyes herramientas con IA usando Vue OTP Pro? Patrocina el proyecto para priorizar documentación y herramientas amigables con IA." />
