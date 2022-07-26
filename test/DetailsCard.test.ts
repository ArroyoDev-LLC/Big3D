import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DetailsCard from '../src/components/DetailsCard.vue'

describe('DetailsCard', () => {
  it('should render', () => {
    const wrapper = mount(DetailsCard)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render title', () => {
    const title = 'test title'
    const wrapper = mount(DetailsCard, { props: { title } })
    expect(wrapper.get('.title').text()).toBe(title)
  })
  it('render details', () => {
    const details = 'test details'
    const wrapper = mount(DetailsCard, { props: { details } })
    expect(wrapper.get('.details').text()).toBe(details)
  })
})
