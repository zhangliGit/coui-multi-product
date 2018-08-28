<template>
  <div class="toast co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
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
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import { XCircle } from 'vux'
export default {
  name: 'CirclePro',
  components: {
    HeaderCom,
    XCircle
  },
  data () {
    return {
      percent: 60,
      title: '圆形进度条',
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
