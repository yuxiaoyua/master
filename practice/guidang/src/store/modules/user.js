const state = {
  count: 0
}
const actions = {
  addUser ({commit}) {
    console.log('order add')
    commit('ADD', 1)
  }
}
const mutations = {
  ADDUSER (state, num) {
    state.count = state.count + num
  }
}
export default {
  state,
  actions,
  mutations
}
