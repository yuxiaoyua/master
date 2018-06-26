// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuex from "vuex"

Vue.use(Vuex)

import axios from "axios"
import vueAxios from "vue-axios"

Vue.use(vueAxios, axios)
import "./mock/index"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import echarts from "echarts"
import jquery from "jquery"
Vue.use({
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$echarts', {
                value: echarts
            }),
            Object.defineProperty(Vue.prototype, '$', {
                value: jquery
            })
    }
})


import moduleA from "./store/module1"


var store = new Vuex.Store({
        modules: {
            a: moduleA
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})