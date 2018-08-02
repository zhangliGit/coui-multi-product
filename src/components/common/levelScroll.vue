<template>
  <div class="wrapper" ref="wrapper">
    <slot name="ScrollList"></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: 'levelScroll',
  components: {
    BScroll
  },
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true
      });
    })
  }
}
</script>
<style lang="less">
</style>
