import { mount } from '@vue/test-utils'

import Menu from '@/components/UI/menu'

describe('Menu', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Menu)
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
})
