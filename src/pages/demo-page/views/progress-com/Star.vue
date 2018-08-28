<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <star></star>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import Star from '@c/Star'
export default {
  name: 'StarCom',
  components: {
    HeaderCom,
    Star,
  },
  data () {
    return {
      title: '评分',
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
