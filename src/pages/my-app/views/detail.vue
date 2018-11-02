<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div class="co-pd-a08 co-bg-0 co-cl-1">
        <div class="color-blue">2121</div>
        <x-button>按钮</x-button>
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
import ScrollList from '@c/ScrollList'
import { XButton } from 'vux'
export default {
  name: 'DetailCom',
  components: {
    HeaderCom,
    ScrollList,
    XButton
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

<style lang = "less" scoped>
  .color-blue {
    color: yellow !important;
  }
  .title-color {
    color: red
  }
  .weui-btn_default {
    background-color: blue;
  }
</style>
