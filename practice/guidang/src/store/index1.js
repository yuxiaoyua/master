import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0,
  editType: ''
}
function getData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
}
function getOtherData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('other success')
    }, 1000)
  })
}
const actions = {
  async actionA ({commit}) {
    commit('goData', await getData())
  },
  async actionB ({dispatch, commit}) {
    await dispatch('actionA')
    commit('goOtherData', await getOtherData())
  },
  add ({commit}, num) {
    commit('ADD', num)
  },
  cut ({commit}, num) {
    commit('CUT', num)
  },
  changeEdit ({commit}, type) {
    setTimeout(() => {
      commit('CHANGEEDIT', type)
    }, 1000)
  }
}
const mutations = {
  goData (state, str) {
    console.log(str)
  },
  goOtherData (state, str) {
    console.log(str)
  },
  ADD (state, num) {
    state.count = state.count + num
  },
  CUT (state, num) {
    state.count = state.count - num
  },
  CHANGEEDIT (state, type) {
    state.editType = type
  }
}
const getters = {
  count: state => state.count,
  editType: state => state.editType.slice()
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
