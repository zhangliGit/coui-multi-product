<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <welcome @enterPage = "goNext"></welcome>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import welcome from '@c/welcome'
export default {
  name: 'Welcome',
  components: {
    HeaderCom,
    welcome
  },
  data () {
    return {
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
