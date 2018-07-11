<template>
    <div class="tabMenu co-flex co-ac">
      <div class="co-f1 co-pd-lr05">
        <button-tab>
          <button-tab-item :selected="index === 0" :key="index" v-for="(item, index) in tabMenu" @on-item-click="tabClick(item.id)">{{item.name}}</button-tab-item>
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
    tabClick (index) {
      this.$emit('tab-current', this.tabMenu[index-1].id)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .tabMenu {
    height: 2.2rem;
    a {
      text-decoration: none !important
    }
  }
  .vux-button-group > a.vux-button-tab-item-first:after {
    border: 1px #32659e solid !important
  }
  .vux-button-group > a.vux-button-tab-item-middle:after {
    border: 1px #32659e solid !important;
    border-left:none !important
  }
  .vux-button-group > a.vux-button-tab-item-last:after {
    border: 1px #32659e solid !important;
    border-left:none !important
  }
  .vux-button-group > a.vux-button-group-current {
    background:#32659e !important
  }
</style>
