<template>
    <div v-show = "topShow" class="topMenu co-flex co-ver">
      <div>
        <div class="co-pd-a06 co-bd-b1 co-bg-1">已完成</div>
        <div class="co-pd-a06 co-bd-b1 co-bg-1">未完成</div>
        <div class="co-pd-a06 co-bd-b1 co-bg-1">我发起的</div>
        <div class="co-pd-a06 co-bd-b1 co-bg-1">我执行的</div>
      </div>
      <div class="co-f1" @click="closeMenu">
      </div>
    </div>
</template>
<script>
export default {
  name: 'topMenu',
  components: {
  },
  props: {
  },
  data () {
    return {
      topShow: true
    }
  },
  methods: {
    closeMenu () {
      this.topShow = false
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .topMenu {
    position: absolute;
    width:100%;
    height:100%;
    z-index:999999
  }
</style>
