<template>
  <div class="welcome-img co-f1 co-flex co-of" :style="{ width: conW +'px'}">
    <swiper :options="swiperOption" class="co-f1 co-flex" ref="mySwiper">
      <swiper-slide class="co-flex co-f1" v-for="(item, index) in imgList" :key="index">
        <div class="co-f1">
          <img :src="item" alt="" :style="{ width: conW +'px', height: '100%', display: 'block'}">
        </div>
        <div class="goNext" @click="goNext" v-if = "index == imgList.length -1">
          立即体验
        </div>
      </swiper-slide>
      <div class="swiper-pagination" :style="{ width: conW +'px'}" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'welcomeImg',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      conW: window.screen.width,
      swiperOption: {
        effect: 'slide', //slide,fade,coverflow
        resistanceRatio: 0,
        pagination: {
          el: '.swiper-pagination'
        }
      },
    }
  },
  computed: {
  },
  methods: {
    goNext () {
      this.$emit('enterPage')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
   bottom: 20px !important
 }
 .goNext {
   width: 6rem;
   padding:.5rem;
   text-align: center;
   position: absolute;
   bottom: 3rem;
   left: 50%;
   margin-left:-3rem;
   color:#333;
   background:#fff;
   -webkit-border-radius:10px;
   border-radius: 10px;
}

</style>
