import { shallowMount } from '@vue/test-utils'

import Dropdown from '@/components/UI/Dropdown'

describe('Dropdown.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Dropdown)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should change handle ', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.isVisible).toBeTruthy()
  })

  test('should handle toggle menu correctly on click', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.isVisible).toBeTruthy()
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.isVisible).toBeFalsy()
  })

  test('should handle close menu correctly on blur', async () => {
    await wrapper.trigger('blur')
    expect(wrapper.vm.isVisible).toBeFalsy()
  })

  test('should set isVisible to false', async () => {
    await wrapper.vm.handleClose()
    expect(wrapper.vm.isVisible).toBeFalsy()
  })
})
