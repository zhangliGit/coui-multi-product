<template>
    <div id="co-header" class="co-header co-bg-3 co-flex co-ac">
      <div class="headSlide co-flex co-ac">
        <div v-show = "isBack || isBacPortal">
            <i @click="back" class="coicon coicon-return co-fs-3 co-cl-0"></i>
        </div>
        <slot name="lef-btn"></slot>
      </div>
      <div class="co-cl-0  co-header-title co-tx-c">{{title}}</div>
      <div class="headSlide co-flex co-je">
        <slot name="rit-btn"></slot>
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
    },
    headerBg: {
      type: String,
      defualt: '#d81e06'
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
        this.$emit('go-back')
        this.$router.goBack()
      }
    }
  }
}
</script>

<style lang = "less">
.co-header {
  .headSlide{
    min-width:4rem
  }
}
</style>
