<template>
  <div class="line-progress">
    <div :class="['line-bottom co-of', {'isCircle': isCircle}]" :style="styleBottom">
      <div ref="progress" class="line-top co-flex co-je co-pd-r02 co-ac co-cl-0" :style="styleTop">{{showPrecent}}%</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lineProgress',
  props: {
    precent: {
      type: [Number, String],
      default: 0
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    bottomBg: {
      type: String,
      default: '#eee'
    },
    topBg: {
      type: String,
      default: '#d81e06'
    }
  },
  data () {
    return {
      proTime: '',
      showPrecent: 0,
      styleBottom: {
        backgroundColor: `${this.bottomBg}`
      },
      styleTop: {
        backgroundColor: `${this.topBg}`
      }
    }
  },
  methods: {
  },
  mounted () {
    this.proTime = setInterval(() => {
      this.showPrecent ++
      this.$refs.progress.style.width = `${this.showPrecent}%`
      if (this.showPrecent == this.precent) {
        clearInterval(this.proTime)
      }
    }, 20)
  }
}
</script>
<style lang="less">
  .line-progress {
    .line-bottom {
      height: 1rem;
      width:100%;
    }
    .isCircle {
      -webkit-border-radius: .6rem;
      border-radius: .6rem;
    }
    .line-top {
      position: absolute;
      height: 1rem;
      z-index: 99;
    }
  }
</style>
