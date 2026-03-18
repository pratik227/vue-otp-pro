---
layout: home
hero:
  name: Vue OTP Pro
  text: Vue 3 应有的 OTP 输入组件
  tagline: 11 种内置主题、流畅动画、完整无障碍支持，开箱即用。
  image:
    src: /logo.svg
    alt: Vue OTP Pro
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: 交互式演练场
      link: /zh/examples/
    - theme: alt
      text: GitHub
      link: https://github.com/pratik227
---

<script setup>
import AuthorCard from '../components/AuthorCard.vue'
import FeatureCard from '../components/FeatureCard.vue'
import SponsorBanner from '../components/SponsorBanner.vue'
</script>

<div class="vp-doc" style="max-width: 960px; margin: 0 auto; padding: 48px 24px 0;">

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11 种内置主题" description="Box、Underline、Rounded、Pill、Separated、Flush、Shadow、Neon、Glass、Minimal、Filled — 开箱即用。" />
  <FeatureCard icon="tabler:rainbow" title="5 种颜色变体" description="Default、Primary、Success、Danger、Warning — 与任何主题混搭，55+ 种组合。" />
  <FeatureCard icon="tabler:sparkles" title="流畅动画" description="输入弹出、错误抖动、成功脉冲 — 纯 CSS，零 JS 开销。" />
  <FeatureCard icon="tabler:device-mobile" title="移动优先" description="iOS 短信自动填充、粘贴支持、IME 输入法处理和虚拟键盘控制。" />
  <FeatureCard icon="tabler:accessible" title="完整无障碍" description="ARIA 标签、role=&quot;group&quot;、键盘导航、屏幕阅读器支持。" />
  <FeatureCard icon="tabler:package" title="轻量且可 Tree-shake" description="gzip 后约 3 KB。完整 TypeScript 支持。提供 Composable API。" />
  <FeatureCard icon="tabler:brand-typescript" title="TypeScript 优先" description="完整的类型定义、导出的 props 和方法类型。" />
  <FeatureCard icon="tabler:robot" title="AI / LLM 就绪" description="附带 llms.txt 和 llms-full.txt，供 AI 编码助手和代码生成代理使用。" />
  <FeatureCard icon="tabler:bug-off" title="经过实战检验" description="修复了其他 OTP 库中的 v-model 同步、IME 绕过和粘贴分隔符等已知 bug。" />
</div>

<SponsorBanner message="喜欢 Vue OTP Pro？赞助项目以支持持续开发和新功能。" />

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="热爱 Vue.js 的开发者，打造让前端开发更愉快的开源工具。"
/>

</div>
