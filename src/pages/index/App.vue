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
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('http://xiaoyueyue.com.cn:8080/coui-dev-sit/coui.html', true)">
          <div class="appBg co-flex co-ac co-jc" style="background:#d81e06">
            <i class="coicon coicon-workbench icon-wh co-cl-0"></i>
          </div>
          <div style="color:#d81e06">COUI文档</div>
        </div>
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('demo-page')">
          <div class="appBg co-flex co-ac co-jc">
            <i class="coicon coicon-qrcode icon-wh"></i>
          </div>
          <div>app案例</div>
        </div>
        <div class="appList co-flex co-ver co-ac co-jc" @click="goHtml('my-app')">
          <div class="appBg co-flex co-ac co-jc">
            <i class="coicon coicon-edit icon-wh"></i>
          </div>
          <div>开发模板</div>
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
    goHtml (name, tag = false) {
      if (tag) {
        window.open(name)                                            
        return
      }
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
