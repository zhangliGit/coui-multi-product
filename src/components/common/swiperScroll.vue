<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperCom co-bg-3">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-4">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-5">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'swiperScroll',
  components: {
    swiper,
    swiperSlide
  },
  props: {
  },
  data () {
    return {
      swiperOption: {
        effect: 'slide', //slide,fade,coverflow
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
   height:4rem;
 }
</style>
