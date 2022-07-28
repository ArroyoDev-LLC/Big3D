import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RadioGroup from '@/components/RadioGroup.vue'

describe('RadioGroup', () => {
  it('should render correctly', () => {
    const wrapper = mount(RadioGroup)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('', () => {})
})
