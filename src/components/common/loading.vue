<template>
    <div class="loading co-f1">
      <div class="timeLoad" @click="loadEnd"><span class="co-fs-1">{{times}}</span>S</div>
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
<style lang="less">
 .timeLoad {
   top: 1rem;
   right:.6rem;
   position: absolute;
   padding:.2rem .8rem;
   text-align: center;
   background:#fff;
   -webkit-border-radius:6px;
   border-radius:6px;
 }
</style>
