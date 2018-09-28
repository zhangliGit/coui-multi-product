import Vue from 'vue'
import Router from 'vue-router'
import CouiList from '../views/CouiList.vue'

/**
 * 网络请求
 */
const AjaxData = (resolve) => { require(['../views/ajax-com/AjaxData.vue'], resolve) }
const AjaxDetail = (resolve) => { require(['../views/ajax-com/AjaxDetail.vue'], resolve) }

/**
 * ui控件
 */
const Loading = (resolve) => { require(['../views/toast-com/Loading.vue'], resolve) }
const Toast = (resolve) => { require(['../views/toast-com/Toast.vue'], resolve) }
const Alert = (resolve) => { require(['../views/toast-com/Alert.vue'], resolve) }
const Confirm = (resolve) => { require(['../views/toast-com/Confirm.vue'], resolve) }
const Prompt = (resolve) => { require(['../views/toast-com/Prompt.vue'], resolve) }
const Select = (resolve) => { require(['../views/toast-com/Select.vue'], resolve) }
const Popup = (resolve) => { require(['../views/toast-com/Popup.vue'], resolve) }
const ActionSheet = (resolve) => { require(['../views/toast-com/ActionSheet.vue'], resolve) }
const DateTime = (resolve) => { require(['../views/toast-com/DateTime.vue'], resolve) }

/**
 * 表单控件
 */
const Button = (resolve) => { require(['../views/form-com/Button.vue'], resolve) }
const Input = (resolve) => { require(['../views/form-com/Input.vue'], resolve) }
const TextArea = (resolve) => { require(['../views/form-com/TextArea.vue'], resolve) }
const Radio = (resolve) => { require(['../views/form-com/Radio.vue'], resolve) }
const CheckBox = (resolve) => { require(['../views/form-com/CheckBox.vue'], resolve) }
const Switch = (resolve) => { require(['../views/form-com/Switch.vue'], resolve) }

/**
 * 加载引导
 */
const Init = (resolve) => { require(['../views/init-com/Init.vue'], resolve) }
const Welcome = (resolve) => { require(['../views/init-com/Welcome.vue'], resolve) }

/**
 * 导航菜单
 */
const Header = (resolve) => { require(['../views/nav-com/Header.vue'], resolve) }
const Footer = (resolve) => { require(['../views/nav-com/Footer.vue'], resolve) }
const TopMenu = (resolve) => { require(['../views/nav-com/TopMenu.vue'], resolve) }
const TabMenu = (resolve) => { require(['../views/nav-com/TabMenu.vue'], resolve) }
const MultiTab = (resolve) => { require(['../views/nav-com/MultiTab.vue'], resolve) }

/**
 * 加载滑动
 */
const Scroll = (resolve) => { require(['../views/scroll-com/Scroll.vue'], resolve) }
const ScrollTopBot = (resolve) => { require(['../views/scroll-com/ScrollTopBot.vue'], resolve) }
const ScrollTop = (resolve) => { require(['../views/scroll-com/ScrollTop.vue'], resolve) }
const ScrollBot = (resolve) => { require(['../views/scroll-com/ScrollBot.vue'], resolve) }
const ScrollLefRit = (resolve) => { require(['../views/scroll-com/ScrollLefRit.vue'], resolve) }

/**
 * 轮播滚动
 */
const SwiperImg = (resolve) => { require(['../views/swiper-com/SwiperImg.vue'], resolve) }

/**
 * 进度条
 */
const LinePro = (resolve) => { require(['../views/progress-com/LinePro.vue'], resolve) }
const CirclePro = (resolve) => { require(['../views/progress-com/CirclePro.vue'], resolve) }
const StepPro = (resolve) => { require(['../views/progress-com/StepPro.vue'], resolve) }
const Star = (resolve) => { require(['../views/progress-com/Star.vue'], resolve) }

/**
 * 项目常用组件
 */
