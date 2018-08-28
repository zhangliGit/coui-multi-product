<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div  @click="confirm1" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">comfirm确认框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Comfirm',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'confirm确认框',
    }
  },
  computed: {
  },
  methods: {
    confirm1 () {
      let _self = this
      this.$loading.confirm({
        content: '是否删除?',
        confirm () {
          _self.$loading.toast('删除成功')
        },
        onCancel () {
          _self.$loading.toast('点击了取消')
        }
      })
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
