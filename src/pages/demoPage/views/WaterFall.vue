<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <header-com :title="title" isBack></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <scroll-list ref="scroll">
      <div style="overflow: auto" class="co-bg-2 co-pd-b04">
        <div id="conLeft" class="waterList co-bg-2">
          <div id="waterOne"></div>
        </div>
        <div id="conRight" class="waterList co-bg-2">
          <div id="waterTwo"></div>
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import scrollList from '@c/scrollList'
import Vue from 'vue'
export default {
  name: 'WaterFall',
  components: {
    HeaderCom,
    scrollList
  },
  data () {
    return {
      title: '瀑布流',
      dataList: [
        {
          id: 1,
          title: '第一个数据'
        },
        {
          id: 2,
          title: '第二个数据'
        },
        {
          id: 3,
          title: '第三个数据'
        },
        {
          id: 4,
          title: '第四个数据'
        },
        {
          id: 5,
          title: '第五个数据'
        },
        {
          id: 6,
          title: '第六个数据'
        },
        {
          id: 7,
          title: '第七个数据'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    detail (id) {
      console.log(id)
    },
    showList () {
      let _seft = this
      for (let i =0; i < this.dataList.length; i++) {
        var listH = Math.floor(Math.random()*100 + 200);
        (function(i){
          var leftH = document.getElementById('conLeft').offsetHeight;
          var rightH = document.getElementById('conRight').offsetHeight;
          let MyComponent = Vue.extend({
            template: `<div class='co-mg-t04 co-bd-a1 co-br-a0 co-of' @click='detail(${_seft.dataList[i].id})'>
                      <div class='co-bg-4' style='width:100%; height:${listH}px'></div>
                      <div class='co-pd-a02'>${_seft.dataList[i].title}</div>
                      </div>`,
            methods:{
              detail: function(id){
                console.log(id)
              }
            }
          })
          let component = new MyComponent().$mount()
          if(leftH <= rightH){
            document.getElementById('waterOne').appendChild(component.$el)
          }else{
            document.getElementById('waterTwo').appendChild(component.$el)
          }
        })(i)         
      }
    }
  },
  mounted () {
    this.showList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .waterList {
    width:47%;
    float: left;
    overflow:hidden;
    margin-left: 2%
  }
</style>
