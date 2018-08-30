<template>
  <div class="time-line co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <scroll-list>
        <time-line :time-list = "timeList"></time-line>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import TimeLine from '@c/TimeLine'
export default {
  name: 'TimeLineCom',
  components: {
    HeaderCom,
    ScrollList,
    TimeLine
  },
  data () {
    return {
      title: '打卡时间轴',
      timeList: [
        {
          id: 0,
          time: '2018-08-29',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '上',
          tag: '0'
        },
        {
          id: 1,
          time: '2018-08-28',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '上',
          tag: '2'
        },
        {
          id: 2,
          time: '2018-08-27',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '下',
          tag: '1'
        },
        {
          id: 3,
          time: '2018-08-26',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '下',
          tag: '2'
        },
        {
          id: 0,
          time: '2018-08-29',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '上',
          tag: '0'
        },
        {
          id: 1,
          time: '2018-08-28',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '上',
          tag: '2'
        },
        {
          id: 2,
          time: '2018-08-27',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '下',
          tag: '1'
        },
        {
          id: 3,
          time: '2018-08-26',
          address: '武汉市洪山区花山大道花山软件新城一期A2栋',
          tip: '下',
          tag: '2'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
