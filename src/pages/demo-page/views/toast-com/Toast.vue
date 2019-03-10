<template>
  <div class="toast co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div opaMode @click="toast1('请输入内容', 0)" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div  class="co-f1">普通提示框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div opaMode @click="toast1('提交成功', 1)" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">操作成功提示框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div @click="toast1('至少选择一项', 2)" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">警告提示框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div @click="toast1('提交失败', 3)" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">失败提示框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Toast',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'toast提示框',
    }
  },
  computed: {
  },
  methods: {
    toast1 (title, type) {
      this.$loading.toast(title, type) 
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
