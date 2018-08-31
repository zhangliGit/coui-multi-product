<template>
  <div class="init co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <init-img @load-end = "loadEnd" :load-img = "loadImg" :loading-time = "loadTime"></init-img>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import InitImg from '@c/InitImg'
export default {
  name: 'Init',
  components: {
    HeaderCom,
    InitImg
  },
  data () {
    return {
      title: '加载页',
      loadTime: 5,
      loadImg: 'http://xiaoyueyue.com.cn:8080/welcome1.png'
    }
  },
  computed: {
  },
  methods: {
    loadEnd () {
      this.$loading.toast('倒计时完毕，可以跳转啦')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
