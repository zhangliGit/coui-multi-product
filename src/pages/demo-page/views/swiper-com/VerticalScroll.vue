<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'VerticalScroll',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '垂直轮播滚动',
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
