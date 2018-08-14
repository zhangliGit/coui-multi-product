<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <scroll-list ref="scroll">
      <div class="co-f1">
        <top-menu :menu-list = "menuList" v-model="topMenuShow" @menu-change="menuChange"></top-menu>
        <div @click="loading" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          加载框
        </div>
        <div @click="toast('请输入内容', 0)" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          提示框(默认)
        </div>
        <div @click="toast('提交成功', 1)" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          提示框(成功)
        </div>
        <div @click="toast('请输入内容', 2)" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          提示框(警告)
        </div>
        <div @click="toast('提交失败', 3)" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          提示框(失败)
        </div>
        <div @click="alert" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          alert弹出框
        </div>
        <div @click="comfirm" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          comfirm确认框
        </div>
        <div @click="prompt" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          prompt输入框
        </div>
        <div @click="actionSheet" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          actionSheet弹出框
        </div>
        <div @click="select" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          select选择框
        </div>
        <div @click="popup" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          popup选择框
        </div>
        <div @click="dateChoose" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          日期选择
        </div>
        <div @click="timeChoose" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          时间选择
        </div>
        <div @click="datetimeChoose" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          日期时间选择
        </div>
        <div @click="showDialogTag = true" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          弹出dialog
        </div>
        <div @click="showTopMenu" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          顶部菜单
        </div>
        <div @click="$router.push({name: 'TimeLine'})" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          时间轴列表
        </div>
        <div  @click="$router.push({name: 'CalendarShow'})" class="co-pd-a08 co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te">
          日历控件  
        </div>
        <div class="co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te" style="width:100%">
          <group>
            <calendar v-model="demo1" title="日历日期选择" placeholder="请选择" disable-past @on-change="chooseCalendar"></calendar>
          </group>
        </div>
        <div class="co-bd-t co-bd-l co-bg-0 demoList co-tx-c co-te" style="width:100%">
          <group>
            <x-address @on-shadow-change="onShadowChange" @on-hide="getAddress" title="请选择地址" :list="addressData" placeholder="请选择地址"></x-address>
          </group>
        </div>
        <div class="co-flex co-ac co-pd-a1 co-jsb">
          <div style="width:5rem;height:5rem;display:block;-webkit-border-radius:100%;border-radius:100%" class="co-bg-0">
            <x-circle
              :percent="percent"
              :stroke-width="5"
              stroke-color="#04BE02">
              <span>{{ percent }}%</span>
            </x-circle>
          </div>
          <div style="width:5rem;height:5rem;display:block;-webkit-border-radius:100%;border-radius:100%" class="co-bg-0">
            <x-circle
              :percent="percent"
              :stroke-width="6"
              :trail-width="6"
              :stroke-color="['#36D1DC', '#5B86E5']">
              <span>{{ percent }}%</span>
            </x-circle>
          </div>
        </div>
        <div class="co-pd-a02">
          <x-progress :percent="percent1" :show-cancel="false"></x-progress>
        </div>
      </div>
    </scroll-list>
    <div v-transfer-dom>
      <popup-picker :show='selectShow' v-model="selectValue" popup-title="请选择" @on-hide="selectShow = false" :data="selectList" @on-change="onChange"></popup-picker>
    </div>
    <div v-transfer-dom>
      <actionsheet v-model="actionShow" :menus="actionMenu" @on-click-menu="menuClick" show-cancel>
        <div slot="header">菜单列表</div>
      </actionsheet>
    </div>
    <div v-transfer-dom>
      <popup class="popup-fixed" v-model="popupShow">
        <popup-header left-text="取消" right-text="确认" title="请选择" :show-bottom-border="true" @on-click-left="popupShow = false"  @on-click-right="popupConfirm"></popup-header>
        <group class="popup-content" gutter="0">
          <radio :options="popupList ? popupList : []" v-model="popupValue"></radio>
        </group>
      </popup>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showDialogTag" class="dialog-demo">
        <div class="img-box">
          <div class="co-pd-a05 co-flex co-jc">
            <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="width:100%;height:8rem;display:block">
          </div>
        </div>
        <div @click="showDialogTag = false" class="co-pd-a05">
          <i class="coicon coicon-close co-fs-4"></i>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import TopMenu from '@c/TopMenu'
