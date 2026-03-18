<script setup>
import SponsorBanner from '../../components/SponsorBanner.vue'
</script>

# AI と LLM の統合

Vue OTP Pro は、AI アシスタントやコード生成エージェントが正しいコードを生成するための構造化ドキュメントファイルを提供します。

## llms.txt

[llms.txt 標準](https://llmstxt.org/)に準拠し、機械可読ドキュメントを提供：

- **`/llms.txt`** — 概要とすべてのセクションへのリンク
- **`/llms-full.txt`** — 単一ファイルの完全な API リファレンス

## AI コーディングアシスタント向け

```
Vue OTP Pro のドキュメントから /llms-full.txt を読み込んで、完全な API リファレンスを取得してください。
```

## 一般的な生成パターン

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

<SponsorBanner message="Vue OTP Pro で AI ツールを構築していますか？プロジェクトをスポンサーして AI フレンドリーなドキュメントとツールを優先的に開発しましょう。" />
