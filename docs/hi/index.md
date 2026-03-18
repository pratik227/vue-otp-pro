---
layout: home
hero:
  name: Vue OTP Pro
  text: Vue 3 के लिए सर्वश्रेष्ठ OTP इनपुट
  tagline: 11 बिल्ट-इन थीम, स्मूथ एनिमेशन, पूर्ण एक्सेसिबिलिटी — बस इंस्टॉल करें और शुरू करें।
  image:
    src: /logo.svg
    alt: Vue OTP Pro
  actions:
    - theme: brand
      text: शुरू करें
      link: /hi/guide/getting-started
    - theme: alt
      text: इंटरैक्टिव प्लेग्राउंड
      link: /hi/examples/
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
  <FeatureCard icon="tabler:palette" title="11 बिल्ट-इन थीम" description="Box, Underline, Rounded, Pill, Separated, Flush, Shadow, Neon, Glass, Minimal, Filled — सभी पॉलिश्ड।" />
  <FeatureCard icon="tabler:rainbow" title="5 कलर वेरिएंट" description="Default, Primary, Success, Danger, Warning — किसी भी थीम के साथ मिलाएं, 55+ कॉम्बिनेशन।" />
  <FeatureCard icon="tabler:sparkles" title="स्मूथ एनिमेशन" description="इनपुट पर पॉप, एरर पर शेक, सक्सेस पर पल्स — प्योर CSS, ज़ीरो JS ओवरहेड।" />
  <FeatureCard icon="tabler:device-mobile" title="मोबाइल फर्स्ट" description="iOS SMS ऑटोफिल, पेस्ट सपोर्ट, IME कम्पोज़िशन हैंडलिंग और वर्चुअल कीबोर्ड कंट्रोल।" />
  <FeatureCard icon="tabler:accessible" title="पूर्ण एक्सेसिबिलिटी" description="ARIA लेबल, role=&quot;group&quot;, कीबोर्ड नेविगेशन, स्क्रीन रीडर सपोर्ट।" />
  <FeatureCard icon="tabler:package" title="हल्का और Tree-shakeable" description="gzip के बाद ~3 KB। पूर्ण TypeScript सपोर्ट। एडवांस्ड केस के लिए Composable API।" />
</div>

<SponsorBanner message="Vue OTP Pro पसंद आया? प्रोजेक्ट को स्पॉन्सर करें और डेवलपमेंट को सपोर्ट करें।" />

<AuthorCard
  name="Pratik Patel"
  avatar="https://avatars.githubusercontent.com/u/34883558?v=4"
  github="https://github.com/pratik227"
  twitter="https://x.com/PratikPatel_227"
  sponsor="https://github.com/sponsors/pratik227"
  description="Vue.js डेवलपर जो फ्रंटएंड डेवलपमेंट को बेहतर बनाने वाले ओपन-सोर्स टूल्स बनाते हैं।"
/>

</div>
