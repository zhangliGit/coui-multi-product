<template>
    <div class="loading co-f1">
      <div class="timeLoad co-fs-01" @click="loadEnd"><span class="co-fs-1 co-pd-r02">{{times}}</span>跳过</div>
      <img :src="loadImg" alt="" style="width:100%;height:100%;display:block">
    </div>
</template>
<script>
export default {
  name: 'loading',
  components: {
  },
  props: {
    loadingTime: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      loadImg: 'http://xiaoyueyue.com.cn:8080/welcome1.png',
      timeTag: '',
      times: this.loadingTime
    }
  },
  methods: {
    loadEnd () {
      this.$emit('loadEnd')
      clearInterval(this.timeTag)
    }
  },
  mounted () {
    this.timeTag = setInterval(() => {
      this.times --;
      if (this.times === 0) {
        this.$emit('loadEnd')
        clearInterval(this.timeTag)
      }
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
 .timeLoad {
   top: 1rem;
   right:.6rem;
   position: absolute;
   padding:.2rem .8rem;
   text-align: center;
   background:#f5f5f5;
   -webkit-border-radius:12px;
   border-radius:12px;
 }
</style>
