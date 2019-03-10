<template>
  <div class="kbom-week-bar" ref="wrapper">
    <ul class="container co-bd-b co-bd-t">
      <li @click="currentDay(day.day)" ref="scroll" class="week-day" :class="['co-bd-r co-flex co-ac co-jc co-ver', {'date--active': currentIndex == day.day}]"
      v-for="day in weekDayList" :key="day.day">
        <div class="label">{{day.days}}</div>
        <div class="co-flex co-jc">
          <div class="co-mg-t02 date-day--active">{{day.day}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import getYear from 'date-fns/get_year'
import getMonth from 'date-fns/get_month'
import getDay from 'date-fns/get_day'
import getDate from 'date-fns/get_date'
import getDaysInMonth from 'date-fns/get_days_in_month'
import isEqual from 'date-fns/is_equal'
import isPast from 'date-fns/is_past'
import isFuture from 'date-fns/is_future'
import isWeekend from 'date-fns/is_weekend'
import BScroll from 'better-scroll'
const WEEK_DICT = {
  '0': '周日',
  '1': '周一',
  '2': '周二',
  '3': '周三',
  '4': '周四',
  '5': '周五',
  '6': '周六',
}
export default {
  components: {
    BScroll,
  },
  props: {
    isDay: {
      type: [String, Number],
      default: new Date().getDate()
    }
  },
  data () {
    return {
      currentIndex: this.isDay,
      weekDayList: [],
    }
  },
  beforeMount () {
    const localDate = this.getDate()
    let year = getYear(localDate)
    let month = getMonth(localDate) + 1
    let day = getDate(localDate)
    this.showMonth(year, month, day)
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true,
      })
      this.getScrollLength()
    })
  },
  methods: {
    currentDay (day) {
      this.currentIndex = day
      this.$emit('current-day', this.currentIndex)
    },
    getDate () {
      let myDate = new Date()
      return myDate.toLocaleDateString()
    },
    getScrollLength () {
      let currentDate = this.getDate()
      this.scroll.scrollToElement(this.$refs.scroll[getDate(currentDate) - 3], 0)
    },
    showMonth (year, month, day) {
      this.currentIndex = day
      const localDate = this.getDate()
      month = parseInt(month)
      let days = new Date(year,month,0).getDate()
      this.weekDayList = []
      for (let i = 1; i <= days; i++) {
        var day = year + '/' + month + '/' + i
        var obj = {
          days: WEEK_DICT[getDay(day)],
          day: i,
          status: isEqual(localDate, day) ? 'day--present' : isPast(day) ? 'day--past' : isFuture(day) ? 'day--future' : 'unknown',
          isWeekend: isWeekend(day) ? 'day--weekend' : '',
        }
        this.weekDayList.push(obj)
      }
    },
  },
}
</script>
<style>
.kbom-week-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #aeaeae;
  overflow: hidden;
}
.kbom-week-bar .container {
  white-space: nowrap;
  display: block;
  font-size: 0;
}
.kbom-week-bar .week-day {
  display: inline-block;
  text-align: center;
  padding: 0.3rem .65rem;
  box-sizing: border-box;
  font-size: 0.7rem;
  background: #fff;
  color: #ccc;
}
.kbom-week-bar .week-day .label,
.kbom-week-bar .week-day .date {
  display: block;
}
.kbom-week-bar .week-day .date {
  margin-top: 0.1867rem;
  color: #000;
  font-size: 0.7rem;
}
.kbom-week-bar .day--past:last-child {
  border: none;
}
.kbom-week-bar .day--present {
  position: relative;
  box-shadow: 0 0 0.4rem 0.1333rem rgba(150,150,150,0.4),
              0 0 0.4rem -0.1333rem rgba(150,150,150,0.4);
}
.kbom-week-bar .day--weekend .date {
  color: #d81e06;
}
.date--active {
  background-color: #d81e06 !important
}
.date--active .date-day--active {
  display: block;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  color: #d81e06;
}
</style>
