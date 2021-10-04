export const state = () => ({ estates: [], lists: [] })

export const mutations = {
  setEstates(state, estates) {
    state.estates = estates
  },
  setLists(state, lists) {
    state.lists = lists
  },
}

export const actions = {}

export const getters = {
  getEstates(state) {
    return state.estates
  },
  getLists(state) {
    return state.lists
  },
}
