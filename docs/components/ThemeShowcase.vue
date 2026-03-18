<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const themes = [
  { name: 'box', label: 'Box', desc: 'Clean bordered with rounded corners', bg: '', icon: 'tabler:square-rounded' },
  { name: 'underline', label: 'Underline', desc: 'Minimal bottom-border style', bg: '', icon: 'tabler:underline' },
  { name: 'rounded', label: 'Rounded', desc: 'Circular playful inputs', bg: '', icon: 'tabler:circle' },
  { name: 'pill', label: 'Pill', desc: 'Capsule-shaped inputs', bg: '', icon: 'tabler:oval' },
  { name: 'separated', label: 'Separated', desc: 'Elevated cards with lift effect', bg: '', icon: 'tabler:layout-cards' },
  { name: 'flush', label: 'Flush', desc: 'Joined continuous bar', bg: '', icon: 'tabler:layout-columns' },
  { name: 'shadow', label: 'Shadow', desc: 'Prominent shadow, lift on focus', bg: '', icon: 'tabler:shadow' },
  { name: 'minimal', label: 'Minimal', desc: 'Thin borders, ultra clean', bg: '', icon: 'tabler:minus' },
  { name: 'filled', label: 'Filled', desc: 'Solid background, no border', bg: '', icon: 'tabler:square-filled' },
  { name: 'neon', label: 'Neon', desc: 'Glowing neon on dark', bg: 'dark', icon: 'tabler:bulb' },
  { name: 'glass', label: 'Glass', desc: 'Glassmorphism with blur', bg: 'gradient', icon: 'tabler:glass-full' },
] as const
</script>

<template>
  <div class="showcase">
    <div
      v-for="t in themes"
      :key="t.name"
      :class="['showcase__item', { 'showcase__item--dark': t.bg === 'dark', 'showcase__item--gradient': t.bg === 'gradient' }]"
    >
      <div class="showcase__header">
        <span class="showcase__name">
          <Icon :icon="t.icon" width="16" height="16" style="vertical-align: -3px; margin-right: 4px; opacity: 0.6;" />
          {{ t.label }}
        </span>
        <span class="showcase__desc">{{ t.desc }}</span>
      </div>
      <div class="showcase__demo">
        <OtpInput :theme="(t.name as any)" :num-inputs="4" size="md" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.showcase__item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.2s;
}

.showcase__item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.08);
}

.showcase__header {
  padding: 14px 18px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.showcase__name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.showcase__desc {
  display: block;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

.showcase__demo {
  padding: 24px 18px;
  display: flex;
  justify-content: center;
}

.showcase__item--dark .showcase__demo {
  background: #0f172a;
}

.showcase__item--dark .showcase__header {
  background: #1e293b;
  border-color: #334155;
}

.showcase__item--dark .showcase__name {
  color: #f1f5f9;
}

.showcase__item--dark .showcase__desc {
  color: #94a3b8;
}

.showcase__item--dark {
  border-color: #334155;
}

.showcase__item--gradient .showcase__demo {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
}

@media (max-width: 700px) {
  .showcase {
    grid-template-columns: 1fr;
  }
}
</style>
