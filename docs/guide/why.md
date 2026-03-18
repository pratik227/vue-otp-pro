<script setup>
import CompareTable from '../components/CompareTable.vue'
import FeatureCard from '../components/FeatureCard.vue'
import SponsorBanner from '../components/SponsorBanner.vue'
</script>

# Why Vue OTP Pro?

Most OTP input libraries give you a bare `<input>` and leave styling, accessibility, and edge cases to you. Vue OTP Pro ships with everything built in.

## At a Glance

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11 Themes" description="From minimal underlines to glowing neon — pick a theme and ship." />
  <FeatureCard icon="tabler:shield-check" title="Bug-Free" description="Fixes known issues with partial v-model sync, IME input, and paste handling." />
  <FeatureCard icon="tabler:device-mobile" title="Mobile Ready" description="iOS SMS autofill, Android paste, Chinese IME — all handled correctly." />
  <FeatureCard icon="tabler:bolt" title="~3 KB" description="Smaller than the competition, with more features. Tree-shakeable." />
  <FeatureCard icon="tabler:tool" title="Composable API" description="useOtp() composable for building custom OTP UIs from scratch." />
  <FeatureCard icon="tabler:accessible" title="Accessible" description="ARIA labels, role=group, keyboard nav. Screen reader tested." />
</div>

## Quick Comparison

<CompareTable />

::: tip Full Comparison
See the [detailed library comparison](/guide/comparison) for a comprehensive side-by-side with PrimeVue, Syncfusion, vue3-otp-input, and @healerlab.
:::

## Known Issues We Fixed

These are documented bugs in `vue3-otp-input` that are **not present** in Vue OTP Pro:

### 1. Partial v-model sync

When a parent component sets a value shorter than `numInputs`, the original component silently ignores it. This breaks incremental fill, filtering, and any parent-driven state management.

**Vue OTP Pro:** Accepts any length value and correctly pads remaining inputs as empty.

### 2. Chinese / IME character bypass

When `inputType="number"`, Chinese characters can still be entered via IME composition because the original only validates on `keydown` — which IME bypasses entirely.

**Vue OTP Pro:** Handles `compositionstart`/`compositionend` events and validates the composed result, stripping invalid characters.

### 3. Paste with delimiters

Pasting a code like `123-456` includes the dash as a character. Users expect only digits to be extracted.

**Vue OTP Pro:** All paste and multi-char input is filtered through `isValidChar()` before being applied.

<SponsorBanner />
