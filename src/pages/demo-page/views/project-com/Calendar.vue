<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-of">
      <calendar-show :is-date = "isDate" @get-date = "getDate"></calendar-show>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CalendarShow from '@c/CalendarShow'
export default {
  name: 'CalendarCom',
  components: {
    HeaderCom,
    CalendarShow
  },
  data () {
    return {
      title: '日历',
      isDate: [1,2,3,4,5,6]
    }
  },
  computed: {
  },
  methods: {
    getDate (date) {
      this.$loading.toast(JSON.stringify(date))
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
