import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'

import { lists } from '@/test/mocks'
import Card from '@/components/UI/Card'
import CardImages from '@/components/UI/Card/CardImages'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Card.vue', () => {
  let store
  let getters
  let wrapper

  beforeEach(() => {
    getters = {
      getListImgUrls: () => jest.fn(),
    }

    store = new Store({
      modules: {
        realEstates: {
          getters,
          namespaced: true,
        },
      },
    })

    wrapper = shallowMount(Card, { store, localVue })
  })

  test('should be a Vue instance', async () => {
    await wrapper.setProps({ list: lists[0] })
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain a CardImages instance when list prop has data', async () => {
    expect(wrapper.findAllComponents(CardImages).length).toBe(0)
    await wrapper.setProps({ list: lists[0] })
    expect(wrapper.findAllComponents(CardImages).length).toBe(1)
  })
})
