<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 overScroll">
      <swiper @click.native="currentImg" v-model="autoImg" :list="dataList"  loop auto>
      </swiper>
      <div class="co-pd-a05 co-bg-2">
        <swiper auto height="20px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
          <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        </swiper>
      </div>
      <div class="co-mg-t05">
      </div>
      <div class="co-mg-t05">
        <swiper-scroll></swiper-scroll>
      </div>
      <div class="co-mg-t05">
        <swiper-list></swiper-list>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import SwiperScroll from '@c/SwiperScroll'
import SwiperList from '@c/SwiperList'
import { Swiper, SwiperItem } from 'vux'
export default {
  name: 'ImgSwiperCom',
  components: {
    HeaderCom,
    Swiper,
    SwiperItem,
    SwiperScroll,
    SwiperList,
  },
  data () {
    return {
      autoImg: 0,
      dataList: [{
        id: 1,
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua送你一朵fua送你一朵fua送你一朵fua'
      }, {
        id: 2,
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }, {
        id: 3,
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', 
        title: '送你一次旅行'
      }],
      title: this.$route.params.title
    }
  },
  computed: {
  },
  methods: {
    currentImg () {
      console.log(this.dataList[this.autoImg].id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
