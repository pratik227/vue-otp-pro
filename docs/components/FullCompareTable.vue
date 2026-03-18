<script setup lang="ts">
import { Icon } from '@iconify/vue'

type Status = 'yes' | 'no' | 'partial' | 'paid' | string

const libraries = [
  { key: 'ours', name: 'Vue OTP Pro', color: '#6366f1' },
  { key: 'prime', name: 'PrimeVue', color: '#10b981' },
  { key: 'v3otp', name: 'vue3-otp-input', color: '#f59e0b' },
  { key: 'sync', name: 'Syncfusion', color: '#3b82f6' },
  { key: 'healer', name: '@healerlab', color: '#8b5cf6' },
]

const categories = [
  {
    title: 'General',
    icon: 'tabler:info-circle',
    rows: [
      { feature: 'License', ours: 'MIT (Free)', prime: 'MIT (Free)', v3otp: 'MIT (Free)', sync: 'Commercial*', healer: 'MIT (Free)' },
      { feature: 'Bundle size', ours: '~3 KB gz', prime: 'Tree-shaking', v3otp: '~5 KB', sync: '~877 KB pkg', healer: '~21 KB' },
      { feature: 'Weekly downloads', ours: 'New', prime: '~470K (suite)', v3otp: '~27K', sync: '~7.5K (suite)', healer: '~350' },
      { feature: 'Standalone package', ours: 'yes', prime: 'no', v3otp: 'yes', sync: 'no', healer: 'yes' },
      { feature: 'Vue 3 Composition API', ours: 'yes', prime: 'yes', v3otp: 'yes', sync: 'yes', healer: 'yes' },
      { feature: 'TypeScript', ours: 'Full types exported', prime: 'yes', v3otp: 'partial', sync: 'yes', healer: 'Broken types field' },
    ],
  },
  {
    title: 'Features',
    icon: 'tabler:star',
    rows: [
      { feature: 'Props count', ours: '18', prime: '4 core', v3otp: '11', sync: '10+', healer: '15' },
      { feature: 'v-model support', ours: 'yes', prime: 'yes', v3otp: 'v-model:value', sync: 'value + events', healer: 'Callbacks only' },
      { feature: 'Partial v-model sync', ours: 'yes', prime: 'no', v3otp: 'Broken', sync: 'no', healer: 'no' },
      { feature: 'Exposed methods', ours: '4 (clear, fill, focus, focusInput)', prime: 'no', v3otp: '2 (clear, fill)', sync: 'no', healer: '1' },
      { feature: 'Slot support', ours: 'Separator slot', prime: '1 default slot', v3otp: 'no', sync: 'no', healer: 'no' },
      { feature: 'Separator', ours: 'String + slot', prime: 'Slot workaround', v3otp: 'Component', sync: 'String', healer: 'String + position' },
      { feature: 'Auto-focus', ours: 'yes', prime: 'no', v3otp: 'yes', sync: 'no', healer: 'yes' },
      { feature: 'Focus order enforcement', ours: 'yes', prime: 'no', v3otp: 'yes', sync: 'no', healer: 'no' },
      { feature: 'Readonly mode', ours: 'yes', prime: 'yes', v3otp: 'no', sync: 'no', healer: 'yes' },
      { feature: 'Composable API', ours: 'useOtp()', prime: 'no', v3otp: 'no', sync: 'no', healer: 'no' },
      { feature: 'Per-input conditional class', ours: 'Array or function', prime: 'Via slot', v3otp: 'Array only', sync: 'no', healer: 'no' },
      { feature: 'AI / LLM docs (llms.txt)', ours: 'yes', prime: 'no', v3otp: 'no', sync: 'no', healer: 'no' },
    ],
  },
  {
    title: 'Theming & Styling',
    icon: 'tabler:palette',
    rows: [
      { feature: 'Built-in themes', ours: '11 themes', prime: '10+ presets (suite)', v3otp: 'no', sync: '8 themes', healer: 'Color props' },
      { feature: 'Color variants', ours: '5 variants', prime: 'Via theme system', v3otp: 'no', sync: '3 CSS classes', healer: 'no' },
      { feature: 'Size presets', ours: '4 sizes (sm-xl)', prime: 'Via theme', v3otp: 'no', sync: 'no', healer: 'no' },
      { feature: 'CSS custom properties', ours: '15+ variables', prime: 'Via theme system', v3otp: 'no', sync: 'Via theme', healer: 'no' },
      { feature: 'Dark mode', ours: 'CSS variables', prime: 'yes', v3otp: 'Manual CSS', sync: 'High Contrast theme', healer: 'no' },
      { feature: 'Animations', ours: 'Pop, shake, pulse', prime: 'no', v3otp: 'no', sync: 'Ripple effect', healer: 'no' },
    ],
  },
  {
    title: 'Input Handling',
    icon: 'tabler:keyboard',
    rows: [
      { feature: 'Paste support', ours: 'yes', prime: 'yes', v3otp: 'Basic', sync: 'Not documented', healer: 'yes' },
      { feature: 'Paste delimiter filtering', ours: 'Auto-filtered', prime: 'no', v3otp: 'no', sync: 'no', healer: 'no' },
      { feature: 'IME / Chinese input', ours: 'Handled', prime: 'no', v3otp: 'Broken', sync: 'Not documented', healer: 'no' },
      { feature: 'iOS SMS autofill', ours: 'yes', prime: 'Partial', v3otp: 'yes', sync: 'Not documented', healer: 'Not documented' },
    ],
  },
  {
    title: 'Accessibility',
    icon: 'tabler:accessible',
    rows: [
      { feature: 'ARIA labels', ours: 'Per-input aria-label', prime: 'Inherited', v3otp: 'no', sync: 'Per-input ariaLabels', healer: 'no' },
      { feature: 'role="group"', ours: 'yes', prime: 'no', v3otp: 'no', sync: 'yes', healer: 'no' },
      { feature: 'Keyboard navigation', ours: 'Full (arrows, tab, enter)', prime: 'yes', v3otp: 'yes', sync: 'yes', healer: 'Not documented' },
      { feature: 'Screen reader tested', ours: 'yes', prime: 'Partial', v3otp: 'no', sync: 'WCAG 2.2, Section 508', healer: 'no' },
      { feature: 'autocomplete="one-time-code"', ours: 'yes', prime: 'no', v3otp: 'no', sync: 'no', healer: 'no' },
    ],
  },
]

