<script setup>
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# AI 和 LLM 集成

Vue OTP Pro 提供结构化文档文件，AI 助手和代码生成代理可以使用它们来生成正确的组件代码。

## llms.txt

遵循 [llms.txt 标准](https://llmstxt.org/)，我们提供机器可读文档：

- **`/llms.txt`** — 概览，链接到所有文档部分
- **`/llms-full.txt`** — 单文件中的完整 API 参考

## 用于 AI 编码助手

如果您使用 AI 助手（Claude、Cursor、Copilot 等）：

```
阅读 Vue OTP Pro 文档中的 /llms-full.txt 获取完整的 API 参考。
```

## 常见生成模式

**基础 OTP：**
```vue
<OtpInput v-model="otp" @complete="verify" />
```

**带主题和错误处理：**
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

<SponsorBanner message="使用 Vue OTP Pro 构建 AI 驱动的工具？赞助项目以帮助优先开发 AI 友好的文档和工具。" />
