<template>
  <div class="loading co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div  @click="loading1" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">普通Loading加载提示</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div @click="loading2" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">带文字Loading加载提示</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Loading',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'loading加载框',
    }
  },
  computed: {
  },
  methods: {
    loading1 () {
      this.$loading.loading()
      setTimeout(() => {
        this.$loading.hideLoading()
      }, 3000)
    },
    loading2 () {
      this.$loading.loading('数据加载中')
      setTimeout(() => {
        this.$loading.hideLoading()
      }, 3000)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
