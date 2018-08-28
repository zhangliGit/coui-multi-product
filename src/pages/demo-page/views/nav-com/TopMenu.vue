<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-flex co-ac co-bd-b co-pd-tb05 co-bg-0">
        <div class="co-f1 co-flex co-ac co-jc co-bd-r" @click="chooseMenu(1)">
          {{tabValue1.name}}<i class="coicon coicon-unfold co-fs-2 co-pd-l02"></i>
        </div>
        <div class="co-f1 co-flex co-ac co-jc" @click="chooseMenu(2)">
          {{tabValue2.name}}<i class="coicon coicon-unfold co-fs-2 co-pd-l02"></i>
        </div>
      </div>
      <top-menu ref="topIndex" @menu-change = "menuChange" v-model="topMenuShow" :menu-list = "menuList"></top-menu>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import TopMenu from '@c/TopMenu'
export default {
  name: 'topMenuCom',
  components: {
    HeaderCom,
    TopMenu
  },
  data () {
    return {
      title: '头部下拉菜单',
      topMenuShow: false,
      menuList: [],
      currentTab: -1,
      tabValue1: {
        name: '所有',
        index: 0
      },
      tabValue2: {
        name: '所有',
        index: 0
      },
      menuList1: [
        {
          id: 0,
          name: '所有',
        },
        {
          id: 1,
          name: '我发起的'
        },
        {
          id: 2,
          name: '我执行的'
        },
        {
          id: 3,
          name: '抄送我的'
        }
      ],
      menuList2: [
        {
          id: 0,
          name: '所有',
        },
        {
          id: 1,
          name: '已审核'
        },
        {
          id: 2,
          name: '待审核'
        },
        {
          id: 3,
          name: '已驳回'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    chooseMenu (index) {
      this.currentTab = index
      this.topMenuShow = true
      if (index === 1) {
        this.menuList = this.menuList1
        this.$refs.topIndex.currentMenu = this.tabValue1.index
      } else {
        this.menuList = this.menuList2
        this.$refs.topIndex.currentMenu = this.tabValue2.index
      }
    },
    menuChange (item) {
      if (this.currentTab === 1) {
        this.tabValue1 = { name: item.name, index: item.index}
      } else {
        this.tabValue2 = { name: item.name, index: item.index}
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
