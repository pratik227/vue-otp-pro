---
layout: home
hero:
  name: Vue OTP Pro
  text: El Input OTP que Vue 3 Merece
  tagline: 11 temas integrados, animaciones suaves, accesibilidad completa y cero dolores de cabeza.
  image:
    src: /logo.svg
    alt: Vue OTP Pro
  actions:
    - theme: brand
      text: Comenzar
      link: /es/guide/getting-started
    - theme: alt
      text: Playground Interactivo
      link: /es/examples/
    - theme: alt
      text: GitHub
      link: https://github.com/pratik227
---

<script setup>
import AuthorCard from '../components/AuthorCard.vue'
import FeatureCard from '../components/FeatureCard.vue'
import SponsorBanner from '../components/SponsorBanner.vue'
</script>

<div class="vp-doc" style="max-width: 960px; margin: 0 auto; padding: 48px 24px 0;">

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11 Temas Integrados" description="Box, Underline, Rounded, Pill, Separated, Flush, Shadow, Neon, Glass, Minimal, Filled — todos pulidos de fábrica." />
  <FeatureCard icon="tabler:rainbow" title="5 Variantes de Color" description="Default, Primary, Success, Danger, Warning — combina con cualquier tema para más de 55 combinaciones." />
  <FeatureCard icon="tabler:sparkles" title="Animaciones Suaves" description="Pop al escribir, shake en error, pulse en éxito — CSS puro, sin overhead de JS." />
  <FeatureCard icon="tabler:device-mobile" title="Mobile First" description="Autocompletado SMS iOS, soporte de pegado, manejo de composición IME y control de teclado virtual." />
  <FeatureCard icon="tabler:accessible" title="Totalmente Accesible" description="Etiquetas ARIA, role=&quot;group&quot;, navegación por teclado, soporte para lectores de pantalla." />
  <FeatureCard icon="tabler:package" title="Ligero y Tree-shakeable" description="~3 KB gzipped. Soporte completo de TypeScript. API Composable para casos avanzados." />
  <FeatureCard icon="tabler:brand-typescript" title="TypeScript Primero" description="Definiciones de tipos completas, tipos exportados para props y métodos expuestos." />
  <FeatureCard icon="tabler:robot" title="Listo para IA / LLM" description="Incluye llms.txt y llms-full.txt para asistentes de código IA y agentes de generación." />
  <FeatureCard icon="tabler:bug-off" title="Probado en Batalla" description="Corrige errores de sincronización v-model, bypass IME y delimitadores en pegado de otras librerías." />
</div>

<SponsorBanner message="¿Te gusta Vue OTP Pro? Patrocina el proyecto para apoyar el desarrollo continuo y nuevos temas." />

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="Desarrollador Vue.js apasionado creando herramientas open-source que hacen el desarrollo frontend delightful."
/>

</div>
