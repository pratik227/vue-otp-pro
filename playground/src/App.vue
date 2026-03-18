<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { OtpInput } from 'vue-otp-pro'
import 'vue-otp-pro/dist/vue-otp-pro.css'

const basicValue = ref('')
const underlineValue = ref('')
const roundedValue = ref('')
const pillValue = ref('')
const separatedValue = ref('')
const primaryValue = ref('')
const successValue = ref('')
const dangerValue = ref('')
const warningValue = ref('')
const passwordValue = ref('')

const showError = ref(false)
const showSuccess = ref(false)
const errorDemoValue = ref('')

const partialValue = ref('')

const otpRef = ref<InstanceType<typeof OtpInput> | null>(null)

function handleComplete(value: string) {
  console.log('OTP Complete:', value)
}

function handleErrorDemo(value: string) {
  if (value.length === 6) {
    if (value === '123456') {
      showError.value = false
      showSuccess.value = true
    } else {
      showError.value = true
      showSuccess.value = false
      setTimeout(() => (showError.value = false), 600)
    }
  } else {
    showSuccess.value = false
    showError.value = false
  }
}

function clearOtp() {
  otpRef.value?.clear()
}

function fillOtp() {
  otpRef.value?.fill('847291')
}

function addDigit() {
  partialValue.value += '1'
}
</script>

<template>
  <div class="app">
    <header>
      <h1><Icon icon="tabler:password" width="36" height="36" style="vertical-align: -6px; margin-right: 8px;" />Vue OTP Pro</h1>
      <p class="subtitle">Beautiful, customizable OTP input for Vue 3</p>
    </header>

    <main>
      <!-- Themes -->
      <section>
        <h2><Icon icon="tabler:palette" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Themes</h2>

        <div class="demo-row">
          <label>Box <span class="badge">default</span></label>
          <OtpInput v-model="basicValue" theme="box" @complete="handleComplete" />
          <code>{{ basicValue || '______' }}</code>
        </div>

        <div class="demo-row">
          <label>Underline</label>
          <OtpInput v-model="underlineValue" theme="underline" />
          <code>{{ underlineValue || '______' }}</code>
        </div>

        <div class="demo-row">
          <label>Rounded</label>
          <OtpInput v-model="roundedValue" theme="rounded" />
          <code>{{ roundedValue || '______' }}</code>
        </div>

        <div class="demo-row">
          <label>Pill</label>
          <OtpInput v-model="pillValue" theme="pill" />
          <code>{{ pillValue || '______' }}</code>
        </div>

        <div class="demo-row">
          <label>Separated</label>
          <OtpInput v-model="separatedValue" theme="separated" />
          <code>{{ separatedValue || '______' }}</code>
        </div>

        <div class="demo-row">
          <label>Flush <span class="badge">new</span></label>
          <OtpInput theme="flush" />
        </div>

        <div class="demo-row">
          <label>Shadow <span class="badge">new</span></label>
          <OtpInput theme="shadow" />
        </div>

        <div class="demo-row">
          <label>Minimal <span class="badge">new</span></label>
          <OtpInput theme="minimal" />
        </div>

        <div class="demo-row">
          <label>Filled <span class="badge">new</span></label>
          <OtpInput theme="filled" />
        </div>

        <div class="demo-row neon-bg">
          <label>Neon <span class="badge">new</span></label>
          <OtpInput theme="neon" />
        </div>

        <div class="demo-row glass-bg">
          <label>Glass <span class="badge">new</span></label>
          <OtpInput theme="glass" />
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h2><Icon icon="tabler:rainbow" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Variants</h2>

        <div class="demo-row">
          <label>Primary</label>
          <OtpInput v-model="primaryValue" variant="primary" />
        </div>

        <div class="demo-row">
          <label>Success</label>
          <OtpInput v-model="successValue" variant="success" />
        </div>

        <div class="demo-row">
          <label>Danger</label>
          <OtpInput v-model="dangerValue" variant="danger" />
        </div>

        <div class="demo-row">
          <label>Warning</label>
          <OtpInput v-model="warningValue" variant="warning" />
        </div>
      </section>

      <!-- Sizes -->
      <section>
        <h2><Icon icon="tabler:resize" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Sizes</h2>

        <div class="demo-row">
          <label>Small</label>
          <OtpInput :num-inputs="4" size="sm" />
        </div>

        <div class="demo-row">
          <label>Medium <span class="badge">default</span></label>
          <OtpInput :num-inputs="4" size="md" />
        </div>

        <div class="demo-row">
          <label>Large</label>
          <OtpInput :num-inputs="4" size="lg" />
        </div>

        <div class="demo-row">
          <label>XL</label>
          <OtpInput :num-inputs="4" size="xl" />
        </div>
      </section>

      <!-- Separator -->
      <section>
        <h2><Icon icon="tabler:separator" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />With Separator</h2>

        <div class="demo-row">
          <label>Dash</label>
          <OtpInput :num-inputs="4" separator="-" />
        </div>

        <div class="demo-row">
          <label>Dot</label>
          <OtpInput separator="&middot;" />
        </div>
      </section>

      <!-- Password -->
      <section>
        <h2><Icon icon="tabler:lock" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Password Mode</h2>

        <div class="demo-row">
          <label>Password</label>
          <OtpInput v-model="passwordValue" input-type="password" :num-inputs="4" />
          <code>{{ passwordValue || '____' }}</code>
        </div>
      </section>

      <!-- Placeholders -->
      <section>
        <h2><Icon icon="tabler:forms" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Placeholders</h2>

        <div class="demo-row">
          <label>Uniform</label>
          <OtpInput :num-inputs="4" placeholder="0" />
        </div>

        <div class="demo-row">
          <label>Custom per-digit</label>
          <OtpInput :num-inputs="6" :placeholder="['S', 'E', 'C', 'R', 'E', 'T']" />
        </div>
      </section>

      <!-- Error / Success states -->
      <section>
        <h2><Icon icon="tabler:alert-triangle" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Error & Success States</h2>
        <p class="hint">Type <code>123456</code> for success, anything else for error shake.</p>

        <div class="demo-row">
          <label>Interactive</label>
          <OtpInput
            v-model="errorDemoValue"
            :error="showError"
            :success="showSuccess"
            @change="handleErrorDemo"
          />
        </div>
      </section>

      <!-- Disabled -->
      <section>
        <h2><Icon icon="tabler:ban" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Disabled</h2>

        <div class="demo-row">
          <label>Disabled</label>
          <OtpInput :num-inputs="4" disabled model-value="12" />
        </div>
      </section>

      <!-- Programmatic API -->
      <section>
        <h2><Icon icon="tabler:code" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Programmatic API</h2>

        <div class="demo-row">
          <label>Ref methods</label>
          <OtpInput ref="otpRef" />
          <div class="btn-group">
            <button @click="fillOtp"><Icon icon="tabler:pencil" width="14" height="14" style="vertical-align: -2px;" /> Fill 847291</button>
            <button @click="clearOtp"><Icon icon="tabler:eraser" width="14" height="14" style="vertical-align: -2px;" /> Clear</button>
          </div>
        </div>
      </section>

      <!-- Theme combos -->
      <section>
        <h2><Icon icon="tabler:puzzle" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Theme + Variant Combos</h2>

        <div class="demo-row">
          <label>Underline + Danger</label>
          <OtpInput theme="underline" variant="danger" :num-inputs="4" />
        </div>

        <div class="demo-row">
          <label>Separated + Success</label>
          <OtpInput theme="separated" variant="success" :num-inputs="4" />
        </div>

        <div class="demo-row">
          <label>Pill + Warning</label>
          <OtpInput theme="pill" variant="warning" :num-inputs="4" />
        </div>

        <div class="demo-row">
          <label>Flush + Primary</label>
          <OtpInput theme="flush" variant="primary" :num-inputs="4" />
        </div>

        <div class="demo-row">
          <label>Shadow + Success</label>
          <OtpInput theme="shadow" variant="success" :num-inputs="4" />
        </div>

        <div class="demo-row neon-bg">
          <label>Neon + Danger</label>
          <OtpInput theme="neon" variant="danger" :num-inputs="4" />
        </div>
      </section>

      <!-- Bug fix demos -->
      <section>
        <h2><Icon icon="tabler:bug-off" width="20" height="20" style="vertical-align: -3px; margin-right: 6px;" />Bug Fix: Partial v-model Update</h2>
        <p class="hint">Click "Add Digit" — each click appends "1". Value updates even when length &lt; numInputs.</p>

        <div class="demo-row">
          <label>Partial fill</label>
          <OtpInput v-model="partialValue" />
          <div class="btn-group">
            <button @click="addDigit"><Icon icon="tabler:plus" width="14" height="14" style="vertical-align: -2px;" /> Add Digit</button>
            <button @click="partialValue = ''"><Icon icon="tabler:refresh" width="14" height="14" style="vertical-align: -2px;" /> Reset</button>
          </div>
          <code>{{ partialValue || '______' }}</code>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f8fafc;
  color: #1e293b;
  min-height: 100vh;
}

