<script setup>
import FullCompareTable from '../components/FullCompareTable.vue'
import SponsorBanner from '../components/SponsorBanner.vue'
import { Icon } from '@iconify/vue'
</script>

# Library Comparison

How does Vue OTP Pro stack up against other Vue 3 OTP input libraries? Here's a detailed side-by-side comparison.

## Full Comparison Table

<FullCompareTable />

## Library Summaries

### <Icon icon="tabler:circle-check-filled" width="18" height="18" style="color: #6366f1; vertical-align: -3px;" /> Vue OTP Pro

The most feature-complete standalone OTP library for Vue 3. Ships with 11 themes, 5 color variants, smooth animations, full accessibility, IME handling, paste delimiter filtering, and a composable API. ~3 KB gzipped.

### <Icon icon="tabler:circle-check-filled" width="18" height="18" style="color: #10b981; vertical-align: -3px;" /> PrimeVue InputOtp

Part of the popular PrimeVue UI suite (~470K weekly downloads). Great if you're already using PrimeVue — benefits from the unified theme system and slot-based customization. However, the InputOtp component itself has only 4 core props and no OTP-specific features like auto-focus, complete event, or exposed methods.

**Best for:** Teams already using PrimeVue who want consistency.

### <Icon icon="tabler:circle-check-filled" width="18" height="18" style="color: #f59e0b; vertical-align: -3px;" /> vue3-otp-input

The most popular standalone OTP library (~27K weekly downloads). Good TypeScript support and exposed methods (clear/fill). However, it has known bugs with partial v-model sync, IME/Chinese input bypass, and paste handling. No built-in themes, animations, or ARIA support.

**Best for:** Simple use cases where you provide your own CSS.

### <Icon icon="tabler:circle-check-filled" width="18" height="18" style="color: #3b82f6; vertical-align: -3px;" /> Syncfusion OTP Input

Enterprise-grade component with the best accessibility compliance (WCAG 2.2, Section 508). Offers 8 theme presets and 3 styling modes. However, it requires a commercial license for most businesses, ships as part of a large package (~877 KB), and lacks features like auto-focus, composable API, and paste delimiter handling.

**Best for:** Enterprise teams needing compliance certifications and have a Syncfusion license.

### <Icon icon="tabler:circle-check-filled" width="18" height="18" style="color: #8b5cf6; vertical-align: -3px;" /> @healerlab/vue3-simple-otp-input

Lightweight library with an explicit paste toggle and color props for quick styling. Pre-1.0 (v0.0.9) with very low adoption (~350 downloads/week). Has broken TypeScript types field, no v-model support (callbacks only), and no accessibility features.

**Best for:** Quick prototypes where you need minimal configuration.

## What Vue OTP Pro Does Differently

<div style="margin: 24px 0;">

### <Icon icon="tabler:bug-off" width="18" height="18" style="color: #22c55e; vertical-align: -3px;" /> Bugs Fixed

None of the other libraries handle all three of these correctly:

1. **Partial v-model sync** — Setting `v-model` to a value shorter than `numInputs` works correctly
2. **IME composition** — Chinese/Japanese/Korean input is validated after composition ends
3. **Paste delimiter filtering** — Pasting `123-456` extracts only digits automatically

### <Icon icon="tabler:palette" width="18" height="18" style="color: #6366f1; vertical-align: -3px;" /> 11 Standalone Themes

No need to install a full UI framework. Pick a theme, pick a variant, and you're done:

```vue
<OtpInput theme="neon" variant="primary" size="lg" />
```

### <Icon icon="tabler:robot" width="18" height="18" style="color: #8b5cf6; vertical-align: -3px;" /> AI-Ready Documentation

The only OTP library shipping `llms.txt` and `llms-full.txt` for AI coding assistants. Your AI tools can generate correct Vue OTP Pro code out of the box.

### <Icon icon="tabler:tool" width="18" height="18" style="color: #f59e0b; vertical-align: -3px;" /> Composable API

`useOtp()` gives you full control for building custom OTP UIs without being locked into our component structure.

</div>

<SponsorBanner message="Vue OTP Pro is free and open-source. Sponsoring helps maintain the library, add new themes, and improve documentation." />
