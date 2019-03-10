<template>
  <div class="dataDetail-com co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll" isRequest>
      <div class="co-pd-a08 co-cl-1">
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
      title: '列表详情'
    }
  },
  computed: {
    ...mapState('demoPage',[
      'dataDetail'
    ])
  },
  methods: {
    ...mapActions('demoPage', [
      'getDetail'
    ]),
  },
  mounted () {
    this.getDetail({
      cb: () => {
        this.$refs.scroll.init()
      }
    })
  }
}
</script>

<style scoped>
</style>
