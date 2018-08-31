<template>
  <div class="multi-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiperH co-flex co-wp co-pd-b1" v-for="tabIndex in tabNum" :key="tabIndex">
        <div @click="tabMenu(item.id)" class="tabList co-flex co-ver co-ac co-jc co-pd-t05" v-for="(item, index) in multiData.slice((tabIndex-1)*number, (tabIndex-1)*number+number)" :key="index">
          <div v-if="item.img" class="co-flex co-jc">
            <img :src="item.img" class="tab-img" alt="" />
          </div>
          <div v-if="item.icon"><i :class="(item.icon || 'coicon coicon-prompt') + ' co-fs-4'"></i></div>
          <div class="co-fs-01">{{item.name}}</div>
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
      default: function () {
        return []
      }
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
    }
  },
  methods: {
    tabMenu (id) {
      this.$emit('tab-menu', id)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
 .multi-swiper {
   .tabList {
    width:25%
  }
  .tab-img {
    width: 1.5rem;
    height: 1.5rem;
    display: block
  }
 }
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
   bottom:3px !important
 }
 .swiper-pagination-bullet-active {
   opacity: .5;
   background:red !important;
 }
</style>
