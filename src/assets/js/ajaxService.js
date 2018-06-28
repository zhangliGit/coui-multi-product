
import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast } from 'mint-ui'
function checkParams (params) {
  var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0)
  if (isAndroid) {
    return JSON.stringify(params)
  }
  return params
}
const $ajax = (obj) => {
  return new Promise((resolve, reject) => {
    Indicator.open()
    if (window.corNative) {
      var backMethod = 'backMethod_' + new Date().getTime()
      window[backMethod] = (res) => {
        if (res.status === true) {
          Indicator.close()
          resolve(res.data)
        } else {
          Indicator.close()
          Toast('请求失败')
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
          Indicator.close()
          resolve(response.data)
        }).catch(function () {
          Indicator.close()
          Toast('请求失败')
        })
      } else {
        axios.post(obj.url, qs.stringify(obj.params)).then(function (response) {
          Indicator.close()
          resolve(response.data)
        }).catch(function () {
          Indicator.close()
          Toast('请求失败')
        })
      }
    }
  })
}
export default $ajax
