import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
const AppMain = (resolve) => { require(['../views/AppMain.vue'], resolve) }
const DetailCom = (resolve) => { require(['../views/DetailCom.vue'], resolve) }
const UiCom = (resolve) => { require(['../views/UiCom.vue'], resolve) }
const TabCom = (resolve) => { require(['../views/TabCom.vue'], resolve) }
const SwiperList = (resolve) => { require(['../views/SwiperList.vue'], resolve) }
const LevelScroll = (resolve) => { require(['../views/LevelScroll.vue'], resolve) }
const ImgSwiper = (resolve) => { require(['../views/ImgSwiper.vue'], resolve) }
const MultiSwiper = (resolve) => { require(['../views/MultiSwiper.vue'], resolve) }
const Loading = (resolve) => { require(['../views/Loading.vue'], resolve) }
const Welcome = (resolve) => { require(['../views/Welcome.vue'], resolve) }
const FormVail = (resolve) => { require(['../views/FormVail.vue'], resolve) }
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
      path: '/Loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
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
    },
    {
      path: '/UiCom',
      name: 'UiCom',
      component: UiCom
    },
    {
      path: '/TabCom',
      name: 'TabCom',
      component: TabCom
    },
    {
      path: '/SwiperList',
      name: 'SwiperList',
      component: SwiperList
    },
    {
      path: '/LevelScroll',
      name: 'LevelScroll',
      component: LevelScroll
    },
    {
      path: '/ImgSwiper',
      name: 'ImgSwiper',
      component: ImgSwiper
    },
    {
      path: '/MultiSwiper',
      name: 'MultiSwiper',
      component: MultiSwiper
    },
    {
      path: '/FormVail',
      name: 'FormVail',
      component: FormVail
    }
  ]
})
