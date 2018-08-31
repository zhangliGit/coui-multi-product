<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-pd-t1">
      <footer-com @foot-menu = "footMenu" :foot-list = "footList"></footer-com>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import FooterCom from '@c/FooterCom'
export default {
  name: 'Footer',
  components: {
    HeaderCom,
    FooterCom
  },
  data () {
    return {
      title: '底部菜单',
      footList: [
        {
          title: '首页',
          icon: 'coicon coicon-homepage',
          tip: '0'
        },
        {
          title: '工单',
          icon: 'coicon coicon-createtask',
          tip: '23'
        },
        {
          title: '我的',
          icon: 'coicon coicon-mine',
          tip: '0'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    footMenu (item) {
      console.log(item)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
