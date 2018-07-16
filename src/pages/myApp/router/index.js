import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
const detail = (resolve) => { require(['../views/detail.vue'], resolve) }
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
