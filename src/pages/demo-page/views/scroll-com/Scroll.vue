<template>
  <div class="scroll co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <scroll-list>
        <div v-for="item in 50" :key="item" class="co-bd-b co-pd-a05 co-bg-0 co-flex co-jsb">
          我是普通滚动的列表<span>{{item}}</span>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
export default {
  name: 'Scroll',
  components: {
    HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: '普通上下滚动',
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
