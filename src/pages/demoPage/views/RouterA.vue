<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1" @click="goH">
      <div class="co-pd-a06 co-bd-b co-bg-0">足球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">篮球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">兵兵球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">羽毛球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">排球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">橄榄球</div>
      <div class="co-pd-a06 co-bd-b co-bg-0">保龄球</div>
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
      title: '列表'
    }
  },
  computed: {
  },
  methods: {
    goH () {
      this.$router.push({name: 'RouterB'})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
