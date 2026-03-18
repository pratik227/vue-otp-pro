<script setup>
import ThemeShowcase from '../../components/ThemeShowcase.vue'
import OtpDemo from '../../components/OtpDemo.vue'
</script>

# थीमिंग

Vue OTP Pro **11 बिल्ट-इन थीम** के साथ आता है। **5 कलर वेरिएंट** के साथ मिलाकर **55+ कॉम्बिनेशन** बनाएं।

## सभी थीम

<ThemeShowcase />

## कलर वेरिएंट

<div class="demo-container">
  <OtpDemo :num-inputs="4" variant="primary" label="Primary" />
  <OtpDemo :num-inputs="4" variant="success" label="Success" />
  <OtpDemo :num-inputs="4" variant="danger" label="Danger" />
  <OtpDemo :num-inputs="4" variant="warning" label="Warning" />
</div>

## CSS कस्टम प्रॉपर्टीज

```css
.vop {
  --vop-border-color: #d1d5db;
  --vop-border-focus: #6366f1;
  --vop-bg: #ffffff;
  --vop-text: #1f2937;
}
```

### डार्क मोड

```css
.dark .vop {
  --vop-border-color: #374151;
  --vop-border-focus: #818cf8;
  --vop-bg: #1f2937;
  --vop-text: #f9fafb;
}
```

## साइज़

<div class="demo-container">
  <OtpDemo :num-inputs="4" size="sm" label="छोटा" />
  <OtpDemo :num-inputs="4" size="md" label="मध्यम" />
  <OtpDemo :num-inputs="4" size="lg" label="बड़ा" />
  <OtpDemo :num-inputs="4" size="xl" label="बहुत बड़ा" />
</div>
