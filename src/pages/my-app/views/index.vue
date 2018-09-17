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
import ScrollList from '@c/ScrollList'
export default {
  name: 'index',
  components: {
		HeaderCom,
		ScrollList
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
  beforeCreate() {
    console.log('创建vue示例成功, 数据还没挂载')
  },
  created() {
    console.log("数据创建成功")
    console.log(this.title)
  },
  beforeMount() {
    console.log("虚拟dom创建完成，但还没有完成挂载")
  },
  mounted () {
    console.log("完成虚拟dom的挂载，数据渲染完毕")
    console.log(this.title)
    this.title = 'zhangli'
  },
  beforeUpdate() {
    console.log("更新数据，数据重新渲染之前触发")
  },
  updated() {
    console.log("数据重新渲染完毕")
  },
  beforeDestroy() {
    console.log('组件销毁前执行')
  },
  destroyed() {
    console.log('组件销毁后执行')
  },
  activated() {
    console.log('组件')
  },
  deactivated() {
    console.log('组件停用')
  },
  methods: {
    goDetail () {
      this.$router.push({name: 'detail'})
    }
  },
  
}
</script>

<style scoped>
</style>
