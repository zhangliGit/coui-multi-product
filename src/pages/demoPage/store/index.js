/**
 * 公用store模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import demoPage from './modules/listData.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demoPage
  },
  state: {
    isModify: false,
    dataList: [], // 列表的数据
    dataDetail: {}
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  }
})
