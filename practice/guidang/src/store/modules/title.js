import {
  SETTITLE
} from '../module_types.js'
const state = {
  title: ''
}
const actions = {
  setTitle ({commit}, payLoad) {
    commit('SETTITLE', payLoad.title)
  }
}
const mutations = {
  [SETTITLE] (state, title) {
    state.title = title
  }
}
export default {
  state,
  actions,
  mutations
}
