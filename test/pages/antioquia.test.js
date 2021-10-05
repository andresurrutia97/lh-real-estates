import { shallowMount } from '@vue/test-utils'

import Antioquia from '@/pages/antioquia'

describe('Recursos.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Antioquia)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
