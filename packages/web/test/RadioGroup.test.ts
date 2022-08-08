import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RadioGroup from '@/components/RadioGroup.vue'

const groupDefault = [{ value: 'a' }, { value: 'b' }, { value: 'c' }]
const groupWithLabel = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
  { value: 'c', label: 'C' }
]
const groupWithId = [
  { value: 'a', id: 'a' },
  { value: 'b', id: 'b' },
  { value: 'c', id: 'c' }
]
const groupDisableOne = [
  { value: 'a', id: 'a', disabled: true },
  { value: 'b', id: 'b', disabled: false },
  { value: 'c', id: 'b' }
]
const groupString = ['a', 'b', 'c']
const groupName = 'group'

describe('RadioGroup', () => {
  it('should render correctly', () => {
    const wrapper = mount(RadioGroup)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders radio group', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupDefault, groupName }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders radio group with label', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupWithLabel, groupName }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders radio group with id', () => {
    const wrapper = mount(RadioGroup, { props: { radioGroup: groupWithId } })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders disabled all', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupWithId, disabled: true }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders disabled one', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupDisableOne, groupName }
    })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.find('#b').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('select')
    wrapper.find('#a').trigger('click')
    expect(wrapper.emitted('select')).toHaveLength(1)
  })
  it('renders string', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupString, groupName }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('emits on select', () => {
    const wrapper = mount(RadioGroup, { props: { radioGroup: groupWithId } })
    wrapper.find('#a').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('select')
    expect(wrapper.emitted('select')[0][0]).toBe('a')
  })
  it('can access slots', () => {
    const wrapper = mount(RadioGroup, {
      props: { radioGroup: groupWithId },
      slots: {
        a: '<div>A</div>'
      }
    })
    expect(wrapper.html()).toContain('<div>A</div>')
  })
})
