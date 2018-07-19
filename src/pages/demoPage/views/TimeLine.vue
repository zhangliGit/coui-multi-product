<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div>
        <time-line :time-list = "timeList"></time-line>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
import TimeLine from '@c/TimeLine'
export default {
  name: 'DetailCom',
  components: {
    HeaderCom,
    scrollList,
    TimeLine
  },
  data () {
    return {
      title: '时间轴列表',
      timeList: [
        {
          id: 1,
          time: '2018-07-19 09:10',
          address: '武汉市洪山区花山软件新城花山软件园A区2栋武汉市洪山区花山软件新城花山软件园A区2栋武汉市洪山区花山软件新城花山软件园A区2栋武汉市洪山区花山软件新城花山软件园A区2栋',
          tag: '上'
        },
        {
          id: 2,
          time: '2018-07-19 10:10',
          address: '武汉市洪山区花山软件新城花山软件园A区2栋武汉市洪山区花山软件新城花山软件园A区2栋',
          tag: ''
        },
        {
          id: 3,
          time: '2018-07-19 18:10',
          address: '武汉市洪山区花山软件新城花山软件园A区2栋',
          tag: '下'
        },
        {
          id: 2,
          time: '2018-07-19 10:10',
          address: '武汉市洪山区花山软件新城花山软件园A区2栋武汉市洪山区花山软件新城花山软件园A区2栋',
          tag: ''
        },
        {
          id: 3,
          time: '2018-07-19 18:10',
          address: '武汉市洪山区花山软件新城花山软件园A区2栋',
          tag: '下'
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
