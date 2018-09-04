
const COUI = {
  /**
   * coui组件分类
   */
  COUI_LIST: [
    {
      id: 0,
      title: '网络请求',
      type: 'AJAX_LIST'
    },
    {
      id: 1,
      title: 'UI控件',
      type: 'UI_LIST'
    },
    {
      id: 2,
      title: '表单控件',
      type: 'FORM_LIST'
    },
    {
      id: 3,
      title: '加载引导',
      type: 'INIT_LIST'
    },
    {
      id: 4,
      title: '导航菜单',
      type: 'MENU_LIST'
    },
    {
      id: 5,
      title: '加载滑动',
      type: 'SCROLL_LIST'
    },
    {
      id: 6,
      title: '轮播滚动',
      type: 'SWIPER_LIST'
    },
    {
      id: 7,
      title: '进度条',
      type: 'LOADING_LIST'
    },
    {
      id: 8,
      title: '项目常用',
      type: 'PROJECT_LIST'
    },
    {
      id: 9,
      title: '路由跳转',
      type: 'ROUTER_LIST'
    }
  ],
  /**
   * 网络请求
   */
  AJAX_LIST: [
    {
      id: 0,
      title: '网络请求',
      path: 'ajax'
    }
  ],
  /**
   * ui控件
   */
  UI_LIST: [
    {
      id: 0,
      title: 'loading加载框',
      path: 'Loading'
    },
    {
      id: 1,
      title: 'toast提示框',
      path: 'Toast'
    },
    {
      id: 2,
      title: 'alert弹出框',
      path: 'Alert'
    },
    {
      id: 3,
      title: 'confirm确认框',
      path: 'Confirm'
    },
    {
      id: 4,
      title: 'prompt输入框',
      path: 'Prompt'
    },
    {
      id: 5,
      title: 'select选择框',
      path: 'Select'
    },
    {
      id: 6,
      title: 'popup选择框',
      path: 'Popup'
    },
    {
      id: 7,
      title: 'ActionSheet弹出框',
      path: 'ActionSheet'
    },
    {
      id: 8,
      title: 'date日期选择',
      path: 'DateTime'
    }
  ],
  /**
   * 表单控件
   */
  FORM_LIST: [
    {
      id: 0,
      title: '按钮',
      path: 'Button'
    },
    {
      id: 1,
      title: '文本框',
      path: 'Input'
    }
    // {
    //   id: 2,
    //   title: '文本区域',
    //   path: 'TextArea'
    // },
    // {
    //   id: 3,
    //   title: '单选框',
    //   path: 'Radio'
    // },
    // {
    //   id: 4,
    //   title: '复选框',
    //   path: 'CheckBox'
    // },
    // {
    //   id: 5,
    //   title: 'Switch切换',
    //   path: 'Switch'
    // }
  ],
  /**
   * 引导加载页
   */
  INIT_LIST: [
    {
      id: 0,
      title: '加载页',
      path: 'Init'
    },
    {
      id: 0,
      title: '引导页',
      path: 'Welcome'
    }
  ],
  /**
   * 导航菜单
   */
  MENU_LIST: [
    {
      id: 0,
      title: 'header头部导航',
      path: 'Header'
    },
    {
      id: 1,
      title: 'Footer底部导航',
      path: 'Footer'
    },
    {
      id: 2,
      title: '头部下拉菜单',
      path: 'TopMenu'
    },
    {
      id: 3,
      title: 'tab菜单栏',
      path: 'TabMenu'
    },
    {
      id: 4,
      title: '多列tab滑动菜单',
      path: 'MultiTab'
    }
  ],
  /**
   * 滚动滑动
   */
  SCROLL_LIST: [
    {
      id: 0,
      title: '普通上下滚动',
      path: 'Scroll'
    },
    {
      id: 1,
      title: '下拉刷新上拉加载',
      path: 'ScrollTopBot'
    },
    {
      id: 2,
      title: '下拉刷新',
      path: 'ScrollTop'
    },
    {
      id: 3,
      title: '上拉加载',
      path: 'ScrollBot'
    },
    {
      id: 4,
      title: '左右滑动',
      path: 'ScrollLefRit'
    }
  ],
  /**
   * 轮播滚动
   */
  SWIPER_LIST: [
    {
      id: 0,
      title: '轮播滚动',
      path: 'SwiperImg'
    },
    // {
    //   id: 1,
    //   title: '垂直轮播滚动',
    //   path: 'VerticalScroll'
    // }
  ],
  /**
   * 进度条
   */
  LOADING_LIST: [
    {
      id: 0,
      title: '圆圈加载进度',
      path: 'CirclePro'
    },
    {
      id: 1,
      title: '线条加载进度',
      path: 'LinePro'
    },
    // {
    //   id: 2,
    //   title: '加载步骤',
    //   path: 'StepPro'
    // },
    {
      id: 2,
      title: '评分',
      path: 'Star'
    }
  ],
  /**
   * 项目常用
   */
  PROJECT_LIST: [
    {
      id: 0,
      title: '打卡时间轴',
      path: 'ClockTime'
    },
    {
      id: 1,
      title: '日历',
      path: 'Calendar'
    },
    {
      id: 2,
      title: '滑动日历',
      path: 'CalendarScroll'
    }
  ],
  /**
   * 路由跳转
   */
  ROUTER_LIST: [
    {
      id: 0,
      title: '路由跳转',
      path: 'RouterPage'
    }
  ]
}

export default COUI
