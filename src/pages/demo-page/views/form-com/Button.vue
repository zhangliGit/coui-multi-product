<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-a05 co-bg-2">
        行内按钮
      </div>
      <div class="co-pa-a05">
        <co-btn @btn = "show" isLine>默认按钮</co-btn>
        <co-btn @btn = "show" isCircle isLine bg-color = "#d81e06" text-color = "#fff">
          <span>自定义</span>
        </co-btn>
        <co-btn @btn = "show" isCircle isLine bg-color = "#66b1ff" text-color = "#fff">
          <span>自定义按钮</span>
        </co-btn>
        <co-btn @btn = "show" isCircle isLine bg-color = "#67c23a" text-color = "#fff">自定义按钮</co-btn>
      </div>
      <div class="co-pd-a05 co-bg-2">
        块级按钮
      </div>
      <div class="co-pd-a05">
        <co-btn @btn = "show">默认按钮</co-btn>
        <co-btn @btn = "show" isCircle bg-color = "#d81e06" text-color = "#fff">自定义按钮</co-btn>
        <co-btn @btn = "show" isCircle bg-color = "#66b1ff" text-color = "#fff">自定义按钮</co-btn>
        <co-btn @btn = "show" isCircle bg-color = "#67c23a" text-color = "#fff">自定义按钮</co-btn>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CoBtn from '@c/Btn'
export default {
  name: 'Button',
  components: {
    HeaderCom,
    CoBtn
  },
  data () {
    return {
      title: 'Button按钮',
    }
  },
  computed: {
  },
  methods: {
    show () {
      this.$loading.toast('您点击了我')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
