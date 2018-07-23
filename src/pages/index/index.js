// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('corlib/lib/iconfont.css')
require('corlib/lib/flex.css')
require('corlib/lib/base.css')
require('corlib/lib/rem.js')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
