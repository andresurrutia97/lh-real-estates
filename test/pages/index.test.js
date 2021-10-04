import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'

import { lists } from '@/test/mocks'
import MainPage from '@/pages'
import EstateLists from '@/components/EstateLists'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('index.vue', () => {
  let store
  let getters
  let wrapper

  beforeEach(() => {
    getters = {
      getLists: jest.fn(() => lists),
    }

    store = new Store({
      modules: {
        realEstates: {
          getters,
          namespaced: true,
        },
      },
    })

    wrapper = shallowMount(MainPage, { store, localVue })
  })

  test('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should contain an instance of EstateLists with the prop estateLists equal to lists', () => {
    expect(wrapper.findAllComponents(EstateLists).length).toBe(1)
    expect(wrapper.findComponent(EstateLists).props('estateLists')).toBe(lists)
  })
})
