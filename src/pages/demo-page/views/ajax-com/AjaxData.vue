<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com :title="title" isBack></header-com>
    <scroll-list :to-top = "true" isRequest ref = "scroll" :page-size = "pageSize" pull-down-refresh  pull-up-load @show-data = "showData">
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
import ScrollList from '@c/ScrollList'
export default {
  name: 'AjaxData',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/') {
      next(vm => {
        let _self = vm
        vm.showData({
          type: 0,
          cb (len) {
            _self.$refs.scroll.upShow(len)
          }
        })
      })
    } else {
      next()
    }
  },
  components: {
    HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: '网络请求',
      page: 1,
      pageSize: 10,
      dataList: []
    }
  },
  computed: {
  },
  methods: {
    showData (obj) {
      if (obj.type === 0) {
        this.page = 1
      } else {
        this.page ++
      }
      this.$ajax({
        url: 'http://yapi.demo.qunar.com/mock/9603/getList',
        type: 'get',
        params: {
          page: this.page,
          pageSize: this.pageSize
        }
      }).then(data => {
        let result = data.data
        if (obj.type === 0) {
          this.dataList = result
        } else {
          this.dataList = this.dataList.concat(result)
        }
        obj.cb(result.length)
      }).catch((error) => {
        obj.cb()
      })
    },
    goDetail () {
      this.$router.push('/AjaxDetail') 
    },
  },
  mounted () {
    let _self = this
    this.showData({
      type: 0,
      cb (len) {
        _self.$refs.scroll.upShow(len)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headSlide{
    min-width:4rem
  }
</style>
