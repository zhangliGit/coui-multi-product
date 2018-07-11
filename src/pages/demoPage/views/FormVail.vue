<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div class="co-pd-a08 co-bg-0 co-cl-1">
        {{title}}
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
export default {
  name: 'FormVail',
  components: {
    HeaderCom,
    scrollList
  },
  data () {
    return {
      title: this.$route.params.title
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
</style>
