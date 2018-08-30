<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com isBacPortal :title="title"></header-com>
    <div class="co-f1 co-flex">
      <div class="coui-list co-flex">
        <scroll-list>
          <div @click="sideMenu(index, item.type)" :class="['coui-list-item co-flex co-ac co-jc', {'coui-list--active': couiIndex === index}]" v-for="(item, index) in COUI.COUI_LIST" :key="item.id">
            {{item.title}}
          </div>
        </scroll-list>
      </div>
      <scroll-list>
        <div>
          <div v-for="(item, index) in couiList" :key="index" @click="goList(item.path, item.title)" class="co-bd-b co-flex co-ac demo-list co-bg-0 co-te">
            <div class="co-f1">
              {{item.title}}
            </div>
            <i class="coicon coicon-enter"></i>
          </div>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import COUI from '../assets/js/coui-data'
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
export default {
  name: 'HomePage',
  components: {
		HeaderCom,
		ScrollList
  },
  data () {
    return {
      title: 'COUI',
      couiIndex: 0,
      COUI,
      couiList: COUI.AJAX_LIST,
      dataList: [
        {
					id: -3,
          title: '业务功能组件',
          path: 'BusinessFun'
        },
        {
					id: -2,
          title: '路由跳转',
          path: 'RouterPage'
        },
        {
					id: -1,
          title: '加载页',
          path: 'Loading'
        },
        {
					id: 0,
          title: '引导页',
          path: 'Welcome'
        },
        {
					id: 1,
          title: '列表加载刷新',
          path: 'AppMain'
        },
        {
					id: 2,
          title: 'ui控件',
          path: 'UiCom'
        },
        {
					id: 3,
          title: 'Tab菜单',
          path: 'TabCom'
        },
        {
					id: 4,
          title: '手势滑动列表',
          path: 'SwiperList'
        },
        {
					id: 5,
          title: '水平滚动列表',
          path: 'LevelScroll'
        },
        {
					id: 6,
          title: '轮播图',
          path: 'ImgSwiper'
        },
        {
					id: 7,
          title: '多列菜单',
          path: 'MultiSwiper'
        },
        {
					id: 8,
          title: '表单',
          path: 'FormVail'
        },
        {
					id: 9,
          title: '瀑布流',
          path: 'WaterFall'
        }
      ],
      current: 0,
      footer: [
        {
          icon: 'coicon-homepage',
          title: '首页'
        },
        {
          icon: 'coicon-manage',
          title: '应用'
        },
        {
          icon: 'coicon-mine',
          title: '个人中心'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    sideMenu (index, type) {
      this.couiIndex = index
      this.couiList = this.COUI[type]
    },
    goList (path, title) {
      this.$router.push({name: path, params: {title}})
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .coui-list {
    background:#eee;
    .coui-list-item {
      height:2.5rem;
      width: 4rem;
      border-left: 3px #eee solid;
      border-bottom: 1px #e5e5e5 solid
    }
    .coui-list--active {
      border-left: 3px #d81e06 solid;
      background:#fff;
      color:#d81e06
    }
  }
  .demo-list {
    height:2.5rem;
    padding: 0 .6rem
  }
</style>
