import { mount } from '@vue/test-utils'

import Item from '@/components/UI/menu/Item'

describe('Item', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Item, {
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
