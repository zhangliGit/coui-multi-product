<template>
  <div id="app" class="co-page co-flex co-ver">
    <div id="co-header" class="co-header co-bg-3 co-flex co-ac">
      <div class="headSlide co-flex">
      </div>
      <div class="co-header-title co-cl-0 co-tx-c">App开发</div>
      <div class="headSlide co-flex co-je"></div>
    </div>
    <div class="co-f1">
      <div class="co-bg-0" style="overflow:auto;padding-bottom: 1rem">
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('jsApi')">
          <div class="appBg co-flex co-ac co-jc">
            <i class="coicon coicon-workbench icon-wh"></i>
          </div>
          <div>jsApi文档</div>
        </div>
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('demoPage')">
          <div class="appBg co-flex co-ac co-jc">
            <i class="coicon coicon-qrcode icon-wh"></i>
          </div>
          <div>案例</div>
        </div>
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('myApp')">
          <div class="appBg co-flex co-ac co-jc">
            <i class="coicon coicon-edit icon-wh"></i>
          </div>
          <div>开发</div>
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
  width:25%;
  float: left;
  padding-top: 1rem;
  color:#333
}
.appBg {
  margin-bottom: .4rem;
  width:2.8rem;
  height:2.8rem;
  background: #eee;
  -webkit-border-radius: .6rem;
  border-radius: .6rem;
}
.icon-wh {
  font-size: 2rem
}
</style>
