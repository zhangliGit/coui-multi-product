<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperCom">
        <img :src="welcome1" alt="" style="width:80%;height:8rem;display:block;margin:0 auto">
      </swiper-slide>
      <swiper-slide class="swiperCom">
        <img :src="welcome2" alt="" style="width:80%;height:8rem;display:block;margin:0 auto">
      </swiper-slide>
      <swiper-slide class="swiperCom">
        <img :src="welcome3" alt="" style="width:80%;height:8rem;display:block;margin:0 auto">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import welcome1 from '../../pages/demo-page/assets/images/demo-page.welcome1.png'
import welcome2 from '../../pages/demo-page/assets/images/demo-page.welcome2.png'
import welcome3 from '../../pages/demo-page/assets/images/demo-page.welcome3.png'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'swiper3D',
  components: {
    swiper,
    swiperSlide
  },
  props: {
  },
  data () {
    return {
      welcome1,
      welcome2,
      welcome3,
      swiperOption: {
        effect: 'coverflow', //slide,fade,coverflow
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
        // resistanceRatio: 0,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000
        }
      }
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
<style lang="less" scoped>
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
   bottom: 4px !important
 }
 .swiper-pagination-bullet-active {
   background:red !important
 }
 .swiperCom {
 }
</style>
