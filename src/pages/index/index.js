// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('corlib/lib/iconfont.css')
require('corlib/lib/flex.css')
require('corlib/lib/base.css')
require('corlib/lib/rem.js')
let xmlToJSON = require('./xmlToJson.js')
let xml = '<string xmlns="http://mis.modernfarming.cn/">[{"客户单位名称":"五河县民盛种植合作社","客户姓名":"桂永君","总车数":315,"总吨数":4324.906,"拒收车数":16,"已出结果数量":275,"平均干物质":31.85,"未出结果数量":40,"未出结果吨数":384.730,"平均到场时间":119,"平均等待时间":11,"平均场内时间":194}]</string>'
console.log(JSON.parse(xmlToJSON.parseString(xml).string[0].data)[0])
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
