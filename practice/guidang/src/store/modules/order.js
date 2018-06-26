import {
  SETEDITTYPE
} from '../module_types.js'
const state = {
  editType: '',
  total: 0
}
const actions = {
  setEditType ({commit}, payLoad) {
    console.log('SETEDITTYPE')
    commit('SETEDITTYPE', payLoad.editType)
  }
}
const mutations = {
  [SETEDITTYPE] (state, type) {
    state.editType = type
  }
}
export default {
  state,
  actions,
  mutations
}
