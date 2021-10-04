import { shallowMount } from '@vue/test-utils'

import Recursos from '@/pages/recursos'

describe('Recursos.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Recursos)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
