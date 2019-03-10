<template>
  <!-- v-on:swipeleft="changeMonth('next')" v-on:swiperight="changeMonth('prev')" -->
  <v-touch v-on:panstart="swipeStart" v-on:panmove="swipe" v-on:panend="swipeEnd" v-on:pancancel="swipeEnd">
    <div class="calendar-box" ref="body">
      <!-- calendar-header 显示周列表头 -->
      <div class="calendar-header">
        <span class="calendar-week" v-if="type==='START_SUN'">日</span>
        <span class="calendar-week">一</span>
        <span class="calendar-week">二</span>
        <span class="calendar-week">三</span>
        <span class="calendar-week">四</span>
        <span class="calendar-week">五</span>
        <span class="calendar-week">六</span>
        <span class="calendar-week" v-if="type==='START_MON'">日</span>
      </div>
      <!-- 日历列表 -->
      <div :class="['calendar-body showCal', {'showHeight' : isOpen}]" ref="calendar" id="calendar">
        <div class="calendar-row" v-for="(week, weekId) in sortDate" :key="weekId">
          <!-- <span :class="['calendar-day', {'current': currentDate === day.date, 'exception': exception.indexOf(day.date) > -1}]" v-for="(day, dayId) in week" :key="dayId">{{day ? day.date : ''}}</span> -->
          <span v-for="(day, dayId) in week" :key="dayId" :class="['calendar-day', {'current': day ? currentDate === day.date : false, 'exception': dateShow.includes(day ? day.date : '')}]"
            @click="changeDate(day)">
            <i>{{day ? day.date : ''}}</i>
            <i>{{day ? day.lunnar : ''}}</i>
          </span>
        </div>
      </div>
      <div :class="['co-flex co-ac co-jc calendar-btn']" @click="toogleCal">
        <i :class="['coicon co-fs-2', { 'coicon-unfold' : !isOpen, 'coicon-packup' : isOpen}]"></i>
      </div>
    </div>
  </v-touch>
</template>