function getStatusIcon(val: string): { icon: string; cls: string } {
  const v = val.toLowerCase()
  if (v === 'yes' || v === 'full types exported' || v === 'handled' || v === 'auto-filtered') {
    return { icon: 'tabler:circle-check-filled', cls: 'st--yes' }
  }
  if (v === 'no' || v === 'broken' || v === 'broken types field' || v === 'callbacks only') {
    return { icon: 'tabler:circle-x-filled', cls: 'st--no' }
  }
  if (v.includes('not documented') || v === 'basic' || v === 'partial' || v === 'manual css') {
    return { icon: 'tabler:alert-circle-filled', cls: 'st--partial' }
  }
  return { icon: '', cls: '' }
}
</script>

<template>
  <div class="fc">
    <table>
      <thead>
        <tr>
          <th class="fc__feature-col">Feature</th>
          <th v-for="lib in libraries" :key="lib.key" :class="['fc__lib-col', { 'fc__lib-col--ours': lib.key === 'ours' }]">
            {{ lib.name }}
          </th>
        </tr>
      </thead>
      <tbody v-for="cat in categories" :key="cat.title">
        <tr class="fc__cat-row">
          <td :colspan="libraries.length + 1">
            <Icon :icon="cat.icon" width="16" height="16" style="vertical-align: -3px; margin-right: 6px;" />
            {{ cat.title }}
          </td>
        </tr>
        <tr v-for="row in cat.rows" :key="row.feature">
          <td class="fc__feature">{{ row.feature }}</td>
          <td v-for="lib in libraries" :key="lib.key" :class="{ 'fc__ours': lib.key === 'ours' }">
            <Icon
              v-if="getStatusIcon((row as any)[lib.key]).icon"
              :icon="getStatusIcon((row as any)[lib.key]).icon"
              width="15"
              height="15"
              :class="['fc__status', getStatusIcon((row as any)[lib.key]).cls]"
            />
            <span class="fc__val">{{ (row as any)[lib.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="fc__note">
      <Icon icon="tabler:info-circle" width="14" height="14" style="vertical-align: -2px; margin-right: 4px;" />
      * Syncfusion is free under Community License (&lt;$1M revenue, ≤5 devs). Otherwise requires a paid commercial license.
    </p>
  </div>
</template>

<style scoped>
.fc {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

.fc table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
  table-layout: fixed;
}

.fc thead th {
  background: var(--vp-c-bg);
  font-weight: 600;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 12px 8px;
  border-bottom: 2px solid var(--vp-c-divider);
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.fc__feature-col {
  width: 22%;
}

.fc__lib-col {
  width: calc(78% / 5);
}

.fc__lib-col--ours {
  color: var(--vp-c-brand-1);
}

.fc__cat-row td {
  padding: 10px 8px;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.fc td {
  padding: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: top;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.fc tbody tr:hover td:not(.fc__cat-row td) {
  background: var(--vp-c-bg-soft);
}

.fc__feature {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.fc__ours {
  background: rgba(99, 102, 241, 0.04);
}

.fc__status {
  vertical-align: -3px;
  margin-right: 3px;
  flex-shrink: 0;
}

.st--yes { color: #22c55e; }
.st--no { color: #ef4444; }
.st--partial { color: #f59e0b; }

.fc__val {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  line-height: 1.4;
}

.fc__ours .fc__val {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.fc__note {
  padding: 10px 12px;
  margin: 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

@media (max-width: 768px) {
  .fc table {
    font-size: 0.75rem;
  }

  .fc td, .fc th {
    padding: 6px 5px;
  }

  .fc__val {
    font-size: 0.72rem;
  }
}
</style>
