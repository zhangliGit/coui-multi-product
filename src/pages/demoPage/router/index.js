import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
const AppMain = (resolve) => { require(['../views/AppMain.vue'], resolve) }
const DetailCom = (resolve) => { require(['../views/DetailCom.vue'], resolve) }

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
      component: HomePage
    },
    {
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain
    },
    {
      path: '/DetailCom',
      name: 'DetailCom',
      component: DetailCom
    }
  ]
})
