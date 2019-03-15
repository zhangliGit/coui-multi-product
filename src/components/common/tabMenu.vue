<template>
    <div class="tab-menu">
      <tab>
        <tab-item :selected="index === 0" :key="index" v-for="(item, index) in tabMenu" @on-item-click="tabClick(item)">
          <div><div class="tip-num co-flex co-ac co-jc" v-if="item.tip != 0">{{item.tip}}</div>{{item.name}}</div>
        </tab-item>
      </tab>
    </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'tabMenu',
  components: {
    Tab,
    TabItem
  },
  props: {
    tabMenu: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    tabClick (item) {
      this.$emit('tab-current', item)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .tab-menu {
    height: 44PX;
    .tip-num {
      position: absolute;
      width: .9rem;
      height: .9rem;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      z-index: 99;
      background-color: #d81e06;
      color:#fff;
      right: .2rem;
      top: .2rem;
      font-size: .6rem
    }
  }
  .scrollable {
    padding-bottom: 0px !important;
  }
  .scrollable .vux-tab-ink-bar {
    bottom: 0px !important;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    color:#d81e06 !important;
  }
  .vux-tab-ink-bar{
    background-color:#d81e06 !important
  }
</style>
