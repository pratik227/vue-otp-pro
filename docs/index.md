---
layout: home
hero:
  name: Vue OTP Pro
  text: The OTP Input Vue 3 Deserves
  tagline: 11 built-in themes, smooth animations, full accessibility, and zero headaches. Drop in and go.
  image:
    src: /logo.svg
    alt: Vue OTP Pro
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Interactive Playground
      link: /examples/
    - theme: alt
      text: GitHub
      link: https://github.com/pratik227
---

<script setup>
import AuthorCard from './components/AuthorCard.vue'
import FeatureCard from './components/FeatureCard.vue'
import SponsorBanner from './components/SponsorBanner.vue'
</script>

<div class="vp-doc" style="max-width: 960px; margin: 0 auto; padding: 48px 24px 0;">

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11 Built-in Themes" description="Box, Underline, Rounded, Pill, Separated, Flush, Shadow, Neon, Glass, Minimal, Filled — all polished out of the box." />
  <FeatureCard icon="tabler:rainbow" title="5 Color Variants" description="Default, Primary, Success, Danger, Warning — mix with any theme for 55+ combinations." />
  <FeatureCard icon="tabler:sparkles" title="Smooth Animations" description="Pop on input, shake on error, pulse on success — pure CSS, zero JS overhead." />
  <FeatureCard icon="tabler:device-mobile" title="Mobile First" description="iOS SMS autofill, paste support, IME composition handling, and proper virtual keyboard control." />
  <FeatureCard icon="tabler:accessible" title="Fully Accessible" description="ARIA labels, role=&quot;group&quot;, keyboard navigation, screen reader support out of the box." />
  <FeatureCard icon="tabler:package" title="Tiny & Tree-shakeable" description="~3 KB gzipped. Full TypeScript support. Composable API for advanced use cases." />
  <FeatureCard icon="tabler:brand-typescript" title="TypeScript First" description="Full type definitions, exported types for props & exposed methods, and composable API." />
  <FeatureCard icon="tabler:robot" title="AI / LLM Ready" description="Ships with llms.txt and llms-full.txt for AI coding assistants and code generation agents." />
  <FeatureCard icon="tabler:bug-off" title="Battle-Tested" description="Fixes v-model sync, IME bypass, and paste delimiter bugs found in other OTP libraries." />
</div>

<SponsorBanner message="Love Vue OTP Pro? Sponsor the project to support continued development, new themes, and better tooling." />

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="Passionate Vue.js developer crafting open-source tools that make frontend development delightful. Creator of Vue OTP Pro and other Vue ecosystem libraries."
/>

</div>
