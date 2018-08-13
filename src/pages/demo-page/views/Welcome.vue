<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <welcome @enterPage = "goNext" :img-list = "imgList"></welcome>
    </div>
  </div>
</template>

<script>
import welcome1 from '../../../assets/images/welcome1.png'
import welcome2 from '../../../assets/images/welcome2.png'
import welcome3 from '../../../assets/images/welcome3.png'
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
      imgList: [welcome1, welcome2, welcome3],
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
