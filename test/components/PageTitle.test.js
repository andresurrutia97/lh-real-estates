import { shallowMount } from '@vue/test-utils'

import PageTitle from '@/components/PageTitle'

describe('PageTitle.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PageTitle, {
      slots: {
        default: 'PageTitle',
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain a the correct title', () => {
    expect(wrapper.text()).toContain('PageTitle')
  })
})
