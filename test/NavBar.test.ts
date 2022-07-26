import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NavBar from '../src/views/old/NavBar.vue'

describe('NavBar', () => {
  it('should render a nav bar', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
