<script setup>
import CompareTable from '../../components/CompareTable.vue'
import FeatureCard from '../../components/FeatureCard.vue'
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# 为什么选择 Vue OTP Pro？

大多数 OTP 输入库只给你一个基础的 `<input>`，样式、无障碍和边界情况都需要你自己处理。Vue OTP Pro 内置了所有功能。

## 一览

<div class="feature-grid">
  <FeatureCard icon="tabler:palette" title="11 种主题" description="从极简下划线到炫酷霓虹——选择主题，直接上线。" />
  <FeatureCard icon="tabler:shield-check" title="无 Bug" description="修复了 v-model 部分同步、IME 输入和粘贴处理等已知问题。" />
  <FeatureCard icon="tabler:device-mobile" title="移动端友好" description="iOS 短信自动填充、Android 粘贴、中文 IME——全部正确处理。" />
  <FeatureCard icon="tabler:bolt" title="~3 KB" description="比竞品更小，功能更多。支持 Tree-shaking。" />
  <FeatureCard icon="tabler:tool" title="Composable API" description="useOtp() composable，从零构建自定义 OTP 界面。" />
  <FeatureCard icon="tabler:accessible" title="无障碍" description="ARIA 标签、role=group、键盘导航。经过屏幕阅读器测试。" />
</div>

## 快速对比

<CompareTable />

::: tip 完整对比
查看[详细库对比](/guide/comparison)，包含 PrimeVue、Syncfusion、vue3-otp-input 和 @healerlab 的全面对比。
:::

<SponsorBanner message="Vue OTP Pro 免费开源。赞助有助于维护库和添加新主题。" />
