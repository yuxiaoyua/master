// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from "vue-bus"

Vue.use(VueBus);
Vue.config.productionTip = false

import Vuex from "vuex"

Vue.use(Vuex)

import axios from "axios"
import vueAxios from "vue-axios"

Vue.use(vueAxios, axios)


var store = new Vuex.Store({
    state: {
        list: [],
        allPrice: 0,
        allConte: 0,
        allControl: false
    },
    mutations: {
        ajaxDataMutaion(state, data) {
            state.list = data
        },
        allPriceFn(state) {
            var allprice = 0
            var allconte = 0
            state.list.forEach(function(i) {
                if (i.state) {
                    allprice += i.price * i.num
                    allconte += i.num
                }
            });
            state.allPrice = allprice
            state.allConte = allconte
        },
        countFn(state, type, id) {

            state.list.forEach(function(i) {
                if (i.id == id) {
                    if (type == "+") {
                        i.num++
                    } else {
                        i.num--
                    }
                }
            })

        },
    },
    actions: {
        ajaxData({ commit }, _this) {
            _this.axios.get("/api/index").then(function(data) {
                commit("ajaxDataMutaion", data.data)
                commit("allPriceFn")

            })
        },
        countFn({ commit }) {
            commit(countFn)
        }
    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})