<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of co-flex">
      <welcome-img @enterPage = "enterPage" :img-list = "imgList"></welcome-img>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import WelcomeImg from '@c/WelcomeImg'
export default {
  name: 'Welcome',
  components: {
    HeaderCom,
    WelcomeImg
  },
  data () {
    return {
      title: '引导页',
      imgList: ['http://xiaoyueyue.com.cn:8080/welcome.png', 'http://xiaoyueyue.com.cn:8080/welcome1.png', 'http://xiaoyueyue.com.cn:8080/welcome.png']
    }
  },
  computed: {
  },
  methods: {
    enterPage () {
      this.$loading.toast('进入首页')
    }
  },
  mounted () {
  }
}
</script>

<style lang = "less">
.swiper-pagination-bullet {
  background: red !important
}
</style>
