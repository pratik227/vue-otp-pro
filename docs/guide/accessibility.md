# Accessibility

Vue OTP Pro is built with accessibility in mind. Here's what's included out of the box.

## ARIA Support

- The container has `role="group"` to indicate it's a collection of related inputs
- Each input has an `aria-label` like "OTP Input digit 1", "OTP Input digit 2", etc.
- Customize the label prefix via the `ariaLabel` prop

```vue
<OtpInput aria-label="Verification code" />
<!-- Produces: "Verification code digit 1", "Verification code digit 2", ... -->
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `0-9` | Enter digit, auto-advance to next |
| `A-Z` | Enter letter (letter-numeric mode) |
| `Backspace` | Clear current or move to previous |
| `Delete` | Clear current input |
| `ArrowLeft` | Move focus to previous input |
| `ArrowRight` | Move focus to next input |
| `Tab` | Standard tab navigation |
| `Enter` | Triggers `complete` event if all filled |
| `Ctrl/Cmd + V` | Paste from clipboard |

## Focus Management

- Focus auto-advances when a digit is entered
- Focus moves back on backspace when current input is empty
- `shouldAutoFocus` prop focuses the first input on mount
- `shouldFocusOrder` enforces sequential input — users can't skip ahead

## Screen Readers

Each input is announced with its position:

> "OTP Input digit 1" → "OTP Input digit 2" → ...

The `autocomplete="one-time-code"` attribute helps password managers and mobile browsers auto-fill OTP codes.

## Mobile

- `inputmode="numeric"` shows the numeric keyboard on mobile
- iOS SMS autofill is supported via `autocomplete="one-time-code"`
- Paste handling strips delimiters automatically
- IME (Chinese, Japanese, Korean) composition is validated on completion

## Color Contrast

All built-in themes meet WCAG AA contrast requirements for text and borders. The focus ring provides a visible indicator for keyboard users.

## Disabled vs Readonly

| State | User interaction | Appearance |
|-------|-----------------|------------|
| Normal | Full input | Standard |
| `disabled` | No interaction | 45% opacity, not-allowed cursor |
| `readonly` | Focus/select only | 70% opacity, default cursor |
