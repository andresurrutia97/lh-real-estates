import { getLists } from '@/api'

export const actions = {
  nuxtServerInit({ commit }, { error }) {
    return getLists()
      .then(({ data, included }) => {
        commit('realEstates/setEstates', included)
        commit('realEstates/setLists', data)
      })
      .catch(() => {
        // Handle error
      })
  },
}
