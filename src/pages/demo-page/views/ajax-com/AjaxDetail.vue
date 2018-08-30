<template>
  <div class="dataDetail-com co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll" isRequest>
      <div class="co-pd-a08 co-cl-1">
        我是列表详情
        <div>{{dataDetail.title}}</div>
        <div class="co-pd-a08 co-tx-r">{{dataDetail.time}}</div>
        <div class="co-line-3 co-text">
          {{dataDetail.content}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{dataDetail.content1}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{dataDetail.content2}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{dataDetail.content3}}
        </div>
        <div class="co-line-3 co-text co-mg-t08">
          {{dataDetail.content}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{dataDetail.content1}}
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'DetailCom',
  components: {
    HeaderCom,
    ScrollList
  },
  data () {
    return {
      dataDetail: {},
      title: '列表详情'
    }
  },
  computed: {
  },
  methods: {
    getDetail (obj) {
      this.$ajax({
        url: 'http://xiaoyueyue.com.cn:8088/getDetail',
        type: 'get',
        params: {
        }
      }).then(data => {
        // this.dataDetail = data.data
        obj.cb()
      }).catch((error) => {
        obj.cb(false)
      })
    }
  },
  mounted () {
    let _self = this;
    this.getDetail({
      cb (type) {
        _self.$refs.scroll.init(type)
      }
    })
  }
}
</script>

<style scoped>
</style>
