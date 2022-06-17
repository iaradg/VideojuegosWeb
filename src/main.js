import Vue from 'vue'
import App from './App.vue'

/* ---------- Bootstrap ----------- */
/* https://getbootstrap.com/docs/4.6/getting-started/introduction/ */
/* Instalacion: npm i bootstrap@4 jquery popper.js */
import './bootstrap'

/* ---------- FORMULARIO AVANZADO (vue-form) ----------- */
/* https://www.npmjs.com/package/vue-form */
/* Instalacion: npm i vue-form */
import './form'

/* ---------- ROUTER (vue-router) ----------- */
/* https://www.npmjs.com/package/vue-router */
/* Instalacion: npm i vue-router@3 */
import { router } from  './router'

/* ---------- AXIOS ----------- */
/* https://github.com/axios/axios */
/* https://axios-http.com/ */
/* Instalación: npm i axios vue-axios */
import './axios'


/* ---------- GLOBAL FILTERS ----------- */
// import './globalFilters'


Vue.config.productionTip = false

new Vue({
  router, // es igual es -> router: router,
  render: h => h(App),
}).$mount('#app')
