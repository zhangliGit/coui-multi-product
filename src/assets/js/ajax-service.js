
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
axios.defaults.timeout = 15000 // 请求超时时间
function checkParams (params) {
  var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0)
  if (isAndroid) {
    return JSON.stringify(params)
  }
  return params
}
function errorToast (e) {
  Vue.$vux.loading.hide()
  let info
  console.log(JSON.stringify(e))
  if (e.code) {
    info = '数据请求失败'
  } else {
    info = '请检查网络'
  }
  Vue.$vux.toast.show({
    text: info,
    time: 1500,
    isShowMask: true,
    type: 'warn'
  })
}
const $ajax = (obj, tag = true) => {
  if (tag) {
    Vue.$vux.loading.show({})
  }
  return new Promise((resolve, reject) => {
    if (window.corNative) {
      var backMethod = 'backMethod_' + new Date().getTime()
      window[backMethod] = (res) => {
        Vue.$vux.loading.hide()
        if (res.status === true) {
          resolve(res.data)
        } else {
          reject(res)
          Vue.$vux.toast.show({
            text: '请求失败',
            time: 1500,
            isShowMask: true,
            type: 'warn'
          })
        }
      }
      var params = {
        url: obj.url,
        method: obj.type,
        data: obj.params,
        isForm: true,
        __callback: backMethod
      }
      params = checkParams(params)
      window.corNative.requestProxy(params)
    } else {
      if (!obj.hasOwnProperty('type') || obj.type.toLowerCase() === 'get') {
        axios.get(obj.url, {
          params: obj.params
        }).then(function (response) {
          Vue.$vux.loading.hide()
          resolve(response.data)
        }).catch(function (error) {
          reject(error)
          errorToast(error)
        })
      } else {
        axios.post(obj.url, qs.stringify(obj.params)).then(function (response) {
          Vue.$vux.loading.hide()
          resolve(response.data)
        }).catch(function (error) {
          reject(error)
          errorToast(error)
        })
      }
    }
  })
}

export default $ajax
