<script setup>
import CompareTable from '../../components/CompareTable.vue'
import FeatureCard from '../../components/FeatureCard.vue'
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# なぜ Vue OTP Pro？

ほとんどのOTP入力ライブラリは基本的な `<input>` を提供するだけで、スタイリング、アクセシビリティ、エッジケースはすべて自分で対応する必要があります。Vue OTP Pro はすべてをビルトインで提供します。

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11テーマ" description="ミニマルなアンダーラインから輝くネオンまで — テーマを選んですぐにリリース。" />
  <FeatureCard icon="tabler:shield-check" title="バグフリー" description="v-model部分同期、IME入力、ペースト処理の既知の問題を修正。" />
  <FeatureCard icon="tabler:device-mobile" title="モバイル対応" description="iOS SMS自動入力、Androidペースト、中国語IME — すべて正しく処理。" />
  <FeatureCard icon="tabler:bolt" title="~3 KB" description="競合より小さく、機能は豊富。Tree-shakeable。" />
  <FeatureCard icon="tabler:tool" title="Composable API" description="useOtp() composable でカスタムOTP UIをゼロから構築。" />
  <FeatureCard icon="tabler:accessible" title="アクセシブル" description="ARIAラベル、role=group、キーボードナビ。スクリーンリーダーテスト済み。" />
</div>

## 比較

<CompareTable />

::: tip 詳細な比較
PrimeVue、Syncfusion、vue3-otp-input、@healerlab との[詳細なライブラリ比較](/guide/comparison)をご覧ください。
:::

<SponsorBanner message="Vue OTP Pro は無料でオープンソースです。スポンサーになって開発をサポートしてください。" />
