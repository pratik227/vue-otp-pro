<script setup>
import SponsorBanner from '../components/SponsorBanner.vue'
</script>

# AI & LLM Integration

Vue OTP Pro provides structured documentation files that AI assistants and code-generation agents can use to produce correct component code.

## llms.txt

Following the [llms.txt standard](https://llmstxt.org/), we provide machine-readable documentation at:

- **`/llms.txt`** — Overview with links to all documentation sections
- **`/llms-full.txt`** — Complete API reference in a single file (props, events, methods, types, CSS variables, and usage patterns)

These files are served as static assets from the docs site. AI agents that support `llms.txt` will automatically discover and use them.

## For AI Coding Assistants

If you're using an AI assistant (Claude, Cursor, Copilot, etc.) to generate code with Vue OTP Pro, you can point it to the full reference:

```
Read /llms-full.txt from the Vue OTP Pro docs for the complete API reference.
```

The `llms-full.txt` file contains:
- All props with types, defaults, and descriptions
- All events with payloads
- All exposed methods
- The `useOtp()` composable API
- All TypeScript types
- All CSS custom properties
- All CSS classes the component applies
- Common usage patterns and code examples

## For MCP Servers & Agents

If you're building an MCP server or agent that needs to generate Vue OTP Pro code:

### 1. Fetch the reference

```ts
const response = await fetch('https://vue-otp-pro.dev/llms-full.txt')
const apiReference = await response.text()
```

### 2. Include in system prompt

```ts
const systemPrompt = `
You are a Vue.js code generator.
When the user asks for an OTP input, use the Vue OTP Pro library.

${apiReference}
`
```

### 3. Common generation patterns

**Basic OTP:**
```vue
<OtpInput v-model="otp" @complete="handleVerify" />
```

**Themed with error handling:**
```vue
<OtpInput
  v-model="otp"
  theme="separated"
  variant="primary"
  size="lg"
  :error="hasError"
  :success="isVerified"
  should-auto-focus
  @complete="verify"
/>
```

**4-digit PIN:**
```vue
<OtpInput v-model="pin" :num-inputs="4" input-type="password" />
```

## Context Window Tips

- Use `/llms.txt` (small) to decide if the full reference is needed
- Use `/llms-full.txt` (~3KB) for complete code generation context
- The full reference fits easily within any modern LLM's context window

<SponsorBanner message="Building AI-powered tools with Vue OTP Pro? Sponsor the project to help prioritize AI-friendly documentation and tooling." />
