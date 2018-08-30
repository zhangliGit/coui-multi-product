<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of">
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-bd-b">
        <div>您手机的品牌为</div>
        <div @click="selectShow = true" class="co-f1 co-mg-lr04 co-cl-2 co-tx-r">{{myPhone}}</div>
        <div>
          <i class="coicon coicon-enter co-fs-2"></i>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup-picker :show='selectShow' v-model="selectValue"  @on-hide="selectShow = false" :data="selectList" @on-change="onChange"></popup-picker>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import { PopupPicker } from 'vux'
export default {
  name: 'SelectCom',
  components: {
    HeaderCom,
    PopupPicker
  },
  data () {
    return {
      myPhone: '请选择',
      title: 'select选择框',
      selectList: [['小米', 'iPhone', '华为', '情怀', '三星']],
      selectValue: ['小米'],
      selectShow: false
    }
  },
  computed: {
  },
  methods: {
    onChange (value) {
      this.selectShow = false
      this.myPhone = value[0]
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
