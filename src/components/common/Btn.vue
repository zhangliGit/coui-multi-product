<template>
    <div @click="onBtn" :class="['co-btn co-flex co-ac co-jc', {'co-radius': isCircle, 'co-inline': isLine}]" :style="styleObj">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'co-btn',
  components: {
  },
  props: {
    bgColor: {
      type: String,
      default: '#fff'
    },
    textColor: {
      type: String,
      default: '#606266'
    },
    borderColor: {
      type: String,
      default: '#dcdfe6'
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    isLine: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      styleObj: {
        background: this.bgColor,
        color: this.textColor,
        border: `1px ${this.borderColor} solid`,
      }
    }
  },
  methods: {
    onBtn () {
      this.$emit('btn')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .co-btn {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    padding: 0 1rem;
    margin: .4rem
  }
  .co-inline {
    display: inline-block
  }
  .co-radius {
    -webkit-border-radius: .3rem;
    border-radius: .3rem
  }
</style>
