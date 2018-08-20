
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
function checkParams (params) {
  var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0)
  if (isAndroid) {
    return JSON.stringify(params)
  }
  return params
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
          reject()
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
        }).catch(function () {
          reject()
          Vue.$vux.loading.hide()
          Vue.$vux.toast.show({
            text: '请求失败',
            time: 1500,
            isShowMask: true,
            type: 'warn'
          })
        })
      } else {
        axios.post(obj.url, qs.stringify(obj.params)).then(function (response) {
          resolve(response.data)
          Vue.$vux.loading.hide()
        }).catch(function () {
          reject()
          Vue.$vux.loading.hide()
          Vue.$vux.toast.show({
            text: '请求失败',
            time: 1500,
            isShowMask: true,
            type: 'warn'
          })
        })
      }
    }
  })
}
export default $ajax
