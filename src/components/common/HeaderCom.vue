<template>
    <div id="co-header" class="co-header co-bg-3 co-flex co-ac">
      <div class="headSlide co-flex">
        <slot name="letBtn"></slot>
        <div v-show = "isBack || isBacPortal" class="co-pd-r05">
            <i @click="back" class="coicon coicon-return co-fs-3 co-cl-0"></i>
        </div>
      </div>
      <div class="co-header-title co-cl-0 co-tx-c">{{title}}</div>
      <div class="headSlide co-flex co-je">
        <slot name="ritBtn"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderCom',
  props: {
    title: {
      type: String
    },
    isBack: {
      type: Boolean,
      defualt: false
    },
    isBacPortal: {
      type: Boolean,
      defualt: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      if (this.isBacPortal) {
        if (window.corNative) {
          window.corNative.closeWeb()
        } else {
          window.history.go(-1)
        }
      } else {
        this.$router.goBack()
      }
    }
  }
}
</script>

<style scoped>
.headSlide{
  min-width:4rem
}
</style>
