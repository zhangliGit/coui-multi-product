<template>
    <div v-transfer-dom>
      <popup-picker :popup-title="selectTitle" :show='selectShow' v-model="selectValue"  @on-hide="selectShow = false" :data="itemList" @on-change="onChange"></popup-picker>
    </div>
</template>
<script>
import { PopupPicker } from 'vux'
export default {
  name: 'popupItem',
  components: {
    PopupPicker
  },
  props: {
    selectTitle: {
      type: String,
      default: ''
    },
    selectList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    itemList () {
      let arr = [], _self = this
      if (JSON.stringify(this.selectList).indexOf('{') > -1) {
        this.selectList.forEach(item => {
          arr.push(item.value)
        })
        arr = [arr]
      } else {
        arr.push(this.selectList);
      }
      return arr
    }
  },
  data () {
    return {
      selectShow: false,
      selectValue: (() => {
        if (JSON.stringify(this.selectList).indexOf('{') > -1) {
          return [this.selectList[0].value]
        } else {
          return [this.selectList[0]]
        }
      })()
    }
  },
  methods: {
    onChange (val) {
      let _self = this, itemVal, v = val[0]
      if (JSON.stringify(this.selectList).indexOf('{') > -1) {
        let res = this.selectList.filter(item => {
          return item.value === v
        })
        itemVal = res[0]
      } else {
        itemVal = v
      }
      this.$emit('on-change', itemVal);
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
</style>
