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
import Loading from '@c/Loading'
export default {
  name: 'Loading',
  components: {
    HeaderCom,
    Loading
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
      this.$loading.alert({
        content: '加载进度完毕',
        onHide () {
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
