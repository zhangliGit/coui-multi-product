<template>
    <div class="co-inp co-flex co-ac">
      <div class="co-f1 co-flex">
        <input class="co-f1" :readonly="isRead" v-model="currentValue" :placeholder="placeholder" type="text" />
      </div>
      <div class="co-mg-l04" v-show = "isClear" @click="clearText">
        <i class="coicon coicon-delete co-fs-3 co-cl-2"></i>
      </div>
    </div>
</template>
<script>
export default {
  name: 'coInput',
  components: {
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    isClear: {
      type: Boolean,
      default: false
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value === undefined || this.value === null
        ? ''
        : this.value,
    }
  },
  methods: {
    clearText () {
      this.currentValue = ''
      this.$emit("input", this.currentValue)
    }
  },
  watch: {
    currentValue (val, oldValue) {
      this.$emit("input", val)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .co-inp {
    padding: 0 .4rem;
    input {
      height: 1.8rem;
      border: none
    }
  }
</style>
