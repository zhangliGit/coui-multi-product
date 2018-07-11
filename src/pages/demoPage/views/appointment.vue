<template>
  <div class="co-flex co-ver co-Page">
    <div class="mg">
      <div class="co-flex co-jsb co-ac top co-pd-lr06 co-bd-b">
        <div>当前预约 <span class="co-cl-7">(2)</span></div>
        <div @click="goMorelist" class="co-cl-7">更多列表>></div>
      </div>
      <my-list :info-list="infoList" state="appointment"></my-list>
      <div @click="goAdd" class="add co-flex co-ac co-jc co-fs-1 co-cl-0">新建预约</div>
    </div>
  </div>
</template>
<script>
import myList from '@c/myList';
export default {
  components: {
    myList
  },
  data() {
    return {
      infoList: []
    };
  },
  methods: {
    goAdd() {
      this.$router.push("/addAppointment");
    },
    goMorelist() {
      this.$router.push("/appointList");
    },
  }
};
</script>

<style>
.top {
  /* padding-top: calc(88rem/40); */
  height: calc(75rem / 40);
  /* position: fixed;
    top: 0px;
    left : 0;
    z-index: 1000 */
}
.mg {
  margin-bottom: calc(210rem/40)
}
</style>
