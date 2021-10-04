import { shallowMount } from '@vue/test-utils'

import PageContent from '@/components/PageContent'

describe('PageContent.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PageContent, {
      slots: {
        default: '<div class="PageContent"></div>',
      },
    })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain a child component', () => {
    expect(wrapper.findAll('.PageContent').length).toBe(1)
  })
})
