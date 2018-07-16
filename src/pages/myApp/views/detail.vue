<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div class="co-pd-a08 co-bg-0 co-cl-1">
        <div>{{detail.title}}</div>
        <div class="co-pd-a08 co-tx-r">{{detail.time}}</div>
        <div class="co-line-3 co-text">
          {{detail.content}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{detail.content1}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{detail.content2}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{detail.content3}}
        </div>
        <div class="co-line-3 co-text co-mg-t08">
          {{detail.content}}
        </div>
        <div class="co-line-2 co-text co-mg-t08">
          {{detail.content1}}
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
export default {
  name: 'DetailCom',
  components: {
    HeaderCom,
    scrollList
  },
  data () {
    return {
      title: '详情',
      detail: {}
    }
  },
  computed: {
  },
  methods: {
    getDetail () {
      let _self = this
      this.$ajax({
        url: 'http://yapi.demo.qunar.com/mock/9603/detail',
        type: 'get'
      }).then(data => {
        this.detail = data.data
        this.$refs.scroll.refresh()
      })
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style scoped>
</style>
