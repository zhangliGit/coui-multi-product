<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-a08 co-bg-2">固定条数菜单</div>
      <tab-menu @tab-current="tabCurrent" :tab-menu = "tabMenu"></tab-menu>
      <div class="co-pd-a08 co-bg-2">不固定条数滚动菜单</div>
      <tab-menu-scroll @tab-current="tabCurrent" :tab-menu = "tabMenu1"></tab-menu-scroll>
      <div class="co-pd-a08 co-bg-2">button-tab导航菜单</div>
      <tab-button @tab-current="tabCurrent" :tab-menu = "tabMenu"></tab-button>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import tabMenu from '@c/tabMenu'
import tabMenuScroll from '@c/tabMenuScroll'
import tabButton from '@c/tabButton'
export default {
  name: 'FormVail',
  components: {
    HeaderCom,
    tabMenu,
    tabMenuScroll,
    tabButton
  },
  data () {
    return {
      title: this.$route.params.title,
      tabMenu: [
        {
          id: '1',
          name: '头条'
        },
        {
          id: '2',
          name: '世界杯'
        },
        {
          id: '3',
          name: '娱乐'
        },
        {
          id: '4',
          name: '体育头条'
        }
      ],
      tabMenu1: [
        {
          id: '1',
          name: '头条'
        },
        {
          id: '2',
          name: '世界杯'
        },
        {
          id: '3',
          name: '娱乐'
        },
        {
          id: '4',
          name: '体育头条'
        },
        {
          id: '5',
          name: '体育头条'
        },{
          id: '6',
          name: '体育头条'
        },
        {
          id: '7',
          name: '体育头条'
        },
        {
          id: '8',
          name: '体育头条'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    tabCurrent (id) {
      console.log(id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
