<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title">
      <div slot="rit-btn">
        <i class="coicon coicon-clock co-cl-0 co-fs-3" @click="setMonth"></i>
      </div>
    </header-com>
    <div class="co-f1 co-of">
      <week-bar ref="weekBar" @current-day = "currentDay"></week-bar>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import WeekBar from '@c/WeekBar'
export default {
  name: 'Calendar1',
  components: {
    HeaderCom,
    WeekBar
  },
  data () {
    return {
      title: '滑动日历',
    }
  },
  computed: {
  },
  methods: {
    currentDay (day) {
      this.$loading.toast(`点击的日期是：${day}`)
    },
    setMonth () {
      let _self = this
      this.$loading.datetime({
        type: 'date', // date 日期  time 时间  datetime 日期时间
        value: '', //默认选中的时间 如：2018-07-12
        choose (value) {
          _self.title = `${value.split('-')[0]}年${value.split('-')[1]}月`
          _self.$refs.weekBar.showMonth(value.split('-')[0], value.split('-')[1], value.split('-')[2])
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
