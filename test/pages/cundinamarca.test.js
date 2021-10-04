import { shallowMount } from '@vue/test-utils'

import Cundinamarca from '@/pages/cundinamarca'

describe('Recursos.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Cundinamarca)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
