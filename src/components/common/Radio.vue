<template>
  <div class="co-radio">
    <div class="co-flex co-ac co-wp co-of co-radio-com">
      <div @click="chooseType(item)" :class="['co-radio-list', {'co-radio-list--active': JSON.stringify(list[index]).indexOf(JSON.stringify(selectList[0])) > -1}]" v-for="(item, index) in list" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'co-radio',
  components: {
  },
  props: {
    isDisable: {
      type: Boolean,
      default: false
    },
    value: Array,
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      selectList: this.value === undefined || this.value === null ? [] : this.value
    }
  },
  methods: {
    chooseType (item) {
      console.log(this.isDisable)
      if (this.isDisable) return
      this.selectList = []
      this.selectList.push(item)
      this.$emit('input', this.selectList)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
 .co-radio {
  .co-radio-com {
    -webkit-border-radius: 5px;
    border-radius: 5px
  }
  .co-radio-list {
    color: #666;
    background-color: #eee;
    padding: .3rem .6rem;
    border-right: 1px #ddd solid;
  }
  .co-radio-list:last-child {
    border-right:none;
  }
  .co-radio-list--active {
    background-color: red;
    color:#fff
  }
 }
</style>
