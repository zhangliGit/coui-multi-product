<template>
  <div class="time-line co-f1 co-flex co-ver">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex">
      <scroll-list>
        <approval-list :list = "dataList">
        </approval-list>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import ApprovalList from '@c/ApprovalList'
export default {
  name: 'ApprovalListCom',
  components: {
    HeaderCom,
    ScrollList,
    ApprovalList
  },
  data () {
    return {
      title: '审批流程',
      dataList: [
        {
          id: 0,
          time: '2018-08-29',
          opinion: '同意',
          name: '彭博'
        },
        {
          id: 1,
          time: '2018-08-28',
          opinion: '同意',
          name: '李伟',
        },
        {
          id: 0,
          time: '2018-08-29',
          opinion: '同意你发表的意见，我觉得很不错',
          name: '彭博'
        },
        {
          id: 1,
          time: '2018-08-28',
          opinion: '同意',
          name: '李伟',
        }
      ]
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

<style lang = "less">
</style>
