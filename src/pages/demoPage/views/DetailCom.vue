<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div class="co-pd-a08 co-bg-0 co-cl-1">
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
import scrollList from '@c/scrollList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'DetailCom',
  components: {
    HeaderCom,
    scrollList
  },
  data () {
    return {
      title: '详情'
    }
  },
  computed: {
    ...mapState('demoPage', [
      'dataDetail'
    ])
  },
  methods: {
    ...mapActions('demoPage', [
      'getDetail'
    ]),
  },
  mounted () {
    let _self = this;
    this.getDetail({id: 2, cb () {
      _self.$refs.scroll.refresh()
    }})
  }
}
</script>

<style scoped>
</style>
