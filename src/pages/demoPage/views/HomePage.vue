<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com :title="title"></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <scroll-list ref="scroll">
      <div>
        <div v-for="(item, index) in dataList" :key="index" @click="goList" class="co-pd-a08 co-bd-b co-bg-0">
          {{item.title}}
        </div>
      </div>
    </scroll-list>
    <div id="co-footer" class="co-bg-0 co-bd-t co-flex co-ac co-fs-01 co-cl-1">
      <div v-for="(item, index) in footer" :key="index" :class="['co-f1 co-flex co-ver co-ac co-jc',{'co-cl-4': current == index}]">
        <i :class="`coicon ${item.icon} co-fs-4`"></i>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c//HeaderCom'
import scrollList from '@c/scrollList'
export default {
  name: 'HomePage',
  components: {
		HeaderCom,
		scrollList
  },
  data () {
    return {
      title: '首页',
      dataList: [
        {
					id: 1,
					title: '渠成App'
				},
				{
					id: 2,
					title: '舟到App'
				},
				{
					id: 3,
					title: '柚客App'
				}
      ],
      current: 0,
      footer: [
        {
          icon: 'coicon-homepage',
          title: '首页'
        },
        {
          icon: 'coicon-manage',
          title: '应用'
        },
        {
          icon: 'coicon-mine',
          title: '个人中心'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goList () {
      this.$router.push('/AppMain')
    }
  },
  mounted () {
		this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
</style>
