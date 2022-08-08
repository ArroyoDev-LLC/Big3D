import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Modal from '../src/components/Modal.vue'

describe('Modal', () => {
  it('should render', () => {
    const wrapper = mount(Modal)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render header slot', () => {
    const wrapper = mount(Modal, {
      slots: { header: '<div id="header">header</div>' }
    })
    expect(wrapper.find('#header').text()).toBe('header')
  })
  it('should render body slot', () => {
    const wrapper = mount(Modal, {
      slots: { body: '<div id="body">body</div>' }
    })
    expect(wrapper.find('#body').text()).toBe('body')
  })
  it('should render footer slot', () => {
    const wrapper = mount(Modal, {
      slots: { footer: '<div id="footer">footer</div>' }
    })
    expect(wrapper.find('#footer').text()).toBe('footer')
  })
  it('should emit close', () => {
    const wrapper = mount(Modal)
    wrapper.find('i').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
