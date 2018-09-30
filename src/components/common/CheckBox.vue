<template>
  <div class="co-check-box">
    <div class="co-flex co-ac co-wp co-of co-radio-com">
      <div @click="chooseType(item)" :class="['co-radio-list', {'co-radio-br': isCircle}, {'co-radio-list--active': JSON.stringify(selectList).indexOf(JSON.stringify(listItem[index])) > -1}]" v-for="(item, index) in listItem" :key="index">
        <i class="coicon coicon-success_fill" v-if="isIcon"></i>
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'check-box',
  components: {
  },
  props: {
    isCircle: {
      type: Boolean,
      default: true,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    value: Array,
    listItem: {
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
    chooseType (obj) {
      if (this.isDisable) return
      if (JSON.stringify(this.selectList).indexOf(JSON.stringify(obj)) > -1) {
        this.selectList = this.selectList.filter((item, index) => {
          return item.name != obj.name
        })
      } else {
        this.selectList.push(obj)
      }
      this.$emit('input', this.selectList)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
 .co-check-box {
  .co-radio-com {
    padding: 0 .5rem;
  }
  .co-radio-br {
    -webkit-border-radius: 5px;
    border-radius: 5px
  }
  .co-radio-list {
    color: #666;
    background-color: #eee;
    margin-left: .4rem;
    margin-top: .5rem;
    padding: .3rem .6rem;
  }
  .co-radio-list--active {
    background-color: red;
    color:#fff
  }
 }
</style>
