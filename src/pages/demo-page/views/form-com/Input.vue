<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-flex co-bg-0 co-pd-a05 co-bd-b co-ac">
        <div>姓名：</div>
        <div class="co-f1">
          <co-input v-model="name"></co-input>
        </div>
      </div>
      <div class="co-flex co-bg-0 co-pd-a05 co-bd-b co-ac">
        <div>年龄：</div>
        <div class="co-f1">
          <co-input v-model="address" isClear placeholder="请输入地址"></co-input>
        </div>
      </div>
      <div class="co-flex co-bg-0 co-pd-a05 co-bd-b co-ac">
        <div>性别：</div>
        <div class="co-f1">
          <co-input isRead v-model="sex"></co-input>
        </div>
      </div>
      <co-btn @btn="getData" isCircle bgColor="#">提交</co-btn>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CoBtn from '@c/Btn'
import CoInput from '@c/Input'
export default {
  name: 'Input',
  components: {
    HeaderCom,
    CoInput,
    CoBtn
  },
  data () {
    return {
      title: 'Input文本框',
      name: '',
      address: '',
      sex: '男(只读)'
    }
  },
  computed: {
  },
  methods: {
    getData () {
      this.$loading.toast(`姓名：${this.name}，地址：${this.address}，性别：${this.sex}`)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
