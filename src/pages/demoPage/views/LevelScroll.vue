<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <level-scroll>
      <ul class="container" slot="scrollList">
        <li class="scrollList">
          <div class="scrollDiv co-bg-4"></div>
          <div class="co-tx-c co-mg-t02">体育</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-5"></div>
          <div class="co-tx-c co-mg-t02">娱乐</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-6"></div>
          <div class="co-tx-c co-mg-t02">新闻</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-7"></div>
          <div class="co-tx-c co-mg-t02">热点</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-5"></div>
          <div class="co-tx-c co-mg-t02">资讯</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-4"></div>
          <div class="co-tx-c co-mg-t02">本地</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-4"></div>
          <div class="co-tx-c co-mg-t02">体育</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-5"></div>
          <div class="co-tx-c co-mg-t02">娱乐</div>
        </li>
        <li class="scrollList">
          <div class="scrollDiv co-bg-6"></div>
          <div class="co-tx-c co-mg-t02">新闻</div>
        </li>
      </ul>
    </level-scroll>
    <div class="co-mg-t05 co-bg-2">
      <level-scroll>
        <ul class="container" slot="scrollList">
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
          <li class="scrollList"> 横向滚动内容</li>
        </ul>
      </level-scroll>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import levelScroll from '@c/levelScroll'
export default {
  name: 'SwiperList',
  components: {
    HeaderCom,
    levelScroll
  },
  data () {
    return {
      scroll: '',
      title: this.$route.params.title
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
.container {
  white-space: nowrap;
  display:inline-block
}
.scrollDiv{
  width:2.6rem;
  height:2.6rem;
  -webkit-border-radius: 100%;
  border-radius: 100%
}
.scrollList {
  padding:.6rem;
  display: inline-block;
}
</style>
