import { shallowMount } from '@vue/test-utils'

import DropdownItem from '@/components/UI/Dropdown/DropdownItem'

describe('DropdownItem.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DropdownItem, {
      slots: {
        default: '<div class="child"></div>',
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain a child component', () => {
    expect(wrapper.findAll('.child').length).toBe(1)
  })
})
