import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NavBar from '../src/views/old/NavBar.vue'

describe('NavBar', () => {
  it('should render a nav bar', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render one item', () => {
    const wrapper = mount(NavBar, {
      navItems: [
        {
          label: 'Item 1',
          command: () => {
            console.log('test')
          }
        }
      ]
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render logged in', () => {
    const wrapper = mount(NavBar, { isUserLoggedIn: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
