import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AppMain from '../views/AppMain.vue'
import DetailCom from '../views/DetailCom'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/DetailCom',
      name: 'DetailCom',
      component: DetailCom,
      meta: {
        keepAlive: true
      }
    }
  ]
})
