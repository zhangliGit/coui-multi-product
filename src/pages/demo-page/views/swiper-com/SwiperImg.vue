<template>
  <div class="swiper-img co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-bg-2 co-pd-a04 co-flex co-jc">
        推荐<b class="co-pd-lr02 co-cl-4" @click="swiper"> vue-awesome-swiper </b>模块
      </div>
      <swiper-scroll :swiper-img = "swiperImg"></swiper-scroll>
      <div class="co-mg-t1">
        <swiper-list></swiper-list>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import SwiperScroll from '@c/SwiperScroll'
import SwiperList from '@c/SwiperList'
export default {
  name: 'SwiperImg',
  components: {
    HeaderCom,
    SwiperScroll,
    SwiperList
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
    swiper () {
      window.open('https://github.com/surmon-china/vue-awesome-swiper')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
