<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com isBacPortal :title="title"></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <scroll-list ref="scroll">
      <div class="co-bg-0">
        <div class="co-pd-a08 co-bd-b" @click="goDetail">
          我的应用列表
        </div>
        <div class="co-pd-a08 co-bd-b" @click="goDetail">
          我的应用列表
        </div>
      </div>
    </scroll-list>
    <div id="co-footer" class="co-bg-0 co-bd-t co-flex co-ac co-fs-01 co-cl-1">
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
  name: 'index',
  components: {
		HeaderCom,
		scrollList
  },
  data () {
    return {
      title: '首页',
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
    goDetail () {
      this.$router.push({name: 'detail'})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
