<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-cl-2 co-line-2 co-text co-pd-a05 co-bg-0">
        体育运动的种类有：田径、赛艇、羽毛球、垒球、篮球、足球、拳击、皮划艇、自行车、击剑、体操、举重、手球、曲棍球、柔道、摔跤、水上项目、现代五项、棒球、马术、跆拳道、网球、乒乓球、射击、射箭、铁人三项、帆船帆板和排球
      </div>
    </div>
    <div @click="submit" class="co-bg-0 co-pd-tb08 co-bd-t co-flex co-ac co-jc">审批</div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'RouterB',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '详情'
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.$router.push({name: 'RouterC'})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