const ClockTime = (resolve) => { require(['../views/project-com/ClockTime.vue'], resolve) }
const Calendar = (resolve) => { require(['../views/project-com/Calendar.vue'], resolve) }
const CalendarScroll = (resolve) => { require(['../views/project-com/CalendarScroll.vue'], resolve) }
const ApprovalList = (resolve) => { require(['../views/project-com/ApprovalList.vue'], resolve) }
/**
 * 路由跳转
 */
const RouterPage = (resolve) => { require(['../views/RouterPage.vue'], resolve) }
const RouterA = (resolve) => { require(['../views/RouterA.vue'], resolve) }
const RouterB = (resolve) => { require(['../views/RouterB.vue'], resolve) }
const RouterC = (resolve) => { require(['../views/RouterC.vue'], resolve) }

Vue.use(Router)
Router.prototype.goBack = function (index) {
  this.isBack = true
  if (index) {
    this.go(index)
  } else {
    this.back()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CouiList',
      component: CouiList
    },
    /**
     * 网络请求
     */
    {
      path: '/ajax',
      name: 'ajax',
      component: AjaxData
    },
    {
      path: '/AjaxDetail',
      name: 'AjaxDetail',
      component: AjaxDetail
    },
    /**
     * ui控件
     */
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/prompt',
      name: 'Prompt',
      component: Prompt
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/datetime',
      name: 'DateTime',
      component: DateTime
    },
    /**
     * 表单控件
     */
    {
      path: '/Btn',
      name: 'Button',
      component: Button
    },
    {
      path: '/co-input',
      name: 'Input',
      component: Input
    },
    {
      path: '/textarea',
      name: 'TextArea',
      component: TextArea
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    /**
     * 加载引导
     */
    {
      path: '/init-img',
      name: 'Init',
      component: Init
    },
    {
      path: '/guide-img',
      name: 'Welcome',
      component: Welcome
    },
    /**
     * 导航菜单
     */
    {
      path: '/header-com',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer-com',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/top-menu',
      name: 'TopMenu',
      component: TopMenu
    },
    {
      path: '/tab-menu',
      name: 'TabMenu',
      component: TabMenu
    },
    {
      path: '/multi-swiper',
      name: 'MultiTab',
      component: MultiTab
    },
    /**
     * 滚动滑动
     */
    {
      path: '/scroll-list-1',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/scroll-list-2',
      name: 'ScrollTopBot',
      component: ScrollTopBot
    },
    {
      path: '/scroll-list-3',
      name: 'ScrollTop',
      component: ScrollTop
    },
    {
      path: '/scroll-list-4',
      name: 'ScrollBot',
      component: ScrollBot
    },
    {
      path: '/level-scroll',
      name: 'ScrollLefRit',
      component: ScrollLefRit
    },
    /**
     * 滚动滑动
     */
    {
      path: '/swiper-scroll',
      name: 'SwiperImg',
      component: SwiperImg
    },
    /**
     * 进度条
     */
    {
      path: '/line-progress',
      name: 'LinePro',
      component: LinePro
    },
    {
      path: '/x-circle',
      name: 'CirclePro',
      component: CirclePro
    },
    {
      path: '/StepPro',
      name: 'StepPro',
      component: StepPro
    },
    {
      path: '/star',
      name: 'Star',
      component: Star
    },
    /**
     * 项目常用组件
     */
    {
      path: '/clock-time',
      name: 'ClockTime',
      component: ClockTime
    },
    {
      path: '/calendar-show',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/calendar-bar',
      name: 'CalendarScroll',
      component: CalendarScroll
    },
    {
      path: '/ApprovalList',
      name: 'ApprovalList',
      component: ApprovalList
    },
    {
      path: '/RouterPage',
      name: 'RouterPage',
      component: RouterPage
    },
    {
      path: '/RouterA',
      name: 'RouterA',
      component: RouterA
    },
    {
      path: '/RouterB',
      name: 'RouterB',
      component: RouterB
    },
    {
      path: '/RouterC',
      name: 'RouterC',
      component: RouterC
    }
  ]
})