.app {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

header {
  text-align: center;
  margin-bottom: 48px;
}

header h1 {
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #64748b;
  margin-top: 8px;
  font-size: 1.1rem;
}

section {
  margin-bottom: 40px;
  background: #fff;
  border-radius: 16px;
  padding: 28px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
}

section h2 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
}

.demo-row + .demo-row {
  border-top: 1px solid #f1f5f9;
}

.demo-row label {
  min-width: 140px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #475569;
}

.demo-row code {
  font-size: 0.85rem;
  color: #6366f1;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  letter-spacing: 2px;
}

.badge {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6366f1;
  background: #eef2ff;
  padding: 2px 6px;
  border-radius: 4px;
  vertical-align: middle;
}

.hint {
  color: #94a3b8;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.hint code {
  color: #6366f1;
  font-weight: 600;
}

.btn-group {
  display: flex;
  gap: 8px;
}

.btn-group button {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  color: #475569;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.btn-group button:hover {
  background: #f8fafc;
  border-color: #6366f1;
  color: #6366f1;
}

.demo-row.neon-bg {
  background: #0f172a;
  margin: 0 -32px;
  padding: 16px 32px;
  border-radius: 10px;
}

.demo-row.neon-bg label {
  color: #94a3b8;
}

.demo-row.glass-bg {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
  margin: 0 -32px;
  padding: 16px 32px;
  border-radius: 10px;
}

.demo-row.glass-bg label {
  color: #fff;
}

@media (max-width: 700px) {
  .demo-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .demo-row label {
    min-width: auto;
  }
}
</style>
