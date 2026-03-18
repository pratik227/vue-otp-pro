<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const themes = ['box', 'underline', 'rounded', 'pill', 'separated', 'flush', 'shadow', 'neon', 'glass', 'minimal', 'filled'] as const
const variants = ['default', 'primary', 'success', 'danger', 'warning'] as const
const sizes = ['sm', 'md', 'lg', 'xl'] as const

const selectedTheme = ref<string>('box')
const selectedVariant = ref<string>('default')
const selectedSize = ref<string>('md')
const numInputs = ref(6)
const separator = ref('')
const disabled = ref(false)
const error = ref(false)
const success = ref(false)
const value = ref('')

const isDarkTheme = computed(() => selectedTheme.value === 'neon')

const otpRef = ref<InstanceType<typeof OtpInput> | null>(null)
</script>

<template>
  <div class="playground">
    <div class="playground__controls">
      <div class="playground__group">
        <label>Theme</label>
        <div class="playground__chips">
          <button
            v-for="t in themes"
            :key="t"
            :class="['chip', { active: selectedTheme === t }]"
            @click="selectedTheme = t"
          >{{ t }}</button>
        </div>
      </div>

      <div class="playground__group">
        <label>Variant</label>
        <div class="playground__chips">
          <button
            v-for="v in variants"
            :key="v"
            :class="['chip', { active: selectedVariant === v }]"
            @click="selectedVariant = v"
          >{{ v }}</button>
        </div>
      </div>

      <div class="playground__group">
        <label>Size</label>
        <div class="playground__chips">
          <button
            v-for="s in sizes"
            :key="s"
            :class="['chip', { active: selectedSize === s }]"
            @click="selectedSize = s"
          >{{ s }}</button>
        </div>
      </div>

      <div class="playground__row">
        <div class="playground__group playground__group--inline">
          <label>Inputs</label>
          <input v-model.number="numInputs" type="range" min="3" max="8" />
          <span class="range-val">{{ numInputs }}</span>
        </div>

        <div class="playground__group playground__group--inline">
          <label>Separator</label>
          <select v-model="separator">
            <option value="">None</option>
            <option value="-">Dash</option>
            <option value="&middot;">Dot</option>
            <option value="*">Star</option>
          </select>
        </div>
      </div>

      <div class="playground__toggles">
        <label class="toggle"><input v-model="disabled" type="checkbox" /> Disabled</label>
        <label class="toggle"><input v-model="error" type="checkbox" /> Error</label>
        <label class="toggle"><input v-model="success" type="checkbox" /> Success</label>
      </div>
    </div>

    <div :class="['playground__preview', { 'playground__preview--dark': isDarkTheme }]">
      <OtpInput
        ref="otpRef"
        v-model="value"
        :theme="(selectedTheme as any)"
        :variant="(selectedVariant as any)"
        :size="(selectedSize as any)"
        :num-inputs="numInputs"
        :separator="separator"
        :disabled="disabled"
        :error="error"
        :success="success"
      />
      <div class="playground__value" v-if="value">
        <code>{{ value }}</code>
      </div>
    </div>

    <div class="playground__actions">
      <button class="action-btn" @click="otpRef?.fill('1'.repeat(numInputs))">
        <Icon icon="tabler:pencil" width="14" height="14" /> Fill
      </button>
      <button class="action-btn" @click="otpRef?.clear()">
        <Icon icon="tabler:eraser" width="14" height="14" /> Clear
      </button>
      <button class="action-btn" @click="otpRef?.focus()">
        <Icon icon="tabler:focus-2" width="14" height="14" /> Focus
      </button>
    </div>

    <details class="playground__code">
      <summary><Icon icon="tabler:code" width="14" height="14" style="vertical-align: -2px; margin-right: 4px;" /> View Code</summary>
      <div class="code-block">
        <pre><code>&lt;OtpInput
  v-model="otp"
  theme="{{ selectedTheme }}"{{ selectedVariant !== 'default' ? `\n  variant="${selectedVariant}"` : '' }}
  size="{{ selectedSize }}"
  :num-inputs="{{ numInputs }}"{{ separator ? `\n  separator="${separator}"` : '' }}{{ disabled ? '\n  disabled' : '' }}{{ error ? '\n  :error="true"' : '' }}{{ success ? '\n  :success="true"' : '' }}
/&gt;</code></pre>
      </div>
    </details>
  </div>
</template>

<style scoped>
.playground {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  margin: 24px 0;
}

.playground__controls {
  padding: 20px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.playground__group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
  margin-bottom: 6px;
}

.playground__group--inline {
  display: flex;
  align-items: center;
  gap: 10px;
}

.playground__group--inline label {
  margin-bottom: 0;
  min-width: 70px;
}

.playground__row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.playground__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.chip.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.playground__toggles {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.range-val {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  min-width: 16px;
}

select {
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.82rem;
}

input[type="range"] {
  accent-color: var(--vp-c-brand-1);
}

.playground__preview {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  transition: background 0.3s;
}

.playground__preview--dark {
  background: #0f172a;
}

.playground__value {
  margin-top: 14px;
}

.playground__value code {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 3px;
}

.playground__preview--dark .playground__value code {
  color: #818cf8;
}

.playground__actions {
  display: flex;
  gap: 8px;
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.action-btn {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.action-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.playground__code {
  border-top: 1px solid var(--vp-c-divider);
  padding: 0;
}

.playground__code summary {
  padding: 12px 24px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.code-block {
  padding: 0 24px 16px;
}

.code-block pre {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  font-size: 0.82rem;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .playground__row {
    flex-direction: column;
    gap: 14px;
  }
}
</style>
