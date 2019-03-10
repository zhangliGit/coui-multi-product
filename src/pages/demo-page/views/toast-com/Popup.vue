<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of">
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-bd-b">
        <div>您手机的品牌为</div>
        <div @click="popupShow" class="co-f1 co-mg-lr04 co-cl-2 co-tx-r">{{myPhone}}</div>
        <div>
          <i class="coicon coicon-enter co-fs-2"></i>
        </div>
      </div>
    </div>
    <popup-item header-title = "请选择" :is-header="true" ref="popupList" :popup-list = "popupList" @currentItem = "currentItem"></popup-item>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import PopupItem from '@c/PopupItem'
export default {
  name: 'PopupCom',
  components: {
    HeaderCom,
    PopupItem
  },
  data () {
    return {
      myPhone: '请选择',
      title: 'popup选择框',
      popupList: [
        {
          key: 1,
          value: '小米'
        },
        {
          key: 2,
          value: '苹果'
        },
        {
          key: 3,
          value: '三星'
        },
        {
          key: 4,
          value: '华为'
        }
      ],
    }
  },
  computed: {
  },
  methods: {
    popupShow () {
      this.$refs.popupList.popupShow = true
    },
    currentItem (item) {
      console.log(item);
      this.myPhone = item.value;
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>