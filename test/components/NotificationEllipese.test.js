import { shallowMount } from '@vue/test-utils'

import NotificationEllipse from '@/components/NotificationEllipse'

describe('NotificationEllipse.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NotificationEllipse)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should set the class to block when show is set to true', async () => {
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.setProps({ show: true })
    expect(wrapper.classes()).toContain('block')
  })
})
