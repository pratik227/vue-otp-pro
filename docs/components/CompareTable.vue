<script setup lang="ts">
import { Icon } from '@iconify/vue'

const isWeak = (val: string) =>
  ['None', 'Broken', 'No', 'Not', 'Partial'].some((w) => val.includes(w))

const features = [
  { feature: 'Built-in themes', ours: '11 themes', theirs: 'None (BYO CSS)' },
  { feature: 'Color variants', ours: '5 variants', theirs: 'None' },
  { feature: 'Size presets', ours: '4 sizes (sm-xl)', theirs: 'None' },
  { feature: 'Animations', ours: 'Pop, shake, pulse', theirs: 'None' },
  { feature: 'CSS custom properties', ours: 'Full theming API', theirs: 'None' },
  { feature: 'Separator slot', ours: 'Yes', theirs: 'String only' },
  { feature: 'IME / Chinese input', ours: 'Handled', theirs: 'Broken' },
  { feature: 'Partial v-model sync', ours: 'Works', theirs: 'Broken' },
  { feature: 'Paste delimiter strip', ours: 'Auto-filtered', theirs: 'Not handled' },
  { feature: 'Readonly mode', ours: 'Yes', theirs: 'No' },
  { feature: 'ARIA accessibility', ours: 'Built-in', theirs: 'None' },
  { feature: 'TypeScript', ours: 'Full types exported', theirs: 'Partial' },
  { feature: 'Composable API', ours: 'useOtp()', theirs: 'None' },
  { feature: 'Per-input classes', ours: 'Array or function', theirs: 'Array only' },
  { feature: 'AI / LLM docs', ours: 'llms.txt included', theirs: 'None' },
  { feature: 'Gzipped size', ours: '~3 KB', theirs: '~5 KB' },
]
</script>

<template>
  <div class="compare">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th class="compare__ours">
            <Icon icon="tabler:circle-check-filled" width="16" height="16" style="vertical-align: -3px; margin-right: 4px;" />
            Vue OTP Pro
          </th>
          <th class="compare__theirs">vue3-otp-input</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in features" :key="f.feature">
          <td>{{ f.feature }}</td>
          <td class="compare__ours">
            <Icon icon="tabler:check" width="16" height="16" class="compare__icon compare__icon--check" />
            <span class="compare__check">{{ f.ours }}</span>
          </td>
          <td class="compare__theirs">
            <Icon
              :icon="isWeak(f.theirs) ? 'tabler:x' : 'tabler:minus'"
              width="16"
              height="16"
              :class="['compare__icon', isWeak(f.theirs) ? 'compare__icon--x' : 'compare__icon--neutral']"
            />
            <span :class="['compare__val', { 'compare__val--weak': isWeak(f.theirs) }]">
              {{ f.theirs }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.compare {
  margin: 24px 0;
  overflow-x: auto;
}

.compare table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.compare th {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 12px 16px;
  border-bottom: 2px solid var(--vp-c-divider);
  text-align: left;
}

.compare td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.compare tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.compare__ours {
  color: var(--vp-c-brand-1);
}

.compare__icon {
  vertical-align: -3px;
  margin-right: 6px;
}

.compare__icon--check {
  color: #22c55e;
}

.compare__icon--x {
  color: #ef4444;
}

.compare__icon--neutral {
  color: var(--vp-c-text-3);
}

.compare__check {
  font-weight: 500;
}

.compare__val--weak {
  color: var(--vp-c-text-3);
}
</style>
