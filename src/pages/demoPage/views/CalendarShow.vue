<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="`${currentYear}年${currentMonth}月${currentDate}日`">
      <div slot="ritBtn" @click="showSelect">
        <i class="coicon coicon-activity co-fs-3 co-cl-0"></i>
      </div>
    </header-com>
    <scroll-list ref="scroll">
      <div>
        <calendar-show ref="calendar" @set-date = "setTitle"></calendar-show>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import CalendarShow from '@c/CalendarShow'
export default {
  name: 'CalendarShow',
  components: {
    HeaderCom,
    ScrollList,
    CalendarShow
  },
  data () {
    let newd = new Date()
    return {
      currentYear: newd.getFullYear(),
      currentMonth: newd.getMonth() + 1,
      currentDate: newd.getDate(),
    }
  },
  computed: {
  },
  methods: {
    setTitle (date) {
      this.currentYear = date.year
      this.currentMonth = date.month
      this.currentDate = date.day
      this.$loading.alert({
        content: `${date.year}-${date.month}-${date.day}`,
        onHide () {
        }
      })
    },
    showSelect () {
      let _self = this
      this.$loading.datetime({
        type: 'dateMonth',
        value: '',
        choose (value) {
          _self.currentYear = value.split('-')[0]
          _self.currentMonth = parseInt(value.split('-')[1])
          _self.$refs.calendar.setTime(value)
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
