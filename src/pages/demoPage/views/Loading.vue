<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <loading :loading-time = "loadingTime" @loadEnd = "loadEnd"></loading>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import loading from '@c/loading'
export default {
  name: 'Loading',
  components: {
    HeaderCom,
    loading
  },
  data () {
    return {
      loadingTime: 6,
      title: this.$route.params.title
    }
  },
  computed: {
  },
  methods: {
    loadEnd () {
      console.log(2)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
