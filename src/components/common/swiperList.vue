<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperCom co-bg-3">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-4">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-5">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-6">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-3">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-4">
      </swiper-slide>
      <swiper-slide class="swiperCom co-bg-5">
      </swiper-slide>
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
        freeMode: true,
        effect: 'slide', //slide,fade,coverflow
        slidesPerView: 3.5,
        spaceBetween: 10
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
<style lang="less">
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
