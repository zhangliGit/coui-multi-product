<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of">
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-bd-b">
        <div>您手机的品牌为</div>
        <div @click="selectShow" class="co-f1 co-mg-lr04 co-cl-2 co-tx-r">{{myPhone}}</div>
        <div>
          <i class="coicon coicon-enter co-fs-2"></i>
        </div>
      </div>
    </div>
    <select-item select-title = "请选择" ref="selectList" :select-list = "selectList" @on-change = "onChange"></select-item>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import SelectItem from '@c/SelectItem'
export default {
  name: 'SelectCom',
  components: {
    HeaderCom,
    SelectItem
  },
  data () {
    return {
      myPhone: '请选择',
      title: 'select选择框',
      selectList: [
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
      ]
    }
  },
  computed: {
  },
  methods: {
    selectShow () {
      this.$refs.selectList.selectShow = true
    },
    onChange (item) {
      this.myPhone = item.value;
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
