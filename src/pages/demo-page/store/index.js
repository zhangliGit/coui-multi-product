/**
 * 公用store模块
 */
import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
import demoPage from './modules/list-data.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demoPage
  },
  state: {
  },
  getters: {
  },
  actions: {

  },
  mutations: {
  },
  plugins: [createPersistedState()]
})
