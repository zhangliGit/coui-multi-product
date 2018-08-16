// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ajax from '../../assets/js/ajax-service.js'
import store from './store/index.js'
import moment from 'moment'
import { corJs, corNative } from 'corlib'
require('../../assets/js/vux-plugin.js')
require('../../assets/css/vux.css')
require('corlib/lib/iconfont.css')
require('corlib/lib/flex.css')
require('corlib/lib/base.css')
require('corlib/lib/rem.js')
let VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$ajax = $ajax
Vue.prototype.corJs = corJs
Vue.prototype.corNative = corNative
Vue.prototype.moment = moment
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
