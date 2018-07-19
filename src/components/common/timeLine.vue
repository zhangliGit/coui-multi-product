  <template>
    <div class="co-pd-t1">
      <div class="co-flex" v-for="(item, index) in timeList" :key="index">
        <div class="timeLine">
          <div class="tipC">{{item.tag}}</div>
        </div>
        <div class="co-f1">
          <div class="sjxD"></div>
          <div class="co-pd-a06 co-bd-a co-br-a0 co-bg-0 dataShow">
            <div class="co-flex co-jsb"><span>打卡时间：{{item.time}}</span><span class="tagD">迟到</span></div>
            <div class="co-cl-3 co-line-2 co-mg-t04 co-te2 co-fs-01">
              {{item.address}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'timeLine',
  components: {
  },
  props: {
    timeList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
 .timeLine {
   border-right: 2px red solid;
   width: 1rem;
   min-height:4.8rem;
   .tipC {
     border: 2px #ccc solid;
     position: absolute;
     top: .6rem;
     left: .3rem;
     width: 1.3rem;
     height: 1.3rem;
     line-height: 1.1rem;
     text-align: center;
     font-size: .6rem;
     color:#fff;
     background: red;
     -webkit-border-radius: 100%;
     border-radius: 100%;
   }
 }
 .dataShow {
   margin: 0 1rem 0 1.3rem
 }
 .sjxD {
   position: absolute;
   z-index: 99; 
   left: 1rem;
   top: .8rem;
   width: .8rem;
   height:.8rem;
   background: #fff;
   -webkit-transform: rotate(45deg);
   transform: rotate(45deg);
 }
 .tagD {
   background: red; 
   color:#fff; 
   padding:.1rem .2rem;
   margin-left:1rem;
   -webkit-border-radius:3px;
   border-radius:3px  
 }
</style>
