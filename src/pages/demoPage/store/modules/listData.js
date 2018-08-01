import $ajax from '@a/js/ajax_service.js'
const demoPage = {
  namespaced: true,
  state: {
    page: 1,
    pageSize: 10,
    dataList: [],
    dataDetail: {}
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
        url: 'http://yapi.demo.qunar.com/mock/9603/getList',
        type: 'get',
        params: { // 分页数据
          page: state.page,
          pageSize: state.pageSize
        }
      }).then(data => {
        let result = data.data
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
    }
  }
}

export default demoPage
