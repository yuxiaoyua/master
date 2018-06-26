import {
  SETCONDITIONS,
  SETTOTAL,
  SETDATA
} from '../module_types.js'
import axios from 'axios'
const state = {
  conditions: {
    pageNum: 1,
    pageSize: 10
  },
  total: 0,
  data: [],
  currentPage: 1
}
const actions = {
  accountSetConditions ({commit}, conditions) {
    commit('SETCONDITIONS', conditions)
  },
  accountSearch ({commit, state}) {
    // /wecashMarketSystem/system/settle/order/list
    axios.get('/account/list', {
      ...state.conditions})
    .then((res) => {
      console.log(res)
      // res.data.forEach((v) => {
      //   // if(v.isSettlement =)
      //   switch (v.isSettlement) {
      //     case '0':
      //       v.isSettlement = '已结算'
      //       break
      //     case '1':
      //       v.isSettlement = '未结算'
      //       break
      //   }
      // })
      commit('SETTOTAL', res.data.Total)
      commit('SETDATA', res.data.data)
    })
  }
}
const mutations = {
  [SETCONDITIONS] (state, conditions) {
    Object.assign(state.conditions, conditions)
  },
  [SETDATA] (state, data) {
    state.data = data
  },
  [SETTOTAL] (state, total) {
    state.total = total
  }
}
export default {
  state,
  actions,
  mutations
}
