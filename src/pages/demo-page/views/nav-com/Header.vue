<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-pd-t1">
      <header-com isBack :title="title1" header-bg = "#000000">
        <div slot="ritBtn">
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
