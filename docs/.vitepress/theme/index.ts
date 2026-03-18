import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import CustomLayout from './CustomLayout.vue'
import OtpDemo from '../../components/OtpDemo.vue'
import OtpPlayground from '../../components/OtpPlayground.vue'
import FeatureCard from '../../components/FeatureCard.vue'
import ThemeShowcase from '../../components/ThemeShowcase.vue'
import AuthorCard from '../../components/AuthorCard.vue'
import CompareTable from '../../components/CompareTable.vue'
import SponsorBanner from '../../components/SponsorBanner.vue'
import FullCompareTable from '../../components/FullCompareTable.vue'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('OtpDemo', OtpDemo)
    app.component('OtpPlayground', OtpPlayground)
    app.component('FeatureCard', FeatureCard)
    app.component('ThemeShowcase', ThemeShowcase)
    app.component('AuthorCard', AuthorCard)
    app.component('CompareTable', CompareTable)
    app.component('SponsorBanner', SponsorBanner)
    app.component('FullCompareTable', FullCompareTable)
  },
} satisfies Theme
