<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <welcome @enterPage = "goNext" :img-list = "imgList"></welcome>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import Welcome from '@c/Welcome'
export default {
  name: 'WelcomeCom',
  components: {
    HeaderCom,
    Welcome
  },
  data () {
    return {
      imgList: ['http://xiaoyueyue.com.cn:8080/welcome.png', 'http://xiaoyueyue.com.cn:8080/welcome1.png'],
      title: this.$route.params.title
    }
  },
  computed: {
  },
  methods: {
    goNext () {
      console.log('go')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
