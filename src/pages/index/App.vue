<template>
  <div id="app" class="co-page co-flex co-ver">
    <div id="co-header" class="co-header co-bg-3 co-flex co-ac">
      <div class="headSlide co-flex">
      </div>
      <div class="co-header-title co-cl-0 co-tx-c">App开发</div>
      <div class="headSlide co-flex co-je"></div>
    </div>
    <div class="co-f1">
      <div class="">
        <div class="appList co-bd-r co-pd-tb1 co-tx-c co-bg-0 co-bd-t" @click="goHtml('jsApi')">
          jsApi文档
        </div>
        <div class="appList co-bd-r co-pd-tb1 co-tx-c co-bg-0 co-bd-t" @click="goHtml('demoPage')">
          案例
        </div>
        <div class="appList co-bd-r co-pd-tb1 co-tx-c co-bg-0 co-bd-t" @click="goHtml('myApp')">
          开发
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    goHtml (name) {
      window.location.href = `${name}.html`
    }
  }
}
</script>

<style>
.appList{
  width:33.33%;
  float: left;
}
</style>
