<template>
    <div v-transfer-dom>
      <popup class="popup-fixed" v-model="popupShow">
        <div v-if="isHeader">
          <popup-header :title="headerTitle" left-text="取消" right-text="确认" :show-bottom-border="true" @on-click-left="popupShow = false"  @on-click-right="popupConfirm"></popup-header>
        </div>
        <group class="popup-content" gutter="0">
          <radio v-if="isHeader" :options="pList ? pList : []" v-model="popupValue"></radio>
          <radio v-if="!isHeader" :options="pList ? pList : []" v-model="popupValue" @on-change="popupConfirm"></radio>
        </group>
      </popup>
    </div>
</template>
<script>
import { Popup, PopupHeader, Group, Radio } from 'vux'
export default {
  name: 'popupItem',
  components: {
    Popup,
    PopupHeader,
    Group,
    Radio
  },
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    isHeader: {
      type: Boolean,
      default: true
    },
    popupTitle: {
      type: String,
      default: ''
    },
    popupList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    pList () {
      let arr = [], _self = this
      if (JSON.stringify(this.popupList).indexOf('{') > -1) {
        let firstV = this.popupList[0];
        for (let key in firstV) {
          if (!/\d+/.test(firstV[key])) {
            this.key = key
          }
        }
        this.popupList.forEach(item => {
          arr.push(item[_self.key])
        })
      } else {
        arr = this.popupList
      }
      return arr
    }
  },
  data () {
    return {
      popupShow: false,
      popupValue: '',
      key: ''
    }
  },
  methods: {
    popupConfirm (val) {
      this.popupShow = false
      let _self = this, itemVal, v = _self.isHeader ? _self.popupValue : val
      if (JSON.stringify(this.popupList).indexOf('{') > -1) {
        let res = this.popupList.filter(item => {
          return item[_self.key] === v
        })
        itemVal = res[0]
      } else {
        itemVal = v
      }
      this.$emit('currentItem', itemVal);
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
</style>
