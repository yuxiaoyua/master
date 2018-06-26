// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import './assets/js/rem'
Vue.use(ElementUi)
Vue.config.productionTip = false
import tools from './tools/tools'
Vue.use(tools)
import './directive'
import mock from './service'
mock.bootstrap()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
