<template>
  <div class="swiper-scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperCom" v-for="(item, index) in swiperImg" :key="index">
        <img class="swiper-img" :src="item.img" :style="styleOjb" alt="" />
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
    swiperImg: {
      type: Array,
      default: []
    },
    imgHeight: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      styleOjb: {
        height: `${this.imgHeight}rem`
      },
      swiperOption: {
        loop: true,
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
 .swiper-scroll {
   .swiper-img {
     width: 100%;
     display: block;
   }
 }
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
   bottom: 4px !important
 }
 .swiper-pagination-bullet-active {
   background:red !important
 }
</style>
