<template>
    <div class="tabMenu">
      <tab>
        <tab-item :selected="index === 0" :key="index" v-for="(item, index) in tabMenu" @on-item-click="tabClick(item.id)">{{item.name}}</tab-item>
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
    tabClick (id) {
      this.$emit('tab-current', id)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .tabMenu {
    height: 2.2rem;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    color:#32659e !important;
  }
  .vux-tab-ink-bar{
    background-color:#32659e !important
  }
</style>
