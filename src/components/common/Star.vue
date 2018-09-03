<template>
  <div class="co-star co-flex co-ac">
    <div :class="[{'activeC': index < currentIndex}]" @click="getScore(index)" v-for="(item, index) in starNum" :key="index" class="co-mg-l04">
      <i :class="[{'coicon coicon-favorfill': type === 'star', 'coicon coicon-xiaolianwawa': type === 'smile'}, 'co-fs-3']"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'co-star',
  components: {
  },
  props: {
    value: [String, Number],
    starNum: {
      type: [String, Number],
      default: 5
    },
    type: {
      type: String,
      default: 'star'
    },
    starBg: {
      type: String,
      default: '#d81e06'
    }
  },
  data () {
    return {
      currentIndex: this.value
    }
  },
  methods: {
    getScore (index) {
      this.currentIndex = parseInt(index) + 1
      this.$emit('input', parseInt(index) + 1)
    }
  },
  mounted () {
    console.log(this.starNum)
  }
}
</script>
<style lang="less">
 .co-star {
   color: #ccc;
   .activeC {
     color: red
   }
 }
</style>
