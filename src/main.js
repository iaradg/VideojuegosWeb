import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './form'
import axios from './axios'
import { router } from  './router'
import store from './store'
import './globalMixins'
import './globalFilters'
Vue.config.productionTip = false

new Vue({
  router, // es igual es -> router: router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')