import { defineConfig } from 'vitepress'

const sharedHead = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
] as any[]

/* ---- Sidebar factories per locale ---- */

function enSidebar() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Why Vue OTP Pro?', link: '/guide/why' },
        { text: 'Library Comparison', link: '/guide/comparison' },
      ],
    },
    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Props & Events', link: '/guide/props' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'Accessibility', link: '/guide/accessibility' },
      ],
    },
    {
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: 'AI & LLM Integration', link: '/guide/llm-integration' },
      ],
    },
    {
      text: 'Examples',
      collapsed: false,
      items: [
        { text: 'Live Demos', link: '/examples/' },
      ],
    },
  ]
}

function esSidebar() {
  return [
    {
      text: 'Introducción',
      collapsed: false,
      items: [
        { text: 'Primeros Pasos', link: '/es/guide/getting-started' },
        { text: '¿Por qué Vue OTP Pro?', link: '/es/guide/why' },
        { text: 'Comparación', link: '/es/guide/comparison' },
      ],
    },
    {
      text: 'Uso',
      collapsed: false,
      items: [
        { text: 'Props y Eventos', link: '/es/guide/props' },
        { text: 'Temas', link: '/es/guide/theming' },
        { text: 'Accesibilidad', link: '/es/guide/accessibility' },
      ],
    },
    {
      text: 'Avanzado',
      collapsed: true,
      items: [
        { text: 'Integración IA y LLM', link: '/es/guide/llm-integration' },
      ],
    },
    {
      text: 'Ejemplos',
      collapsed: false,
      items: [
        { text: 'Demos en Vivo', link: '/es/examples/' },
      ],
    },
  ]
}

function zhSidebar() {
  return [
    {
      text: '介绍',
      collapsed: false,
      items: [
        { text: '快速开始', link: '/zh/guide/getting-started' },
        { text: '为什么选择 Vue OTP Pro？', link: '/zh/guide/why' },
        { text: '库对比', link: '/zh/guide/comparison' },
      ],
    },
    {
      text: '使用',
      collapsed: false,
      items: [
        { text: 'Props 和事件', link: '/zh/guide/props' },
        { text: '主题', link: '/zh/guide/theming' },
        { text: '无障碍', link: '/zh/guide/accessibility' },
      ],
    },
    {
      text: '高级',
      collapsed: true,
      items: [
        { text: 'AI 和 LLM 集成', link: '/zh/guide/llm-integration' },
      ],
    },
    {
      text: '示例',
      collapsed: false,
      items: [
        { text: '在线演示', link: '/zh/examples/' },
      ],
    },
  ]
}

function jaSidebar() {
  return [
    {
      text: '紹介',
      collapsed: false,
      items: [
        { text: 'はじめる', link: '/ja/guide/getting-started' },
        { text: 'なぜ Vue OTP Pro？', link: '/ja/guide/why' },
        { text: 'ライブラリ比較', link: '/ja/guide/comparison' },
      ],
    },
    {
      text: '使い方',
      collapsed: false,
      items: [
        { text: 'Props とイベント', link: '/ja/guide/props' },
        { text: 'テーマ', link: '/ja/guide/theming' },
        { text: 'アクセシビリティ', link: '/ja/guide/accessibility' },
      ],
    },
    {
      text: '上級',
      collapsed: true,
      items: [
        { text: 'AI と LLM の統合', link: '/ja/guide/llm-integration' },
      ],
    },
    {
      text: '例',
      collapsed: false,
      items: [
        { text: 'ライブデモ', link: '/ja/examples/' },
      ],
    },
  ]
}

function hiSidebar() {
  return [
    {
      text: 'परिचय',
      collapsed: false,
      items: [
        { text: 'शुरू करें', link: '/hi/guide/getting-started' },
        { text: 'Vue OTP Pro क्यों?', link: '/hi/guide/why' },
        { text: 'तुलना', link: '/hi/guide/comparison' },
      ],
    },
    {
      text: 'उपयोग',
      collapsed: false,
      items: [
        { text: 'Props और Events', link: '/hi/guide/props' },
        { text: 'थीमिंग', link: '/hi/guide/theming' },
        { text: 'एक्सेसिबिलिटी', link: '/hi/guide/accessibility' },
      ],
    },
    {
      text: 'उन्नत',
      collapsed: true,
      items: [
        { text: 'AI और LLM इंटीग्रेशन', link: '/hi/guide/llm-integration' },
      ],
    },
    {
      text: 'उदाहरण',
      collapsed: false,
      items: [
        { text: 'लाइव डेमो', link: '/hi/examples/' },
      ],
    },
  ]
}

/* ---- Config ---- */

export default defineConfig({
  title: 'Vue OTP Pro',
  description: 'Beautiful, customizable OTP input component for Vue 3 with 11 themes, animations, and full TypeScript support.',
  head: sharedHead,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'API', link: '/guide/props' },
          { text: 'Examples', link: '/examples/' },
          { text: 'Comparison', link: '/guide/comparison' },
          { text: 'Sponsor', link: 'https://github.com/sponsors/pratik227' },
        ],
        sidebar: enSidebar(),
      },
    },
    es: {
      label: 'Español',
      lang: 'es',
      description: 'Componente de entrada OTP hermoso y personalizable para Vue 3.',
      themeConfig: {
        nav: [
          { text: 'Guía', link: '/es/guide/getting-started' },
          { text: 'API', link: '/es/guide/props' },
          { text: 'Ejemplos', link: '/es/examples/' },
          { text: 'Comparación', link: '/es/guide/comparison' },
          { text: 'Sponsor', link: 'https://github.com/sponsors/pratik227' },
        ],
        sidebar: esSidebar(),
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: '美观、可定制的 Vue 3 OTP 输入组件。',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/getting-started' },
          { text: 'API', link: '/zh/guide/props' },
          { text: '示例', link: '/zh/examples/' },
          { text: '对比', link: '/zh/guide/comparison' },
          { text: '赞助', link: 'https://github.com/sponsors/pratik227' },
        ],
        sidebar: zhSidebar(),
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: '美しくカスタマイズ可能な Vue 3 OTP 入力コンポーネント。',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/getting-started' },
          { text: 'API', link: '/ja/guide/props' },
          { text: '例', link: '/ja/examples/' },
          { text: '比較', link: '/ja/guide/comparison' },
          { text: 'スポンサー', link: 'https://github.com/sponsors/pratik227' },
        ],
        sidebar: jaSidebar(),
      },
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      description: 'Vue 3 के लिए सुंदर, अनुकूलन योग्य OTP इनपुट कंपोनेंट।',
      themeConfig: {
        nav: [
          { text: 'गाइड', link: '/hi/guide/getting-started' },
          { text: 'API', link: '/hi/guide/props' },
          { text: 'उदाहरण', link: '/hi/examples/' },
          { text: 'तुलना', link: '/hi/guide/comparison' },
          { text: 'स्पॉन्सर', link: 'https://github.com/sponsors/pratik227' },
        ],
        sidebar: hiSidebar(),
      },
    },
  },
  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pratik227' },
      { icon: 'x', link: 'https://x.com/PratikPatel_227' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Built by <a href="https://github.com/pratik227">Pratik Patel</a>',
    },
    editLink: {
      pattern: 'https://github.com/pratik227/vue-otp-pro/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    search: {
      provider: 'local',
    },
  },
})
