<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div  @click="alert1" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">普通弹出框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div @click="alert2" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">带回调弹出框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Alert',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'alert弹出框',
    }
  },
  computed: {
  },
  methods: {
    alert1 () {
      this.$loading.alert({
        content: '提交成功'
      })
    },
    alert2 () {
      let _self = this
      this.$loading.alert({
        content: '提交成功',
        onHide () {
          _self.$loading.toast('执行下一步操作')
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
