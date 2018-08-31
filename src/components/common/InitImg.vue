<template>
    <div class="init-img co-f1 co-of">
      <div class="timeLoad co-fs-01" @click="loadEnd"><span class="co-fs-1 co-pd-r02">{{times}}</span>跳过</div>
      <img :src="loadImg" alt="" style="width:100%;height:100%;display:block">
    </div>
</template>
<script>
export default {
  name: 'initImg',
  components: {
  },
  props: {
    loadImg: {
      type: String,
      required: true,
      default: ''
    },
    loadingTime: {
      type: [Number, String],
      default: 3
    }
  },
  data () {
    return {
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
        this.$emit('load-end')
        clearInterval(this.timeTag)
      }
    }, 1000)
  }
}
</script>
<style lang="less">
  .init-img {
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
  }
 
</style>
