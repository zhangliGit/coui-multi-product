<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-pd-t1">
      <tab-menu @tab-current = "tabCurrent" :tab-menu = "tabMenu"></tab-menu>
      <div class="co-pd-a05 co-bg-2 co-mg-tb1">按钮式tab菜单栏</div>
      <tab-button @tab-current = "tabCurrent" :tab-menu = "tabMenu"></tab-button>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import TabMenu from '@c/TabMenu'
import TabButton from '@c/TabButton'
export default {
  name: 'TabMenuCom',
  components: {
    HeaderCom,
    TabMenu,
    TabButton
  },
  data () {
    return {
      title: 'Tab菜单',
      tabMenu: [
        {
          id: 0,
          name: '未完成',
          tip: 2
        },
        {
          id: 1,
          name: '已完成',
          tip: 0
        },
        {
          id: 2,
          name: '待审批',
          tip: 0
        },
        {
          id: 3,
          name: '已驳回',
          tip: 0
        },
        {
          id: 4,
          name: '已过期',
          tip: 0
        },
        {
          id: 5,
          name: '已失效',
          tip: 0
        },
      ]
    }
  },
  computed: {
  },
  methods: {
    tabCurrent (item) {
      this.$loading.toast(JSON.stringify(item))
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