<style>

  .calendar-box i {
    font-style: normal;
  }

  .calendar-header {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-week {
    flex: 1;
    text-align: center;
    color: #bababa;
    font-size: 0.6rem;
  }

  .calendar-body {
    background: #fff;
    transition: transform .1s linear;
  }

  .calendar-row {
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    transition: height .3s ease-out;
  }

  .calendar-day {
    width: 2.2rem;
    height:2.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 8px;
  }

  .calendar-day.current {
    width: 2.2rem;
    height: 2.2rem;
    background: #ff5a5a;
    border-radius: 50%;
    color: #fff;
  }

  .calendar-day.current i:first-child {
    font-size: .75rem;
  }

  .calendar-day.current i:last-child {
    color: #fff;
  }

  .calendar-day.exception:before {
    content: '';
    width: 8px;
    height: 8px;
    background: #d0021b;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -.4rem;
    margin-left: -4px;
  }

  .calendar-day i:last-child {
    font-size: 20px;
    color: #8a8a8a;
  }

  .calendar-btn {
    height: 1.5rem;
    background: #fff;
    border-top: 2px solid #e9e9e9;
    text-align: center;
  }

  .calendar-btn i {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform .4s linear;
  }
  .calendar-btn.active i {
    transform: rotate(180deg);
  }
  .showCal {
    height: 3.2rem;
    -webkit-transition: height .6s ease;
    transition: height .6s ease;
    overflow: hidden;
  }
</style>

<script>
var lunnarCalc = require('../../assets/js/lunnar.js')

// -> 获取本月最后一天
function getLastDate (date) {
  var newdate = new Date(date.getTime())
  var newYear = newdate.getFullYear()
  var newMonth = (newdate.getMonth()) + 1
  if (newMonth >= 12) {
    newYear += 1
    newMonth = 0
  }

  newdate.setFullYear(newYear)
  newdate.setMonth(newMonth)
  newdate.setDate(0)
  return newdate
}
// -> 获取本月第一天
function getFirstDate (date) {
  var newdate = new Date(date.getTime())
  newdate.setDate(1)
  return newdate
}
export default {
  name: 'calendar1',
  data () {
    var newd = new Date()
    return {
      dateShow: this.isDate,
      isOpen: false,
      // -> 标志日历的当前显示
      currentYear: newd.getFullYear(),
      currentMonth: newd.getMonth() + 1,
      currentDate: newd.getDate(),
      currentNow: newd,
      sortDate: []
      // -> 标志现实中的日期
    }
  },
  props: {
    isDate: {
      type: Array,
      default: function () {
        return []
      }
    },
    type: {
      type: String, // 'START_SUN START_MON' -> 从周一开始或者从周日开始
      default: 'START_SUN'
    },
    exception: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
  },
  methods: {
    // 渲染日历列表
    caleList () {
      // -> 根据 this.date -> 给出日历二位数组
      var firstDay = getFirstDate(this.currentNow)
      var lastDay = getLastDate(this.currentNow)
      var sortDate = []
      var startWeekday = firstDay.getDay() // -> 获取周几 周日为0
      var weekdayNum = lastDay.getDate() // -> 获取该月的天数
      if (this.type === 'START_MON') {
        startWeekday = startWeekday === 0 ? 7 : startWeekday
      } else {
        startWeekday += 1
      }
      var year = this.currentYear
      var month = this.currentMonth
      var flag = false
      var count = 0
      var lunnar = null
      while (true) {
        var temp = []
        for (var i = 1; i < 8; i++) {
          if (i === startWeekday) {
            flag = true // -> 开始计数
          }
          if (flag) {
            if (count < weekdayNum) {
              lunnar = lunnarCalc.solar2lunar(year, month, count + 1)
              temp.push({
                date: count + 1,
                lunnar: lunnar.Term ? lunnar.Term : lunnar.IDayCn
              })
              count += 1
            } else {
              temp.push(null)
            }
          } else {
            temp.push(null)
          }
        }
        sortDate.push(temp)
        if (count >= weekdayNum) {
          break
        }
      }
      if (this.isOpen) {
        document.getElementById('calendar').style.height =  3.2 * sortDate.length + 'rem'
      }
      this.sortDate = sortDate
    },
    toogleCal () {
      if (this.isOpen) {
        document.getElementById('calendar').style.height = '3.2rem'
      } else {
        document.getElementById('calendar').style.height =  3.2 * this.sortDate.length + 'rem'
      }
      this.isOpen = !this.isOpen
    },
    changeDate (day) {
      this.currentDate = day.date
      this.$emit('get-date', {year: this.currentYear, month: this.currentMonth, day: day.date})
    },
    swipeStart () {},
    swipe (evt) {
      this.$refs.calendar.style.transform = `translateX(${evt.deltaX}px)`
    },
    swipeEnd (evt) {
      if (evt.deltaX > 100) {
        this.$refs.calendar.style.transform = 'translateX(100%)'
        this.changeMonth('prev')
        return
      }
      if (evt.deltaX < -100) {
        this.$refs.calendar.style.transform = 'translateX(-100%)'
        this.changeMonth('next')
        return
      }
      this.$refs.calendar.style.transform = 'translateX(0px)'
    },
    changeMonth (dir) {
      var currM = this.currentMonth
      if (dir === 'prev') {
        if (currM === 1) {
          this.currentYear -= 1
          this.currentMonth = 12
        } else {
          this.currentMonth -= 1
        }
      }
      if (dir === 'next') {
        if (currM === 12) {
          this.currentYear += 1
          this.currentMonth = 1
        } else {
          this.currentMonth += 1
        }
      }
      this.currentNow.setFullYear(this.currentYear)
      this.currentNow.setMonth(this.currentMonth-1)
      this.currentNow.setDate(this.currentDate)
      this.caleList()
      this.$emit('get-date', {year: this.currentYear, month: this.currentMonth, day: this.currentDate})
      this.$refs.calendar.style.transition = 'none'
      requestAnimationFrame(() => {
        if (dir === 'prev') {
          this.$refs.calendar.style.transform = 'translateX(-100%)'
        }

        if (dir === 'next') {
          this.$refs.calendar.style.transform = 'translateX(100%)'
        }

        requestAnimationFrame(() => {
          this.$refs.calendar.style.transition = 'transform .1s linear'
          this.$refs.calendar.style.transform = 'translateX(0px)'
        })
      })
    },
    setTime (day) {
      this.currentYear = day.split('-')[0]
      this.currentMonth = parseInt(day.split('-')[1])
      this.currentNow.setFullYear(this.currentYear)
      this.currentNow.setMonth(this.currentMonth-1)
      this.currentNow.setDate(this.currentDate)
      this.caleList()
    }
  },
  mounted () {
    this.caleList()
  }
}

</script>
