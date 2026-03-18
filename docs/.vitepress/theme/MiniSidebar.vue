<script setup lang="ts">
import { ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import { Icon } from '@iconify/vue'

const { theme } = useData()
const route = useRoute()
const expanded = ref(false)

const sectionIcons: Record<string, string> = {
  'Introduction': 'tabler:rocket',
  'Introducción': 'tabler:rocket',
  '介绍': 'tabler:rocket',
  '紹介': 'tabler:rocket',
  'परिचय': 'tabler:rocket',
  'Usage': 'tabler:code',
  'Uso': 'tabler:code',
  '使用': 'tabler:code',
  '使い方': 'tabler:code',
  'उपयोग': 'tabler:code',
  'Advanced': 'tabler:settings',
  'Avanzado': 'tabler:settings',
  '高级': 'tabler:settings',
  '上級': 'tabler:settings',
  'उन्नत': 'tabler:settings',
  'Examples': 'tabler:player-play',
  'Ejemplos': 'tabler:player-play',
  '示例': 'tabler:player-play',
  '例': 'tabler:player-play',
  'उदाहरण': 'tabler:player-play',
}

function getIcon(text: string): string {
  return sectionIcons[text] || 'tabler:folder'
}

function isActive(link: string): boolean {
  return route.path === link || route.path === link + '.html'
}

function isSectionActive(items: any[]): boolean {
  return items.some((item: any) => isActive(item.link))
}

function close() {
  expanded.value = false
}
</script>

<template>
  <!-- Overlay to close when clicking outside -->
  <div v-if="expanded" class="ms-overlay" @click="close" />

  <aside :class="['ms', { 'ms--open': expanded }]">
    <button class="ms__toggle" @click="expanded = !expanded" :aria-label="expanded ? 'Collapse sidebar' : 'Expand sidebar'">
      <Icon :icon="expanded ? 'tabler:chevron-left' : 'tabler:chevron-right'" width="16" height="16" />
    </button>

    <nav class="ms__nav">
      <template v-if="theme.sidebar && Array.isArray(theme.sidebar)">
        <div
          v-for="section in theme.sidebar"
          :key="section.text"
          class="ms__group"
        >
          <a
            v-if="section.items?.length"
            :href="section.items[0].link"
            :class="['ms__icon-btn', { 'ms__icon-btn--active': isSectionActive(section.items || []) }]"
            :title="section.text"
          >
            <Icon :icon="getIcon(section.text)" width="20" height="20" />
          </a>

          <!-- Expanded panel items -->
          <div v-if="expanded" class="ms__expanded-group">
            <div class="ms__group-title">{{ section.text }}</div>
            <a
              v-for="item in section.items"
              :key="item.link"
              :href="item.link"
              :class="['ms__link', { 'ms__link--active': isActive(item.link) }]"
              @click="close"
            >
              {{ item.text }}
            </a>
          </div>
        </div>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
.ms-overlay {
  position: fixed;
  inset: 0;
  z-index: 29;
}

.ms {
  position: fixed;
  top: var(--vp-nav-height, 64px);
  left: 0;
  bottom: 0;
  width: 48px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border-right: 1px solid var(--vp-c-divider);
  transition: width 0.2s ease;
  overflow: hidden;
}

.ms--open {
  width: 260px;
  box-shadow: 6px 0 20px rgba(0, 0, 0, 0.08);
}

.ms__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  border: none;
  background: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  flex-shrink: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: color 0.15s;
}

.ms__toggle:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.ms__nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
}

.ms__group {
  margin-bottom: 2px;
}

/* ---- Collapsed: icon buttons ---- */
.ms__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 40px;
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: all 0.15s;
}

.ms__icon-btn:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.ms__icon-btn--active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

/* Hide icon buttons when expanded */
.ms--open .ms__icon-btn {
  display: none;
}

/* ---- Expanded: full nav ---- */
.ms__expanded-group {
  padding: 4px 12px;
}

.ms__group-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
  padding: 8px 8px 4px;
}

.ms__link {
  display: block;
  padding: 6px 8px;
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.12s;
}

.ms__link:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.ms__link--active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  background: var(--vp-c-brand-soft);
}

/* Hide on mobile */
@media (max-width: 959px) {
  .ms, .ms-overlay {
    display: none !important;
  }
}
</style>
