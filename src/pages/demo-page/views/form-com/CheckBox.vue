<template>
  <div class="alert co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1">
      <div class="co-flex co-bg-0 co-bd-b co-pd-a05">
        <div class="co-pd-t05">兴趣爱好:</div>
        <div class="co-f1 co-flex co-je">
          <check-box v-model="selectList" is-icon :list-item="list"></check-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import CheckBox from '@c/CheckBox'
export default {
  name: 'RadioCom',
  components: {
    HeaderCom,
    CheckBox
  },
  data () {
    return {
      title: '复选框',
      list: [
        {
          id: 0,
          name: '运动'
        },
        {
          id: 1,
          name: '看电影'
        },
        {
          id: 2,
          name: '游戏'
        },
        {
          id: 3,
          name: '钓鱼'
        },
        {
          id: 4,
          name: '交友'
        },
        {
          id: 5,
          name: '网购商品'
        },
      ],
      selectList: [
        {
          id: 0,
          name: '运动'
        }
      ],
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
