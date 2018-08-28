<template>
  <div class="date-time co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div  @click="dateTime('datetime')" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">日期时间选择器</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div  @click="dateTime('date')" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">日期选择器</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
      <div  @click="dateTime('time')" class="co-flex co-ac co-bd-b co-bg-0 co-pd-a08">
        <div class="co-f1">时间选择器</div>
        <i class="coicon coicon-playon_fill co-fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'Prompt',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: 'date日期选择器',
    }
  },
  computed: {
  },
  methods: {
    dateTime (type) {
      let _self = this
      this.$loading.datetime({
        type: type, // date 日期   time 时间  datetime 日期时间
        value: '', //默认选中的时间 如：2018-07-12
        choose (value) {
          _self.$loading.toast(value)
        }
      })
    },
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
