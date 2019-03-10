<template>
  <div class="scroll-bot co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <scroll-list :to-top="true" ref = "scroll" pull-up-load :page-size = "pageSize"  @show-data = "showData">
        <div v-for="item in dataList" :key="item" class="co-bd-b co-pd-a08 co-bg-0 co-flex co-jsb">
          我是上拉加载列表<span>{{item}}</span>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
export default {
  name: 'ScrollBot',
  components: {
    HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: '上拉加载滚动',
      dataList: 0,
      pageSize: 20,
    }
  },
  computed: {
  },
  methods: {
    showData (obj) {
      if (!obj.cb) {
        this.$loading.loading()
      }
      setTimeout(() => {
        this.$loading.hideLoading()
        if (obj.type === 1) {
          this.dataList += 20
          obj.cb(20)
        } else {
          this.dataList = 20
          this.$refs.scroll.upShow(20)
        }
      }, 2000)
    }
  },
  mounted () {
    this.showData({type:0})
  }
}
</script>

<style scoped>
</style>
