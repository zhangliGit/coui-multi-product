import Vue from 'vue'
import {
  AlertPlugin,
  LoadingPlugin,
  ToastPlugin,
  ConfirmPlugin,
  DatetimePlugin,
  TransferDom
} from 'vux'
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin, {
  position: 'middle',
  time: 2000
})
Vue.use(DatetimePlugin)
Vue.directive('transfer-dom', TransferDom)
const loadingToast = {
  loading (text = '') {
    Vue.$vux.loading.show({
      text: text
    })
  },
  hideLoading () {
    Vue.$vux.loading.hide()
  },
  toast (text, tag = 0) {
    const type = ['text', 'success', 'warn', 'cancel']
    Vue.$vux.toast.show({
      text: text,
      time: 2000,
      isShowMask: true,
      type: type[tag]
    })
  },
  alert (obj) {
    Vue.$vux.alert.show({
      title: obj.title || '提示',
      content: obj.content || '',
      onShow () {
      },
      onHide () {
        if (obj.onHide) {
          obj.onHide()
        }
      }
    })
  },
  confirm (obj) {
    Vue.$vux.confirm.show({
      title: obj.title || '提示',
      content: obj.content || '确定操作吗？',
      onCancel () {
        if (obj.onCancel) {
          obj.onCancel()
        }
      },
      onConfirm () {
        obj.confirm()
      }
    })
  },
  prompt (obj) {
    Vue.$vux.confirm.prompt('请输入内容', {
      showInput: true,
      dialogTransition: 'vux-fade',
      title: obj.value || '提示',
      closeOnConfirm: false,
      onCancel () {
        if (obj.cancel) {
          obj.cancel()
        }
      },
      onConfirm (value) {
        if (value === '') return
        obj.confirm(value)
        Vue.$vux.confirm.hide()
      }
    })
  },
  datetime (obj) {
    var format
    if (obj.type === 'date') {
      format = 'YYYY-MM-DD'
    } else if (obj.type === 'time') {
      format = 'HH:mm'
    } else if (obj.type === 'datetime') {
      format = 'YYYY-MM-DD HH:mm'
    } else if (obj.type === 'dateMonth') {
      format = 'YYYY-MM'
    }
    Vue.$vux.datetime.show({
      value: obj.value || '',
      format: format,
      title: '请选择日期',
      confirmText: '确定',
      cancelText: '取消',
      onHide () {
      },
      onShow () {
      },
      onConfirm (value) {
        obj.choose(value)
      }
    })
  }
}
Vue.prototype.$loading = loadingToast
export default {
  $loading: loadingToast
}
