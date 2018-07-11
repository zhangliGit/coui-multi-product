import $ajax from '../../js/ajaxService.js'
import config from '../../js/config.js'
import plugin from '../../js/vuxPlugin.js'
require('../../js/vuxPlugin.js')

const receiverPage = {
  namespaced: true,
  state: {
    page: 1,
    pageSize: 10,
    dataList: [],
    dataDetail: {},
    userInfo: {}
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
          pageSize: state.pageSize,
          userId: 1
        }
      }).then(data => {
        let result = data.data
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
        url: 'http://yapi.demo.qunar.com/mock/9603/detail',
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
    * @ 登录
    */
    userLogin ({ commit, state }, obj) {
      $ajax({
        url: config.host + config.api.receiver.login,
        type: 'get',
        params: {
          userId: obj.id,
          password: obj.password
        }
      }).then(data => {
        console.log(data)
        if (data.status) {
          commit('setUserInfo', data.data)
          obj.cb()
        } else {
          plugin.$loading.toast('账号或密码错误', 0)
        }
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
    },
    setUserInfo (state, obj) {
      state.userInfo = obj
    }
  }
}

export default receiverPage
