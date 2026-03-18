# 无障碍

Vue OTP Pro 在设计时就考虑了无障碍性。

## ARIA 支持

- 容器具有 `role="group"`
- 每个输入框都有 `aria-label`，如 "OTP Input digit 1"
- 通过 `ariaLabel` prop 自定义标签前缀

## 键盘导航

| 按键 | 操作 |
|------|------|
| `0-9` | 输入数字，自动前进到下一个 |
| `Backspace` | 清除当前或移动到上一个 |
| `Delete` | 清除当前输入框 |
| `ArrowLeft` | 将焦点移到上一个输入框 |
| `ArrowRight` | 将焦点移到下一个输入框 |
| `Tab` | 标准 Tab 导航 |
| `Enter` | 如果全部填满则触发 `complete` 事件 |
| `Ctrl/Cmd + V` | 从剪贴板粘贴 |

## 移动端

- `inputmode="numeric"` 在移动端显示数字键盘
- 通过 `autocomplete="one-time-code"` 支持 iOS 短信自动填充
- 粘贴处理自动去除分隔符
- IME 输入法（中文、日文、韩文）在组合完成后进行验证

## 禁用 vs 只读

| 状态 | 用户交互 | 外观 |
|------|----------|------|
| 正常 | 完整输入 | 标准 |
| `disabled` | 无法交互 | 45% 不透明度 |
| `readonly` | 仅聚焦/选择 | 70% 不透明度 |
