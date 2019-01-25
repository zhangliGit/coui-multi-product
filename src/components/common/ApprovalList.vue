  <template>
    <div class="co-pd-t1 approval-list co-w-100">
      <div class="co-flex co-w-100" v-for="(item, index) in list" :key="index">
        <div class="tip-list">
          <div class="tipC"></div>
        </div>
        <div class="co-f1">
          <div class="co-pd-a06 dataShow">
            <div class="co-flex co-jsb co-ac">
              <div class="list-name">{{item.name}}</div>
              <div class="co-cl-2 co-fs-01">{{item.time}}</div>
            </div>
            <div class="co-cl-3 co-line-2 co-mg-t04 co-bg-2 co-pd-a05 co-te2 co-fs-01">
              {{item.opinion}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "approval-list",
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less">
.approval-list {
  .tip-list {
    border-right:1px red solid;
    width: 1rem;
    min-height: 4.8rem;
  }
  .tipC {
    position: absolute;
    top: .9rem;
    left: 28px;
    width: 20px;
    height: 20px;
    line-height: 10px;
    background: red;
    -webkit-border-radius: 100%;
    border-radius: 100%;
  }
  .dataShow {
    margin: 0 .4rem 0 .6rem;
  }
  .list-name {
    font-size: .75rem;
  }
  .sjxD {
    position: absolute;
    border-left: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
    z-index: 99;
    left: 0.9rem;
    top: 0.8rem;
    width: 0.8rem;
    height: 0.8rem;
    background: #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
