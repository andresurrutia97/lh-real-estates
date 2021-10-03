import { mount } from '@vue/test-utils'

import Header from '@/components/navigation/Header'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: {
        NuxtLink: true,
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render menu items correctly', () => {
    expect(wrapper.findAll('li')).toHaveLength(4)
  })
})
