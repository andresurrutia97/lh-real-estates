export const state = () => ({ estates: [], lists: [] })

export const mutations = {
  setEstates: (state, estates) => (state.estates = estates),
  setLists: (state, lists) =>
    // Added harCoded list just to show empty card
    (state.lists = [
      { id: 12345, attributes: { name: 'Mis Favoritos 2', real_estate_ids: [] } },
      ...lists,
    ]),
}

export const actions = {}

export const getters = {
  getEstates: (state) => state.estates,
  getLists: (state) => state.lists,
  getListImgUrls: (state) => (ids) =>
    state.estates
      .filter(({ id }) => ids.includes(+id))
      .map((estate) => estate.attributes.gallery_urls[0]),
}
