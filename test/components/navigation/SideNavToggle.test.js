import { shallowMount } from '@vue/test-utils'

import SideNavToggle from '@/components/navigation/SideNavToggle'

describe('SideNavToggle.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SideNavToggle)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should emit toggle event on click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
})
