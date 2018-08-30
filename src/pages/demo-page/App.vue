<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="HomePage,AjaxData">
        <router-view  class="Router co-Page co-flex co-cl-1" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    $route (to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },
  mounted () {
  }
}
</script>

<style>
.Router {
  transition: all .2s ease-in-out;
}
.slide-left-enter,
.slide-right-leave-to {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-right-enter,
.slide-left-leave-to
 {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
