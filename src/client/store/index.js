import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    permission
  }
})

export default store
