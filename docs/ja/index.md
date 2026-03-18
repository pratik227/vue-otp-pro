---
layout: home
hero:
  name: Vue OTP Pro
  text: Vue 3 にふさわしい OTP 入力
  tagline: 11のビルトインテーマ、スムーズなアニメーション、完全なアクセシビリティ。すぐに使えます。
  image:
    src: /logo.svg
    alt: Vue OTP Pro
  actions:
    - theme: brand
      text: はじめる
      link: /ja/guide/getting-started
    - theme: alt
      text: インタラクティブプレイグラウンド
      link: /ja/examples/
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
  <FeatureCard icon="tabler:palette" title="11のビルトインテーマ" description="Box、Underline、Rounded、Pill、Separated、Flush、Shadow、Neon、Glass、Minimal、Filled — すべて洗練済み。" />
  <FeatureCard icon="tabler:rainbow" title="5つのカラーバリアント" description="Default、Primary、Success、Danger、Warning — どのテーマとも組み合わせて55以上の組み合わせ。" />
  <FeatureCard icon="tabler:sparkles" title="スムーズなアニメーション" description="入力時のポップ、エラー時のシェイク、成功時のパルス — 純粋なCSS、JSオーバーヘッドゼロ。" />
  <FeatureCard icon="tabler:device-mobile" title="モバイルファースト" description="iOS SMS自動入力、ペーストサポート、IME入力処理、仮想キーボード制御。" />
  <FeatureCard icon="tabler:accessible" title="完全なアクセシビリティ" description="ARIAラベル、role=&quot;group&quot;、キーボードナビゲーション、スクリーンリーダーサポート。" />
  <FeatureCard icon="tabler:package" title="軽量＆Tree-shakeable" description="gzip後約3KB。完全なTypeScriptサポート。高度なユースケース向けComposable API。" />
</div>

<SponsorBanner message="Vue OTP Pro を気に入りましたか？プロジェクトをスポンサーして開発と新機能をサポートしてください。" />

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="フロントエンド開発を楽しくするオープンソースツールを作る、情熱的なVue.js開発者。"
/>

</div>
