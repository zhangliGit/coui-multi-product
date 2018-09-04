<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of">
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-bd-b">
        <div>您手机的品牌为</div>
        <div @click="popupShow = true" class="co-f1 co-mg-lr04 co-cl-2 co-tx-r">{{myPhone}}</div>
        <div>
          <i class="coicon coicon-enter co-fs-2"></i>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup class="popup-fixed" v-model="popupShow">
        <popup-header left-text="取消" right-text="确认" :show-bottom-border="true" @on-click-left="popupShow = false"  @on-click-right="popupConfirm"></popup-header>
        <group class="popup-content" gutter="0">
          <radio :options="popupList ? popupList : []" v-model="popupValue"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import { Popup, PopupHeader, Group, Radio } from 'vux'
export default {
  name: 'PopupCom',
  components: {
    HeaderCom,
    Popup,
    PopupHeader,
    Group,
    Radio
  },
  data () {
    return {
      myPhone: '请选择',
      title: 'popup选择框',
      popupList: ['小米', 'iPhone', '华为', '情怀', '三星'],
      popupShow: false,
      popupValue: ''
    }
  },
  computed: {
  },
  methods: {
    popupConfirm (popupValue) {
      this.popupShow = false
      this.myPhone = this.popupValue
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
