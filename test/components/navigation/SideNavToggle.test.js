import { mount } from '@vue/test-utils'

import SidenavToggle from '@/components/navigation/SidenavToggle'

describe('SidenavToggle', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SidenavToggle)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should emit toggle event on click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
})
