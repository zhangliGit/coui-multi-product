/**
 * 公用store模块
 */
import $ajax from './../js/ajaxService.js'
import config from './../js/config.js'
import Vue from 'vue'
import Vuex from 'vuex'
import demoPage from './modules/demoPage'
import receiverPage from './modules/receiverPage'
import supplierPage from './modules/supplierPage'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demoPage,
    receiverPage,
    supplierPage
  },
  state: {
    isModify: false,
    dataList: [], // 列表的数据
    dataDetail: {},
    myData: {}, // 接口返回的所有数据
    houseList: [],
    carLengthList: []
  },
  getters: {
  },
  actions: {
    /**
    * @ 获取数据列表
    */
    showData ({ commit, state }, obj) {
      if (obj.type === 0) {
        state.page = 1
      } else {
        state.page++
      }
      $ajax({
        url: config.host + config.api.receiver.appointList,
        type: 'get',
        params: { // 分页数据
          page: state.page,
          pageSize: state.pageSize
        }
      }).then(data => {
        let result = data.data.dataList
        state.myData = data.data
        console.log(data)
        commit('setDataList', {type: obj.type, result})
        // 判断数据长度 展示不同的ui 并通过回调关闭关闭弹动效果
        obj.cb(result.length)
      }).catch(() => { // 请求数据失败时关闭弹动加载效果
        obj.cb()
      })
    },
    /**
    * @ 获取列表详情
    */
    getDetail ({ commit, state }, obj) {
      $ajax({
        url: config.host + config.api.receiver.appointDetail,
        type: 'get',
        params: {
          id: obj.id
        }
      }).then(data => {
        commit('setDataDetail', data.data)
        obj.cb()
      })
    },
    /**
    * @ 获取交样仓库列表
    */
    getHouse ({commit, state}, obj) {
      $ajax({
        url: config.host + config.api.supplier.getHouse,
        type: 'get'
      }).then(data => {
        state.houseList = data.data.houselist
        console.log(state.dataList)
        obj.cb()
      }).catch(() => {
        obj.cb()
      })
    },
    /**
     * @ 获取卡车长度
     */
    getcarLength ({commit, state}, obj) {
      $ajax({
        url: config.host + config.api.supplier.getcarLength,
        type: 'get'
      }).then(data => {
        state.carLengthList = data.data
        obj.cb()
      }).catch(() => {
        obj.cb()
      })
    },
    /**
     * @ 预约查询
     */
    appointQuery ({commit, state}, obj) {
      $ajax({
        url: config.host + config.api.receiver.appointQuery,
        type: 'get',
        params: obj.params
      }).then(data => {
        console.log(data)
        obj.cb()
      }).catch(() => {
        obj.cb()
      })
    },
    /**
     * @ 预约评价
     */
    addAppraise ({commit, state}, obj) {
      $ajax({
        url: config.host + config.api.receiver.addAppraise,
        type: 'get',
        params: obj.params
      }).then(data => {
        console.log(data)
        obj.cb()
      }).catch(() => {
        obj.cb()
      })
    }

  },
  mutations: {
    setDataList (state, obj) {
      if (obj.type === 0) { // 下拉刷新
        state.dataList = obj.result
      } else { // 上拉加载 数据累加
        state.dataList = state.dataList.concat(obj.result)
      }
    },
    setDataDetail (state, obj) {
      state.dataDetail = obj
      console.log(state.dataDetail)
    },
    setIsModify (state, isModify) {
      state.isModify = isModify
    }
  }
})