import { Actionsheet, PopupPicker, Calendar, Popup, PopupHeader, Group, Radio, PopupRadio, XCircle, XProgress, ChinaAddressV4Data, XAddress, XDialog } from 'vux'
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'uiCom',
  components: {
    TopMenu,
    HeaderCom,
    ScrollList,
    Actionsheet,
    PopupPicker,
    Calendar,
    Popup,
    Group,
    PopupHeader,
    Radio,
    PopupRadio,
    Calendar,
    XCircle,
    XProgress,
    XAddress,
    XDialog
  },
  data () {
    return {
      topMenuShow: false,
      menuList: [
        {
          id: 100,
          name: '未完成'
        },
        {
          id: 101,
          name: '已完成'
        },
        {
          id: 102,
          name: '我执行的'
        },
        {
          id: 103,
          name: '我发起的'
        }
      ],
      showDialogTag: false,
      address: '',
      pickerAddress: '',
      addressData: ChinaAddressV4Data,
      percent: 0,
      percent1: 0,
      demo1: '',
      readonly: true,
      calendarValue: '',
      selectShow: false,
      popupShow1: false,
      selectValue: ['小米'],
      popupValue: '',
      title: 'ui控件',
      actionShow: false,
      selectList: [['小米', 'iPhone', '华为', '情怀', '三星']],
      popupList: ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
      popupShow: false,
      actionMenu : {
        del: '<span class="co-cl-4">删除<span>',
        change: '<span class="co-cl-7">编辑<span>'
      }
    }
  },
  computed: {
  },
  methods: {
    loading () {
      this.$loading.loading();
      setTimeout(() => {
        this.$loading.hideLoading()
      }, 4000)
    },
    toast (title, tag) {
      this.$loading.toast(title, tag)
    },
    alert () {
      this.$loading.alert({
        content: '提交成功',
        onHide () {
          console.log('next')
        }
      })
    },
    comfirm () {
      let _self = this
      this.$loading.comfirm({
        content: '是否删除?',
        comfirm () {
          _self.$loading.toast('删除成功', 1)
        }
      })
    },
    prompt () {
      let _self = this
      this.$loading.prompt({
        value: '请输入评论',
        comfirm (value) {
          _self.$loading.toast(value, 0)
        }
      })
    },
    actionSheet () {
      this.actionShow = true
    },
    select () {
      this.selectShow = true
    },
    menuClick (key) {
      if (key === 'del') {
        this.$loading.alert({
          content: '删除成功'
        })
      } else if (key === 'change') {
        this.$loading.alert({
          content: '修改成功',
        })
      }
    },
    onChange (value) {
      this.selectShow = false
      this.$loading.alert({
        content: value[0],
      })
    },
    dateChoose () {
      let _self = this
      this.$loading.datetime({
        type: 'date',
        value: '', //默认选中的时间 如：2018-07-12
        choose (value) {
          _self.$loading.alert({
            content: value,
          })
        }
      })
    },
    timeChoose () {
      let _self = this
      this.$loading.datetime({
        type: 'time',
        value: '', //默认选中的时间 如：10:12
        choose (value) {
          _self.$loading.alert({
            content: value,
          })
        }
      })
    },
    datetimeChoose () {
      let _self = this
      this.$loading.datetime({
        type: 'datetime',
        value: '', //默认选中的时间 如：2018-07-12 10:12
        choose (value) {
          _self.$loading.alert({
            content: value,
          })
        }
      })
    },
    popup () {
      this.popupShow = true
    },
    popupConfirm () {
      this.popupShow = false
      this.$loading.alert({
        content: this.popupValue
      })
    },
    chooseCalendar (value) {
      console.log(this.demo1)
      console.log(value)
    },
    onShadowChange (ids, names) {
      this.pickerAddress = names
    },
    getAddress (type) {
      if (type) {
        this.address = this.pickerAddress.join(' ')
        console.log(this.address)
      }
    },
    menuChange (obj) {
      this.$loading.alert({
        content: JSON.stringify(obj)
      })
    },
    showTopMenu () {
      this.topMenuShow = true
    }
  },
  mounted () {
    console.log(2)
    setTimeout(() => {
      this.percent = 80
    },1200)
    let lineLoad = setInterval(() => {
      this.percent1 ++
      if (this.percent1 == 80) {
        clearInterval(lineLoad)
      }
    }, 50)
  }
}
</script>

<style scoped>
  .demoList {
    width:33.33%;
    float: left;
  }
  .vux-no-group-title{
    margin-top:0 !important
  }
  .weui-cells {
    margin-top: 0px  !important
  }
</style>
