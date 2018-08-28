<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <swiper-scroll :swiper-img = "swiperImg"></swiper-scroll>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import SwiperScroll from '@c/SwiperScroll'
export default {
  name: 'LevelScroll',
  components: {
    HeaderCom,
    SwiperScroll
  },
  data () {
    return {
      title: '左右轮播滚动',
      swiperImg: [
        {
          id: '0',
          img: 'http://xiaoyueyue.com.cn:8080/welcome.png'
        },
        {
          id: '1',
          img: 'http://xiaoyueyue.com.cn:8080/welcome1.png'
        },
        {
          id: '2',
          img: 'http://xiaoyueyue.com.cn:8080/welcome.png'
        }
      ]
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
