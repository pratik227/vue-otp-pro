import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OtpInput from '../src/components/OtpInput.vue'

describe('OtpInput', () => {
  it('renders the correct number of inputs', () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4 } })
    expect(wrapper.findAll('.vop__input')).toHaveLength(4)
  })

  it('renders 6 inputs by default', () => {
    const wrapper = mount(OtpInput)
    expect(wrapper.findAll('.vop__input')).toHaveLength(6)
  })

  it('applies theme class', () => {
    const wrapper = mount(OtpInput, { props: { theme: 'underline' } })
    expect(wrapper.find('.vop').classes()).toContain('vop--underline')
  })

  it('applies size class', () => {
    const wrapper = mount(OtpInput, { props: { size: 'lg' } })
    expect(wrapper.find('.vop').classes()).toContain('vop--lg')
  })

  it('applies variant class', () => {
    const wrapper = mount(OtpInput, { props: { variant: 'primary' } })
    expect(wrapper.find('.vop').classes()).toContain('vop--primary')
  })

  it('applies error state class', () => {
    const wrapper = mount(OtpInput, { props: { error: true } })
    expect(wrapper.find('.vop').classes()).toContain('is-error')
  })

  it('applies success state class', () => {
    const wrapper = mount(OtpInput, { props: { success: true } })
    expect(wrapper.find('.vop').classes()).toContain('is-success')
  })

  it('disables all inputs when disabled prop is true', () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4, disabled: true } })
    const inputs = wrapper.findAll('.vop__input')
    inputs.forEach((input) => {
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  it('renders separator between inputs', () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4, separator: '-' } })
    const separators = wrapper.findAll('.vop__separator')
    expect(separators).toHaveLength(3)
  })

  it('renders placeholders', () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4, placeholder: ['1', '2', '3', '4'] },
    })
    const inputs = wrapper.findAll('.vop__input')
    expect(inputs[0].attributes('placeholder')).toBe('1')
    expect(inputs[3].attributes('placeholder')).toBe('4')
  })

  it('renders string placeholder on all inputs', () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 3, placeholder: '0' },
    })
    const inputs = wrapper.findAll('.vop__input')
    inputs.forEach((input) => {
      expect(input.attributes('placeholder')).toBe('0')
    })
  })

  it('emits update:modelValue on input change', async () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4 } })
    const input = wrapper.find('.vop__input')
    await input.setValue('5')
    await input.trigger('input')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('emits complete when all digits filled', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4 },
    })
    // Fill via exposed method then check
    ;(wrapper.vm as any).fill('1234')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('complete')).toBeTruthy()
  })

  it('handles backspace on empty input to move focus back', async () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4 } })
    const inputs = wrapper.findAll('.vop__input')
    // Focus second input
    await inputs[1].trigger('focus')
    // Press backspace on empty second input
    await inputs[1].trigger('keydown', { key: 'Backspace' })
    // Should have cleared & moved back — emitted change events
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('initializes with modelValue', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4, modelValue: '1234' },
    })
    await wrapper.vm.$nextTick()
    const inputs = wrapper.findAll('.vop__input')
    expect((inputs[0].element as HTMLInputElement).value).toBe('1')
    expect((inputs[1].element as HTMLInputElement).value).toBe('2')
    expect((inputs[2].element as HTMLInputElement).value).toBe('3')
    expect((inputs[3].element as HTMLInputElement).value).toBe('4')
  })

  it('exposes clear method', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4, modelValue: '1234' },
    })
    ;(wrapper.vm as any).clear()
    await wrapper.vm.$nextTick()
    const inputs = wrapper.findAll('.vop__input')
    inputs.forEach((input) => {
      expect((input.element as HTMLInputElement).value).toBe('')
    })
  })

  it('exposes fill method', async () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4 } })
    ;(wrapper.vm as any).fill('5678')
    await wrapper.vm.$nextTick()
    const inputs = wrapper.findAll('.vop__input')
    expect((inputs[0].element as HTMLInputElement).value).toBe('5')
    expect((inputs[3].element as HTMLInputElement).value).toBe('8')
  })

  it('handles paste event', async () => {
    const wrapper = mount(OtpInput, { props: { numInputs: 4 } })
    const input = wrapper.find('.vop__input')
    const clipboardData = { getData: () => '1234' }
    await input.trigger('paste', { clipboardData })
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('applies custom container class', () => {
    const wrapper = mount(OtpInput, {
      props: { containerClass: 'my-custom-class' },
    })
    expect(wrapper.find('.vop').classes()).toContain('my-custom-class')
  })

  it('sets aria-label on container', () => {
    const wrapper = mount(OtpInput, {
      props: { ariaLabel: 'Verification code' },
    })
    expect(wrapper.find('.vop').attributes('aria-label')).toBe('Verification code')
  })

  it('uses password input type when set', () => {
    const wrapper = mount(OtpInput, { props: { inputType: 'password' } })
    const input = wrapper.find('.vop__input')
    expect(input.attributes('type')).toBe('password')
  })

  it('uses text input type for non-password types', () => {
    const wrapper = mount(OtpInput, { props: { inputType: 'number' } })
    const input = wrapper.find('.vop__input')
    expect(input.attributes('type')).toBe('text')
  })

  // Bug fix: partial v-model update
  it('updates internal state when modelValue length < numInputs', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 6, modelValue: '' },
    })
    await wrapper.vm.$nextTick()

    // Simulate parent setting partial value "1"
    await wrapper.setProps({ modelValue: '1' })
    await wrapper.vm.$nextTick()
    const inputs = wrapper.findAll('.vop__input')
    expect((inputs[0].element as HTMLInputElement).value).toBe('1')
    expect((inputs[1].element as HTMLInputElement).value).toBe('')

    // Simulate parent appending "11"
    await wrapper.setProps({ modelValue: '11' })
    await wrapper.vm.$nextTick()
    expect((inputs[0].element as HTMLInputElement).value).toBe('1')
    expect((inputs[1].element as HTMLInputElement).value).toBe('1')
    expect((inputs[2].element as HTMLInputElement).value).toBe('')
  })

  it('handles incremental parent updates correctly', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4, modelValue: '' },
    })
    await wrapper.vm.$nextTick()

    // Add digits one by one from parent
    for (let i = 1; i <= 4; i++) {
      await wrapper.setProps({ modelValue: '1'.repeat(i) })
      await wrapper.vm.$nextTick()
      const inputs = wrapper.findAll('.vop__input')
      for (let j = 0; j < i; j++) {
        expect((inputs[j].element as HTMLInputElement).value).toBe('1')
      }
    }
  })

  // Bug fix: paste strips delimiters
  it('filters non-numeric delimiters when pasting with inputType number', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 6, inputType: 'number' },
    })
    const input = wrapper.find('.vop__input')
    const clipboardData = { getData: () => '123-456' }
    await input.trigger('paste', { clipboardData })
    await wrapper.vm.$nextTick()

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    // The last emitted value should have all 6 digits
    const lastValue = emitted![emitted!.length - 1][0]
    expect(lastValue).toBe('123456')
  })

  // New themes
  it.each(['flush', 'shadow', 'neon', 'glass', 'minimal', 'filled'] as const)(
    'applies %s theme class',
    (theme) => {
      const wrapper = mount(OtpInput, { props: { theme } })
      expect(wrapper.find('.vop').classes()).toContain(`vop--${theme}`)
    }
  )

  it('clears value when modelValue set to empty string', async () => {
    const wrapper = mount(OtpInput, {
      props: { numInputs: 4, modelValue: '1234' },
    })
    await wrapper.vm.$nextTick()

    await wrapper.setProps({ modelValue: '' })
    await wrapper.vm.$nextTick()

    const inputs = wrapper.findAll('.vop__input')
    inputs.forEach((input) => {
      expect((input.element as HTMLInputElement).value).toBe('')
    })
  })
})
