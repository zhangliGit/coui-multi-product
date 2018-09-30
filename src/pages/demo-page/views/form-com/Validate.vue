<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-flex co-ac co-bd-b co-pd-a05">
        <div>标题</div>
        <div class="co-f1">
          <co-input v-model="form.title" class="co-br-a0"></co-input>
        </div>
      </div>
      <div class="co-flex co-ac co-bd-b co-pd-a05">
        <div>分类</div>
        <div class="co-f1 co-flex co-je">
          <radio v-model="form.type" :list-item="list"></radio>
        </div>
      </div>
      <div class="co-flex co-ac co-bd-b co-pd-a05">
        <div>爱好</div>
        <div class="co-f1 co-flex co-je" @click="selectShow = true">
          {{form.love}}
        </div>
      </div>
      <div class="co-flex co-ac co-bd-b co-pd-a05">
        <div>时间</div>
        <div class="co-f1 co-tx-r" @click="showTime">
          {{form.time}}
        </div>
      </div>
      <div class="co-mg-a05 co-pd-a05 co-br-a0 co-bg-3 co-cl-0 co-tx-c" @click="sumbitForm">
        提交
      </div>
    </div>
    <div v-transfer-dom>
      <popup-picker :show='selectShow' v-model="selectValue"  @on-hide="selectShow = false" :data="selectList" @on-change="onChange"></popup-picker>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CoInput from '@c/Input'
import { PopupPicker } from 'vux'
import Radio from '@c/Radio'
import FormData from '../../assets/js/form-data'
export default {
  name: 'Validate',
  components: {
    HeaderCom,
    CoInput,
    Radio,
    PopupPicker
  },
  data () {
    return {
      selectShow: false,
      title: '表单验证',
      form: {
        title: '',
        time: '请选择',
        type: [],
        love: '请选择'
      },
      selectValue: ['小米'],
      selectList: [['小米', 'iPhone', '华为', '情怀', '三星']],
      list: [
        {
            id: 0,
            name: '一般'
        },
        {
            id: 1,
            name: '普通'
        },
        {
            id: 2,
            name: '特大'
        }
      ],
    }
  },
  computed: {
  },
  methods: {
    showTime () {
      let _self = this
      this.$loading.datetime({
        type: 'date', // date 日期   time 时间  datetime 日期时间
        value: '', //默认选中的时间 如：2018-07-12
        choose (value) {
          _self.form.time = value
        }
      })
    },
    onChange (value) {
      this.form.love = value[0]
    },
    sumbitForm () {
      this.$validateForm(FormData.form, this.form, () => {
        this.$loading.toast('提交成功')
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
