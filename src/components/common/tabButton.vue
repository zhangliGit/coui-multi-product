<template>
    <div class="tab-button co-flex co-ac">
      <div class="co-f1 co-pd-lr05">
        <button-tab>
          <button-tab-item :selected="index === 0" :key="index" v-for="(item, index) in tabMenu" @on-item-click="tabClick(item)">
            <div>{{item.name}}<div class="tip-num co-flex co-ac co-jc" v-if="item.tip != 0">{{item.tip}}</div></div>
          </button-tab-item>
        </button-tab>
      </div>
    </div>
</template>
<script>
import { ButtonTab, ButtonTabItem } from 'vux'
export default {
  name: 'tabButton',
  components: {
    ButtonTab,
    ButtonTabItem
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
  .tab-button {
    height: 2.2rem;
    a {
      text-decoration: none !important
    }
    .tip-num {
      position: absolute;
      width: .9rem;
      height: .9rem;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      z-index: 99;
      background-color: #d81e06;
      color:#fff;
      right: -.3rem;
      top: -.3rem;
      font-size: .6rem
    }
  }
  .vux-button-group > a.vux-button-tab-item-first:after {
    border: 1px #d81e06 solid !important
  }
  .vux-button-group > a.vux-button-tab-item-middle:after {
    border: 1px #d81e06 solid !important;
    border-left:none !important
  }
  .vux-button-group > a.vux-button-tab-item-last:after {
    border: 1px #d81e06 solid !important;
    border-left:none !important
  }
  .vux-button-group > a.vux-button-group-current {
    background:#d81e06 !important
  }
</style>
