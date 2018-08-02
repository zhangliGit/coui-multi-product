<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <swipeout>
        <swipeout-item @click.native = "detail(item.id)"  transition-mode="follow" v-for="(item, index) in dataList" :key="index">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick(index, item.id, 'del')" type="primary">删除</swipeout-button>
            <swipeout-button @click.native="onButtonClick(index, item.id, 'change')" type="warn">编辑</swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-t co-bd-b co-pd-a05">
            <div>{{item.title}}</div>
            <div class="co-cl-3 co-mg-t04">{{item.time}}</div>
          </div>
        </swipeout-item>
      </swipeout>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
export default {
  name: 'swiperList',
  components: {
    HeaderCom,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    ScrollList
  },
  data () {
    return {
      title: this.$route.params.title,
      dataList: [
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        },
        {
          id: '1',
          title: '移动应用开发功能清单',
          time: '2018-07-04'
        },
        {
          id: '2',
          title: '项目上线通知',
          time: '2018-07-05'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    onButtonClick (index, id, type) {
      if (type === 'del') {
        this.$loading.alert({
          content: `删除id为：${id}的列表`,
        })
      } else {
        this.$loading.alert({
          content: `编辑id为：${id}的列表`,
        })
      }
    },
    detail (id) {
      console.log(id)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  }
}
</script>

<style scoped>
</style>
