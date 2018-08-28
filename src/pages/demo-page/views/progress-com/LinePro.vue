<template>
  <div class="toast co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-tb05">
        <line-progress precent = "80" isCircle></line-progress>
      </div>
      <div class="co-pd-tb05">
        <line-progress precent = "50"></line-progress>
      </div>
      <div class="co-pd-tb05">
        <line-progress precent = "100" isCircle></line-progress>
      </div>
      <div class="co-pd-tb05">
        <line-progress bottomBg="#333" topBg="#4a8bfc" precent = "90" isCircle></line-progress>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import LineProgress from '@c/LineProgress'
export default {
  name: 'LinePro',
  components: {
    HeaderCom,
    LineProgress
  },
  data () {
    return {
      title: '线型进度条',
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
