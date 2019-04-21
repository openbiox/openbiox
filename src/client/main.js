import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import axios from 'axios'
import VueSocketIO from 'vue-socket.io'
import './permission' // permission control
import './assets/css/global.css'

Vue.use(Vuex)
Vue.use(new VueSocketIO({
  debug: false,
  connection: process.env.VUE_APP_API_URL,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

Vue.config.productionTip = false

// Set global axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

Vue.prototype.$http = axios
Vue.prototype.$ajax = axios

// Global components
Vue.component('b-svg', () => import('@/components/base/svg/BaseSvg.vue'))
Vue.component('b-nav', () => import('@/components/base/header/BaseHeader'))
Vue.component('b-footer', () => import('@/components/base/footer/BaseFooter'))
Vue.component('b-banner', () => import('@/components/base/banner/BaseBanner'))
Vue.component('b-back-to-top', () => import('@/components/base/button/BaseBackToTop'))
Vue.component('b-sidebar-list-group', () => import('@/components/base/sidebar/BaseSidebarListGroup'))
Vue.component('b-progress-message', () => import('@/components/base/message/BaseProgressMessage'))
Vue.component('b-export-btn-csv', () => import('@/components/base/export/BaseJson2CsvBtn.vue'))
Vue.component('b-export-btn-json', () => import('@/components/base/export/BaseJson2FileBtn.vue'))

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
