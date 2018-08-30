<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of co-pd-t1">
      <co-btn @btn = "show" isCircle bg-color = "#666666" text-color = "#fff">
        <span>上传图片</span>
      </co-btn>
      <div v-transfer-dom>
        <actionsheet v-model="actionShow" :menus="actionMenu" @on-click-menu="menuClick" show-cancel>
          <div slot="header">上传图片</div>
        </actionsheet>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CoBtn from '@c/Btn'
import { Actionsheet } from 'vux'
export default {
  name: 'ActionSheetCom',
  components: {
    HeaderCom,
    CoBtn,
    Actionsheet
  },
  data () {
    return {
      title: 'ActionSheet弹出框',
      actionShow: false,
      actionMenu : {
        paizhao: '<span class="co-cl-4">拍照<span>',
        xiangce: '<span class="co-cl-7">相册<span>'
      }
    }
  },
  computed: {
  },
  methods: {
    show () {
      this.actionShow = true
    },
    menuClick (type) {
      if (type === 'paizhao') {
        this.$loading.toast('拍照')
      } else if (type === 'xiangce') {
        this.$loading.toast('相册')
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
