<template>
  <div class="header co-f1 co-flex co-ver">
    <header-com is-back :title="title"></header-com>
    <div class="co-f1 co-pd-t1">
      <header-com is-back :title="title1">
        <div slot="lef-btn">
          <span class="co-cl-0">返回</span>
        </div>
        <div slot="rit-btn">
          <i class="coicon coicon-time co-fs-2 co-cl-0"></i>
        </div>
      </header-com>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Header',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '头部菜单',
      title1: '我是头部导航'
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

<style scoped>
</style>
