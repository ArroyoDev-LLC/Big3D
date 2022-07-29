import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NavBar from '../src/views/old/NavBar.vue'

const navItems = [
  {
    label: 'Item',
    command: () => {
      console.log('test')
    }
  }
]

describe('NavBar', () => {
  it('should render a nav bar', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render one item', () => {
    const wrapper = mount(NavBar, {
      navItems
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render logged in', () => {
    const wrapper = mount(NavBar, { props: { isUserLoggedIn: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render item click', () => {
    const wrapper = mount(NavBar, { props: { navItems } })
    wrapper.find('.nav-item').trigger('click')
    expect(wrapper.emitted('tabClick')[0][0]).toBe('Item')
  })
})
