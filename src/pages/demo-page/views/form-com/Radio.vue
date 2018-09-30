<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-flex co-ac co-bg-0 co-bd-b co-pd-a05">
        <div class="">事故类型:</div>
        <div class="co-f1 co-flex co-je">
          <radio v-model="selectList" is-disable :list-item="list"></radio>
        </div>
      </div>
      <div class="co-flex co-ac co-bg-0 co-bd-b co-pd-a05">
        <div class="">事故类型1:</div>
        <div class="co-f1 co-flex co-je">
          <radio v-model="selectList1" :list-item="list" is-icon is-margin is-circle></radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import Radio from '@c/Radio'
export default {
  name: 'RadioCom',
  components: {
    HeaderCom,
    Radio
  },
  data () {
    return {
      title: '单选框',
      list: [
        {
          id: 0,
          name: '一般'
        },
        {
          id: 1,
          name: '普通'
        },
        {
          id: 2,
          name: '特大'
        },
      ],
      selectList: [
        {
          id: 0,
          name: '一般'
        }
      ],
      selectList1: []
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  /deep/ .co-radio {
    .co-radio-list--active {
      background-color: blue !important;
      color: #fff
    }
  }
</style>
