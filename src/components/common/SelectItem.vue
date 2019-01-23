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
        let firstV = this.selectList[0];
        for (let key in firstV) {
          if (!/\d+/.test(firstV[key])) {
            this.key = key
          }
        }
        this.selectList.forEach(item => {
          arr.push(item[_self.key])
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
          let firstV = this.selectList[0];
          for (let key in firstV) {
            if (!/\d+/.test(firstV[key])) {
              return [this.selectList[0][key]]
            }
          }
        } else {
          return [this.selectList[0]]
        }
      })(),
      key: ''
    }
  },
  methods: {
    onChange (val) {
      let _self = this, itemVal, v = val[0]
      if (JSON.stringify(this.selectList).indexOf('{') > -1) {
        let res = this.selectList.filter(item => {
          return item[_self.key] === v
        })
        itemVal = res[0]
      } else {
        itemVal = v
      }
      console.log(itemVal)
      this.$emit('on-change', itemVal);
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
</style>
