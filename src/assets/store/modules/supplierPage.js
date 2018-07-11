import $ajax from '../../js/ajaxService.js'
import config from '../../js/config.js'

const supplierPage = {
  namespaced: true,
  state: {
    page: 1,
    pageSize: 10,
    dataList: [],
    dataDetail: {},
    mydata: {},
    snrList: [],
    allData: {},
    appointData: {}
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
    },
    /**
    * @ 获取SNR列表
    */
   getSNRlist ({commit, state}, obj) {
    if (obj.type === 0) {
      state.page = 1
    } else {
      state.page++
    }
    $ajax({
      url: config.host+config.api.supplier.snrList,
      type: 'get',
      params: { // 分页数据
        page: state.page,
        pageSize: state.pageSize,
        userName: 1
      }
    }).then(data => {
      console.log(data);
      let result = data.data.datalist
      state.mydata = data.data
      commit('setDataList', {type: obj.type, result})
      obj.cb(result.length)
    }).catch(() => { // 请求数据失败时关闭弹动加载效果
      obj.cb()
    })
   },
   /**
    * @ 获取SNR二维码创建记录
    */
   getSNRrecord ({commit, state}, obj) {
    $ajax({
      url: config.host+config.api.supplier.snrRecord,
      type: 'get',
      params: { // 分页数据
        id: obj.id
      }
    }).then(data => {
      commit('setDataDetail', data.data)
      obj.cb()
    }).catch(() => { // 请求数据失败时关闭弹动加载效果
      obj.cb()
    })
   },
   /**
    * @ 获取SNR二维码详情
    */
   getcodeDetail ({commit, state}, obj) {
    $ajax({
      url: config.host+config.api.supplier.getcodeDetail,
      type: 'get',
      params: { 
        id: obj.id
      }
    }).then(data => {
      commit('setDataDetail', data.data)
    }).catch(() => { // 请求数据失败时关闭弹动加载效果
      obj.cb()
    })
   },
  
    /**
    * @ 验证SNR号
    */
   testSNR ({commit, state}, obj) {
    $ajax({
      url: config.host + config.api.supplier.snrTest,
      type: 'get',
      params: {
        snrlist: obj.snrlist
      }
    }).then(data => {
     console.log(data);
     console.log(data.data);
     state.mydata = data
     obj.cb()
    }).catch(() => {
      obj.cb()
    })
   },
    /**
    * @ 修改预约
    */
   modifyAppoint ( {commit, state}, obj) {
    $ajax({
      url: config.host + config.api.supplier.modifyAppoint,
      type: 'get',
      params: {
        id: obj.id
      }
    }).then(data => {
     console.log(data);
     console.log(data.data);
     state.appointData = data.data
     obj.cb()
    }).catch(() => {
      obj.cb()
    })
   },
    /**
    * @ 提交预约
    */
   submitAppoint ( {commit, state}, obj) {
    $ajax({
      url: config.host + config.api.supplier.submitAppoint,
      type: 'get',
      params: {
        info: obj.info
      }
    }).then(data => {
    //  console.log(data);
    //  console.log(data.data);
    //  state.appointData = data.data
     obj.cb(data)
    }).catch(() => {
      obj.cb()
    })
   },

    /**
    * @ 存储新建预约需要提交的数据
    */
   saveSNRlist ({commit, state}, snrlist){
    //  state.snrList = snrlist
     commit('saveSNRlist', snrlist)
   },
   saveInformation ({commit, state}, info) {
    commit('saveInformation', info)
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
    saveSNRlist (state, snrlist) {
      state.snrList = snrlist
    },
    saveInformation (state, info) {
      state.allData = info
      console.log(state.allData );
      
    }
  }
}

export default supplierPage
