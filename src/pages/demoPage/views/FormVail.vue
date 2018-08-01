<template>
  <div class="hello co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 overScroll">
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-cl-1 co-bd-b">
        <div>姓名：</div>
        <div class="co-f1">
          <input type="text" class="co-input co-bd-a co-br-a0 co-pd-l04" placeholder="请输入" />
        </div>
      </div>
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-cl-1 co-bd-b">
        <div>性别：</div>
        <div class="co-f1 co-flex co-je co-ac co-pd-l05">
            <div @click="chooseSex(index)" class="co-flex co-ac" v-for="(item, index) in radioList" :key="index">
              <div class="co-flex co-ac co-mg-lr04"  :class="{'co-cl-4': index === sexIndex}">
                <div><i :class="['coicon co-fs-3', {'coicon-success_fill': index === sexIndex}, {'coicon-success': index !== sexIndex}]"></i></div>
                <div>{{item}}</div>
              </div>
            </div>
        </div>
      </div>
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-cl-1 co-bd-b">
        <div>爱好：</div>
        <div class="co-f1 co-flex co-je co-ac co-pd-l05">
            <div @click="chooseLove(item)" class="co-flex co-ac" v-for="(item, index) in cheeckList" :key="index">
              <div class="co-flex co-ac co-mg-lr04"  :class="{'co-cl-4': corJs.arryHasVal(loveList, item)}">
                <div><i :class="['coicon co-fs-3', {'coicon-success_fill': corJs.arryHasVal(loveList, item)}, {'coicon-success': !corJs.arryHasVal(loveList, item)}]"></i></div>
                <div>{{item}}</div>
              </div>
            </div>
        </div>
      </div>
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-cl-1 co-bd-b">
        <div>年龄：</div>
        <div class="co-f1 co-flex co-je" @click="selectShow = true">
          {{age}}
        </div>
        <div>
          <i class="coicon coicon-enter co-cl-2 co-fs-1"></i>
        </div>
      </div>
      <div class="co-flex co-ac co-pd-a05 co-bg-0 co-cl-1 co-bd-b">
        <div>是否成年：</div>
        <div class="co-f1 co-flex co-je">
          <x-switch title="" v-model="switchTag" @on-change = "switchChange"></x-switch>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup-picker :show='selectShow' v-model="selectValue" popup-title="请选择" @on-hide="selectShow = false" :data="selectList" @on-change="onChange"></popup-picker>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import { XSwitch, PopupPicker } from 'vux'
export default {
  name: 'FormVail',
  components: {
    HeaderCom,
    XSwitch,
    PopupPicker
  },
  data () {
    return {
      selectValue: ['10'],
      selectList: [['10', '20', '30', '40', '50']],
      selectShow: false,
      switchTag: false,
      age: '请选择',
      sexIndex: 0,
      loveList: [],
      title: this.$route.params.title,
      radioList: ['未知', '男', '女'],
      cheeckList: ['运动', '电影', '读书']
    }
  },
  computed: {
  },
  methods: {
    chooseAge () {

    },
    chooseSex (val) {
      this.sexIndex = val
    },
    chooseLove (val) {
      if (this.corJs.arryHasVal(this.loveList, val)) {
        this.corJs.arryRemoveVal(this.loveList, val)
      } else {
        this.loveList.push(val)
      }
    },
    switchChange (value) {
      console.log(value)
    },
    onChange () {
      if (pageNum === 10) {
        let pageMum = 12
      }
      this.age = this.selectValue[0]
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
  border-color: #d81e06 !important;
  background: #d81e06 !important
}
.menu-list {
  height: 3rem;
}
</style>
