import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NextStepButton from '../src/components/NextStepButton.vue'

describe('NextStepButton', () => {
  it('should render', () => {
    const wrapper = mount(NextStepButton)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render label', () => {
    const wrapper = mount(NextStepButton, { props: { label: 'New Label' } })
    expect(wrapper.find('.container').text()).toContain('New Label')
  })
  it('hide icon', () => {
    const wrapper = mount(NextStepButton, { props: { hideIcon: true } })
    expect(wrapper.find('.icon').exists()).toBe(false)
  })
})
