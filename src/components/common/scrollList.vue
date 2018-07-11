<template>
  <div class="wrapper co-f1 co-of co-bg-2" ref="wrapper">
    <div>
      <div class="upTip co-flex co-ac co-jc">
        <div v-if="pullDownRefresh">
          <div  v-if="!loadTag">
            <div v-if="upTag==0">下拉刷新</div>
            <div v-if="upTag==1">释放刷新</div>
          </div>
          <div v-if="loadTag">
              <spinner type="lines"></spinner><span class="co-pd-l02">正在刷新</span>
          </div>
        </div>
      </div>
      <div v-show="autoTag" class="nodata-pd co-flex co-ver co-ac co-jc co-cl-3">
        <i class="iconfont icon-naozhong co-mg-a04 co-fs-5"></i>
				<div class="co-flex co-ac co-jc co-fs-1 ">-------- 暂无数据 --------</div>
      </div>
      <slot></slot>
      <div v-if = "pullUpLoad">
        <div v-if = "downTag !== -1" class="co-flex co-ac co-pd-tb08 co-jc co-cl-2 co-fs-01 co-bg-0">
          <div v-if="downTag === 1" class="co-flex co-ac">
           <spinner type="lines"></spinner><span class="co-pd-l02">加载更多...</span>
          </div>
          <div v-if="downTag === 0">已经到底了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Spinner } from 'vux';
export default {
  name: "scrollList",
  components: {
    Spinner
  },
  props: {
    pullDownRefresh: {
      type: Boolean,
      defalut: false
    },
    pullUpLoad: {
      type: Boolean,
      defalut: false
    }
  },
  data() {
    return {
      autoTag: false,
      upTag: 0,
      loadTag: false,
      downTag: -1 // 1加载  0 加载完毕 -1都不显示
    };
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    upShow(len) {
      this.scroll.scrollTo(0, 0, 0)
      if (typeof len === "undefined") {
        // 网络请求失败时什么都不显示
        return;
      }
      if (len === 0) {
        //当没有数据时显示暂无数据
        this.autoTag = true;
        this.downTag = -1;
      } else if (len >= 10) {
        // 当初次查询数据总数为10 说明可能还有分页数据
        this.downTag = 1;
        this.autoTag = false;
      } else {
        // 当数据大于0 小于10时说明没有分页
        this.downTag = 0;
        this.autoTag = false;
      }
    },
    upEnd() {
      this.loadTag = false;
      this.upTag = 0;
      this.scroll.finishPullDown();
      this.refresh();
    },
    downEnd() {
      this.scroll.finishPullUp();
      this.refresh();
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        const pullDownRefresh = this.pullDownRefresh
          ? {
              threshold: 80,
              stop: 50
            }
          : false;
        const pullUpLoad = this.pullUpLoad
          ? {
              threshold: 0
            }
          : false;
        /*
        * 初始化
        */
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          pullDownRefresh,
          pullUpLoad,
          scrollbar: true
        });
        this.scroll.refresh();
        /*
        *监听手势y轴滑动距离
        */
        this.scroll.on("scroll", pos => {
          if (!this.pullDownRefresh) {
            return;
          }
          if (pos.y > 80) {
            this.upTag = 1;
          } else {
            this.upTag = 0;
          }
        });
        /*
        *下拉刷新监听
        */
        this.scroll.on("pullingDown", () => {
          if (!this.pullUpLoad) {
            return;
          }
          this.loadTag = true;
          let _self = this;
          this.$emit("show-data", {
            type: 0,
            cb(len) {
              _self.upShow(len);
              _self.upEnd();
            }
          });
        });
        /*
        *上拉刷新监听
        */
        this.scroll.on("pullingUp", () => {
          if (this.downTag === 0 || this.downTag === -1) return;
          let _self = this;
          this.$emit("show-data", {
            type: 1,
            cb(len) {
              _self.downEnd();
              console.log(len)
              if (len < 10) {
                //如果分页查询数据小于10（为每页条数，根据自己项目设置） 说明数据已全部加载完毕
                _self.autoTag = false;
                _self.downTag = 0;
              } else {
                // 如果等于10  说明还可能有分页
                _self.downTag = 1;
                _self.autoTag = false;
              }
            }
          });
        });
      }
    });
  }
};
</script>

<style>
.upTip {
  z-index: 1;
  width: 100%;
  position: absolute;
  top: -44px;
  height: 44px;
  text-align: center;
  color: #333;
  background: #e6e6e6;
}
</style>
