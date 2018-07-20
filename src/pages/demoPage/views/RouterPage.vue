<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-a06 co-bd-b co-bg-0" @click="goH">体育分类</div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Loading',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '首页'
    }
  },
  computed: {
  },
  methods: {
    goH () {
      this.$router.push({name: 'RouterA'})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
