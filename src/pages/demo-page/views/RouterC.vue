<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-tb1 co-bg-0 co-flex co-ac co-jc co-cl-4">
        审批成功
      </div>
      <div class="co-mg-a08 co-pd-a06 co-bg-0 co-tx-c co-br-a0 co-cl-3" @click="goList">返回列表</div>
      <div class="co-mg-a08 co-pd-a06 co-bg-0 co-tx-c co-br-a0 co-cl-3" @click="goHome">返回首页</div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'RouterC',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '审批结果'
    }
  },
  computed: {
  },
  methods: {
    goHome () {
      this.$router.goBack(-3)
    },
    goList () {
      this.$router.goBack(-2)
    } 
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
