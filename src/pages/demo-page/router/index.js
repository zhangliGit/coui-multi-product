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
const TimeLine = (resolve) => { require(['../views/project-com/TimeLine.vue'], resolve) }
const Calendar = (resolve) => { require(['../views/project-com/Calendar.vue'], resolve) }
const CalendarScroll = (resolve) => { require(['../views/project-com/CalendarScroll.vue'], resolve) }

const BusinessFun = (resolve) => { require(['../views/BusinessFun.vue'], resolve) }
const RouterPage = (resolve) => { require(['../views/RouterPage.vue'], resolve) }
const RouterA = (resolve) => { require(['../views/RouterA.vue'], resolve) }
const RouterB = (resolve) => { require(['../views/RouterB.vue'], resolve) }
const RouterC = (resolve) => { require(['../views/RouterC.vue'], resolve) }
const AppMain = (resolve) => { require(['../views/AppMain.vue'], resolve) }
const DetailCom = (resolve) => { require(['../views/DetailCom.vue'], resolve) }
const UiCom = (resolve) => { require(['../views/UiCom.vue'], resolve) }
const TabCom = (resolve) => { require(['../views/TabCom.vue'], resolve) }
const SwiperList = (resolve) => { require(['../views/SwiperList.vue'], resolve) }
const ImgSwiper = (resolve) => { require(['../views/ImgSwiper.vue'], resolve) }
const FormVail = (resolve) => { require(['../views/FormVail.vue'], resolve) }
const WaterFall = (resolve) => { require(['../views/WaterFall.vue'], resolve) }
const CalendarShow = (resolve) => { require(['../views/CalendarShow.vue'], resolve) }
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
      path: '/AjaxData',
      name: 'AjaxData',
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
      path: '/Loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/Prompt',
      name: 'Prompt',
      component: Prompt
    },
    {
      path: '/Select',
      name: 'Select',
      component: Select
    },
    {
      path: '/ActionSheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/DateTime',
      name: 'DateTime',
      component: DateTime
    },
    /**
     * 表单控件
     */
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/TextArea',
      name: 'TextArea',
      component: TextArea
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/CheckBox',
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch
    },
    /**
     * 加载引导
     */
    {
      path: '/Init',
      name: 'Init',
      component: Init
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    },
    /**
     * 导航菜单
     */
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/TopMenu',
      name: 'TopMenu',
      component: TopMenu
    },
    {
      path: '/TabMenu',
      name: 'TabMenu',
      component: TabMenu
    },
    {
      path: '/MultiTab',
      name: 'MultiTab',
      component: MultiTab
    },
    /**
     * 滚动滑动
     */
    {
      path: '/Scroll',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/ScrollTopBot',
      name: 'ScrollTopBot',
      component: ScrollTopBot
    },
    {
      path: '/ScrollTop',
      name: 'ScrollTop',
      component: ScrollTop
    },
    {
      path: '/ScrollBot',
      name: 'ScrollBot',
      component: ScrollBot
    },
    {
      path: '/ScrollLefRit',
      name: 'ScrollLefRit',
      component: ScrollLefRit
    },
    /**
     * 滚动滑动
     */
    {
      path: '/SwiperImg',
      name: 'SwiperImg',
      component: SwiperImg
    },
    /**
     * 进度条
     */
    {
      path: '/LinePro',
      name: 'LinePro',
      component: LinePro
    },
    {
      path: '/CirclePro',
      name: 'CirclePro',
      component: CirclePro
    },
    {
      path: '/StepPro',
      name: 'StepPro',
      component: StepPro
    },
    {
      path: '/Star',
      name: 'Star',
      component: Star
    },
    /**
     * 项目常用组件
     */
    {
      path: '/TimeLine',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/CalendarScroll',
      name: 'CalendarScroll',
      component: CalendarScroll
    },
    {
      path: '/BusinessFun',
      name: 'BusinessFun',
      component: BusinessFun
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
      path: '/ImgSwiper',
      name: 'ImgSwiper',
      component: ImgSwiper
    },
    {
      path: '/FormVail',
      name: 'FormVail',
      component: FormVail
    },
    {
      path: '/WaterFall',
      name: 'WaterFall',
      component: WaterFall
    },
    {
      path: '/CalendarShow',
      name: 'CalendarShow',
      component: CalendarShow
    }
  ]
})
