<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiperH co-flex co-wp co-pd-b1" v-for="tabIndex in tabNum" :key="tabIndex">
        <div :style="{}" @click="tabMenu(item.id)" class="tabList co-flex co-ver co-ac co-jc co-pd-t05" v-for="(item, index) in multiData.slice((tabIndex-1)*number, (tabIndex-1)*number+number)" :key="index">
          <div><i class="coicon coicon-shop_fill co-fs-4"></i></div>
          <div>{{item.name}}</div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'multiSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    multiData: {
      type: Array,
      default: []
    },
    number: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    tabNum () {
      return Math.ceil(parseInt(this.multiData.length)/this.number)
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    tabMenu (id) {
      this.$emit('tabM', id)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
 .tabList {
   width:25%
 }
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
   bottom:3px !important
 }
 .swiper-pagination-bullet {
   background: red !important
 }
 .swiper-pagination span {
    opacity: 1 !important;
    background:red !important;
 }
</style>
