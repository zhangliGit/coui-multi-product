<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com isBacPortal :title="title"></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <scroll-list ref="scroll">
      <div>
        <div v-for="(item, index) in dataList" :key="index" @click="goList(item.path, item.title)" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          {{item.title}}
        </div>
      </div>
    </scroll-list>
    <div id="co-footer" v-if="false" class="co-bg-0 co-bd-t co-flex co-ac co-fs-01 co-cl-1">
      <div v-for="(item, index) in footer" :key="index" :class="['co-f1 co-flex co-ver co-ac co-jc',{'co-cl-4': current == index}]">
        <i :class="`coicon ${item.icon} co-fs-4`"></i>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
export default {
  name: 'HomePage',
  components: {
		HeaderCom,
		scrollList
  },
  data () {
    return {
      title: 'demo示例',
      dataList: [
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
          title: '列表',
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
    goList (path, title) {
      this.$router.push({name: path, params: {title}})
    }
  },
  mounted () {
		this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .demoList {
    width:33.33%;
    float: left;
  }
</style>
