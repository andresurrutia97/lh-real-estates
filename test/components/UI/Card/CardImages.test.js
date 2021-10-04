import { shallowMount } from '@vue/test-utils'

import CardImages from '@/components/UI/Card/CardImages'

describe('CardImages.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CardImages)
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render the correct number imgs', async () => {
    await wrapper.setProps({ images: ['img1'], total: 5 })
    expect(wrapper.findAll('img')).toHaveLength(1)
    await wrapper.setProps({ images: ['img1', 'img2'], total: 5 })
    expect(wrapper.findAll('img')).toHaveLength(2)
    await wrapper.setProps({ images: ['img1', 'img2', 'img3'], total: 5 })
    expect(wrapper.findAll('img')).toHaveLength(3)
  })

  test('should render the default image when no estates were added to the list', async () => {
    await wrapper.setProps({ images: [], total: 0 })
    expect(wrapper.findAll('img')).toHaveLength(1)
  })
})
