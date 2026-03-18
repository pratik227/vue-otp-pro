<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  message?: string
}>()
</script>

<template>
  <div class="sponsor-banner">
    <div class="sponsor-banner__content">
      <Icon icon="tabler:heart-filled" width="22" height="22" class="sponsor-banner__heart" />
      <div class="sponsor-banner__text">
        <p class="sponsor-banner__msg">{{ message || 'If Vue OTP Pro saves you time, consider supporting its development.' }}</p>
        <a href="https://github.com/sponsors/pratik227" target="_blank" rel="noopener" class="sponsor-banner__btn">
          <Icon icon="tabler:heart-handshake" width="16" height="16" />
          Sponsor on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-banner {
  margin: 32px 0;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(219, 97, 162, 0.08), rgba(139, 92, 246, 0.08));
  border: 1px solid rgba(219, 97, 162, 0.2);
  border-radius: 14px;
}

.sponsor-banner__content {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.sponsor-banner__heart {
  color: #db61a2;
  flex-shrink: 0;
  margin-top: 2px;
}

.sponsor-banner__msg {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 10px 0;
}

.sponsor-banner__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: #db61a2;
  color: #fff;
  font-size: 0.84rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.15s;
}

.sponsor-banner__btn:hover {
  background: #bf3984;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(219, 97, 162, 0.3);
}
</style>
