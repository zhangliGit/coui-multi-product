/**
 * 公用store模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import demoPage from './modules/demoPage'
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
  }
})
