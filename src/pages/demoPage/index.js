// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ajax from '../../assets/js/ajaxService.js'
import store from '../../assets/store/index.js'
require('mint-ui/lib/style.css')
require('corlib/lib/iconfont.css')
require('corlib/lib/flex.css')
require('corlib/lib/base.css')
require('corlib/lib/rem.js')
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$ajax = $ajax
const attachFastClick = require('fastclick')
attachFastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
