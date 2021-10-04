import { shallowMount } from '@vue/test-utils'

import Sidenav from '@/components/navigation/Sidenav'

describe('Sidenav.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Sidenav, {
      stubs: {
        NuxtLink: true,
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render 3 li items', async () => {
    await wrapper.setProps({ show: true })
    expect(wrapper.findAll('li')).toHaveLength(3)
  })
})
