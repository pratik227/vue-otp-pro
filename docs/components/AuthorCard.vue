<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  name: string
  avatar: string
  github: string
  twitter?: string
  sponsor?: string
  description?: string
}>()
</script>

<template>
  <div class="author-card">
    <img :src="avatar" :alt="name" class="author-card__avatar" />
    <div class="author-card__info">
      <h3 class="author-card__name">{{ name }}</h3>
      <p v-if="description" class="author-card__desc">{{ description }}</p>
      <div class="author-card__links">
        <a :href="github" target="_blank" rel="noopener" class="author-card__link">
          <Icon icon="tabler:brand-github" width="18" height="18" />
          GitHub
        </a>
        <a v-if="twitter" :href="twitter" target="_blank" rel="noopener" class="author-card__link">
          <Icon icon="tabler:brand-x" width="18" height="18" />
          Twitter
        </a>
        <a v-if="sponsor" :href="sponsor" target="_blank" rel="noopener" class="author-card__link author-card__link--sponsor">
          <Icon icon="tabler:heart-filled" width="18" height="18" />
          Sponsor
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  margin: 24px 0;
}

.author-card__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid var(--vp-c-brand-soft);
  flex-shrink: 0;
}

.author-card__name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
}

.author-card__desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0 0 10px 0;
  line-height: 1.5;
}

.author-card__links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.author-card__link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s;
}

.author-card__link:hover {
  color: var(--vp-c-brand-1);
}

.author-card__link--sponsor {
  color: #db61a2;
}

.author-card__link--sponsor:hover {
  color: #bf3984;
}

@media (max-width: 480px) {
  .author-card {
    flex-direction: column;
    text-align: center;
  }
  .author-card__links {
    justify-content: center;
  }
}
</style>
