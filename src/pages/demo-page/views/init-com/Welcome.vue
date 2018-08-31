<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of co-flex">
      <guide-img guide-text="马上进入" @enter-page = "enterPage" :img-list = "imgList"></guide-img>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import GuideImg from '@c/GuideImg'
export default {
  name: 'Welcome',
  components: {
    HeaderCom,
    GuideImg
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
