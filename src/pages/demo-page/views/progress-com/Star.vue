<template>
  <div class="star co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-pd-a05 co-flex co-ac">
        <star v-model="score"></star>
        <div class="co-mg-l04 co-fs-2">{{score}}</div>
      </div>
      <div class="co-pd-a05 co-flex co-ac">
        <star v-model="score1" type="smile"></star>
        <div class="co-mg-l04 co-fs-2">{{score1}}</div>
      </div>
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
      score: 0,
      score1: 0,
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

<style lang = "less">
</style>
