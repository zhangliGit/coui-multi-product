<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-pd-a06 co-bg-2">
      多栏切换菜单,每栏显示4条或8条数据 <span class="co-pd-lr05 co-bg-3 co-br-a1 co-cl-0" @click="setNum(4)">4</span> <span class="co-pd-lr05 co-bg-3 co-br-a1 co-cl-0" @click="setNum(8)">8</span>
    </div>
    <multi-swiper @tabM = "tabM" :number = "number" :multi-data = "multiData"></multi-swiper>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import MultiSwiper from '@c/MultiSwiper'
export default {
  name: 'MultiSwiperCom',
  components: {
    HeaderCom,
    MultiSwiper
  },
  data () {
    return {
      number: 4,
      title: '多列tab滑动菜单',
      multiData : [
        {
          id: 1,
          name: '买新房',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 2,
          name: '二手房',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 3,
          name: '找租房',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 4,
          name: '装修',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 5,
          name: '商铺',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 6,
          name: '查房价',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 7,
          name: '我要买房',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 8,
          name: '写字楼',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 9,
          name: '找小区',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 10,
          name: '短租',
          icon: 'coicon coicon-prompt'
        },
        {
          id: 11,
          name: '直播',
          icon: 'coicon coicon-prompt'
        },
      ]
    }
  },
  computed: {
  },
  methods: {
    tabM (id) {
      console.log(id)
    },
    setNum (num) {
      this.number = num
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
</style>
