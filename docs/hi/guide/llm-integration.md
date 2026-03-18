<script setup>
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# AI और LLM इंटीग्रेशन

Vue OTP Pro स्ट्रक्चर्ड डॉक्यूमेंटेशन फाइलें प्रदान करता है जिन्हें AI असिस्टेंट और कोड जेनरेशन एजेंट सही कोड बनाने के लिए उपयोग कर सकते हैं।

## llms.txt

[llms.txt स्टैंडर्ड](https://llmstxt.org/) का पालन करते हुए, हम मशीन-रीडेबल डॉक्यूमेंटेशन प्रदान करते हैं:

- **`/llms.txt`** — सभी सेक्शन के लिंक के साथ अवलोकन
- **`/llms-full.txt`** — एक ही फाइल में पूर्ण API रेफरेंस

## AI कोडिंग असिस्टेंट के लिए

अगर आप AI असिस्टेंट (Claude, Cursor, Copilot, आदि) का उपयोग कर रहे हैं:

```
पूर्ण API रेफरेंस के लिए Vue OTP Pro डॉक्स से /llms-full.txt पढ़ें।
```

## सामान्य जेनरेशन पैटर्न

```vue
<OtpInput v-model="otp" @complete="verify" />
```

```vue
<OtpInput
  v-model="otp"
  theme="separated"
  variant="primary"
  size="lg"
  :error="hasError"
  should-auto-focus
  @complete="verify"
/>
```

<SponsorBanner message="Vue OTP Pro के साथ AI-संचालित टूल बना रहे हैं? AI-फ्रेंडली डॉक्यूमेंटेशन और टूलिंग को प्राथमिकता देने के लिए प्रोजेक्ट को स्पॉन्सर करें।" />
