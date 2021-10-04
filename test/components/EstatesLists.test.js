import { shallowMount } from '@vue/test-utils'

import { lists } from '@/test/mocks'
import EstateLists from '@/components/EstateLists'
import Card from '@/components/UI/Card'

describe('EstateLists', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(EstateLists)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain the correct amount of instances of Cards', async () => {
    await wrapper.setProps({ estateLists: lists })
    expect(wrapper.findAllComponents(Card).length).toBe(2)
  })
})
