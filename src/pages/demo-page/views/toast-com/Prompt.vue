<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div  @click="prompt" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">prompt弹出输入框</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Prompt',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'prompt输入框',
    }
  },
  computed: {
  },
  methods: {
    prompt () {
      let _self = this
      this.$loading.prompt({
        value: '请输入评论', // 弹出输入框标题
        confirm (value) {
          _self.$loading.toast(value)
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
