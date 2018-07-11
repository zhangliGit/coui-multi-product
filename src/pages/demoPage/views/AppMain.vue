<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com :title="title" isBack></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <scroll-list ref="scroll" scroll-index = "appMain" pullDownRefresh pullUpLoad @show-data = "showData">
      <div>
        <div v-for="(item, index) in dataList" :key="index" @click="goDetail" class="co-pd-a08 co-bd-b co-bg-0">
          <div>{{item.title}}</div>
          <div class="co-mg-t08">{{item.time}}</div>
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AppMain',
  components: {
    HeaderCom,
    scrollList
  },
  data () {
    return {
      title: '列表',
      current: 0,
    }
  },
  computed: {
    ...mapState('demoPage', [
      'dataList'
    ])
  },
  methods: {
    ...mapActions('demoPage', [
      'showData'
    ]),
    goDetail () {
      this.$router.push('/DetailCom')
    },
    enterShow () {
      // type为0表示刷新  初次加载数据
      let _self = this;
      this.showData({type: 0, cb (len) {
        _self.$refs.scroll.upShow(len)
      }})
    }
  },
  mounted () {
    this.enterShow()
  },
  beforeRouteEnter (to, from, next) {
    if (from.path === '/') {
      next(vm => {
        vm.enterShow()
      })
    } else {
      next()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headSlide{
    min-width:4rem
  }
</style>
