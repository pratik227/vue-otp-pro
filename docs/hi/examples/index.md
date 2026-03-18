<script setup>
import OtpPlayground from '../../components/OtpPlayground.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# इंटरैक्टिव प्लेग्राउंड

ऑप्शन टॉगल करके अपना परफेक्ट OTP इनपुट बनाएं। जेनरेट किया गया कोड लाइव अपडेट होता है।

<OtpPlayground />

## क्विक उदाहरण

### बेसिक 6-डिजिट OTP

<div class="demo-container">
  <OtpDemo />
</div>

```vue
<OtpInput v-model="otp" />
```

### 4-डिजिट PIN

<div class="demo-container">
  <OtpDemo :num-inputs="4" />
</div>

### सभी साइज़

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="छोटा" />
  <OtpDemo :num-inputs="4" size="md" label="मध्यम" />
  <OtpDemo :num-inputs="4" size="lg" label="बड़ा" />
  <OtpDemo :num-inputs="4" size="xl" label="बहुत बड़ा" />
</div>
