import { mount } from '@vue/test-utils'

import Sidenav from '@/components/navigation/Sidenav'

describe('Sidenav', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Sidenav, {
      stubs: {
        NuxtLink: true,
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render no items', () => {
    expect(wrapper.findAll('li')).toHaveLength(0)
  })

  test('should render 3 items when show is set to true', async () => {
    await wrapper.setProps({ show: true })
    expect(wrapper.findAll('li')).toHaveLength(3)
  })
})
