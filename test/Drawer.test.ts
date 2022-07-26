import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Drawer from '../src/components/Drawer.vue'

describe('Drawer', () => {
  it('should render', () => {
    const wrapper = mount(Drawer)
    expect(wrapper.text()).toContain('Drawer')
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should toggle', async () => {
    const wrapper = mount(Drawer)
    expect(wrapper.find('.drawer').text()).toBe('')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.drawer').text()).toBe('Content')
  })
  it('should set default value', () => {
    const wrapper = mount(Drawer, { props: { defaultState: true } })
    expect(wrapper.find('.drawer').text()).toBe('Content')
  })
  it('should set the title', () => {
    const wrapper = mount(Drawer, { props: { title: 'Title' } })
    expect(wrapper.find('.title').text()).toBe('Title')
  })
})
