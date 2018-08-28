<template>
  <div class="kbom-week-bar" ref="wrapper">
    <ul class="container">
      <li ref="scroll" class="week-day" :class="[day.isWeekend, day.status]"
      v-for="day in weekDayList" :key="day.day">
        <span class="label">{{day.days}}</span>
        <span class="date">{{day.day}}</span>
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
  data () {
    return {
      weekDayList: [],
    }
  },
  beforeMount () {
    this.getWeekDay()
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
    getDate () {
      let myDate = new Date()
      return myDate.toLocaleDateString()
    },
    getScrollLength () {
      let currentDate = this.getDate()
      this.scroll.scrollToElement(this.$refs.scroll[getDate(currentDate) - 3], 0)
    },
    getWeekDay () {
      const localDate = this.getDate()
      let year = getYear(localDate)
      let month = getMonth(localDate) + 1
      let days = getDaysInMonth(localDate)
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
  font-size: 0.32rem;
}
.kbom-week-bar .container {
  white-space: nowrap;
  display: block;
  border-bottom: 1px solid #ccc;
  font-size: 0;
}
.kbom-week-bar .week-day {
  display: inline-block;
  text-align: center;
  padding: 0.2133rem 0.6667rem;
  box-sizing: border-box;
  font-size: 0.3rem;
  border-right: 1px solid #ccc;
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
  font-size: 0.5rem;
}
.kbom-week-bar .day--past:last-child {
  border: none;
}
.kbom-week-bar .day--present {
  position: relative;
  padding: 0.16rem 0.5867rem;
  box-shadow: 0 0 0.4rem 0.1333rem rgba(150,150,150,0.4),
              0 0 0.4rem -0.1333rem rgba(150,150,150,0.4);
}
.kbom-week-bar .day--weekend .date {
  color: red;
}
.kbom-week-bar .day--present .date {
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  background: red;
  color: #fff;
}
</style>
