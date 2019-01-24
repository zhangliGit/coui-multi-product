<template>
  <div class="wrapper co-f1 co-of " ref="wrapper">
    <div ref = "scrollH">
      <div @click="goTop" v-if="toTop" class="scrollToTop co-flex co-ac co-jc" ref="scrollToTop">
        <i class="coicon coicon-jiantou co-cl-0 co-fs-4"></i>
      </div>
      <div v-show = "isFail" class="fail-dialog co-flex co-ver co-ac co-jc">
        <div>
          <i class="coicon coicon-wangluoguzhang co-cl-2" style="font-size: 4rem"></i>
        </div>
        <div class="co-fs-01 co-cl-2">数据请求失败，请重新尝试</div>
        <div class="empty-height"></div>
      </div>
      <div class="scroll-up-tip co-flex co-ac co-jc">
        <div v-if="pullDownRefresh">
          <div  v-if="!loadTag">
            <div class="co-flex co-ac co-jc">
              <div class="co-flex co-ac" ref="refreshIcon" style="-webkit-transition:all .5s ease;transition:all .5s ease; margin-top: .2rem; -webkit-transform: rotate(180deg);transform: rotate(180deg)"><i class="coicon coicon-jiantou co-fs-3"></i></div>
              <div v-if="upTag == 0" class="co-flex co-ac co-jc">
                <div class="co-flex co-ac">下拉刷新</div>
              </div>
              <div v-if="upTag == 1" class="co-flex co-ac co-jc">
                <div class="co-flex co-ac">释放刷新</div>
              </div>
            </div>
          </div>
          <div v-if = "loadTag">
              <spinner type="lines"></spinner><span class="co-pd-l02">正在刷新</span>
          </div>
        </div>
      </div>
      <div v-show="autoTag" class="scroll-nodata-pd co-flex co-ver co-ac co-jc co-cl-3">
        <i class="coicon coicon-shielding co-mg-a04 co-fs-5"></i>
				<div class="co-flex co-ac co-jc">暂无数据</div>
      </div>
      <div v-show="!isShowData">
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
  </div>
</template>

<script>
import BScroll from "better-scroll"
import { Spinner } from 'vux'
export default {
  name: "ScrollList",
  components: {
    Spinner
  },
  props: {
    isRequest: {
      type: Boolean,
      default: false
    },
    pullDownRefresh: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 15
    },
    toTop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFail: false,
      isShowData: this.isRequest,
      autoTag: false,
      upTag: 0,
      loadTag: false,
      downTag: -1 // 1加载  0 加载完毕 -1都不显示
    };
  },
  methods: {
    init(tag) {
      if (typeof tag == 'boolean') {
        this.isFail = true
      } else {
        this.isFail = false
        this.isShowData = false
        this.refresh()
      }
    },
    refresh() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    goTop() {
      this.scroll.scrollTo(0, 0, 500, 'easing')
    },
    upShow(len) {
      this.scroll.scrollTo(0, 0, 300, 'easing')
      if (typeof len === 'undefined') {
        if (!this.isShowData) {
          return
        }
        this.isFail = true
        this.scroll.finishPullDown()
        return
      } else {
        this.isFail = false
        this.isShowData = false
      }
      if (len === 0) {
        //当没有数据时显示暂无数据
        this.autoTag = true
        this.downTag = -1
      } else if (len == this.pageSize) {
        // 当初次查询数据总数为this.pageSize 说明可能还有分页数据
        this.downTag = 1
        this.autoTag = false
      } else {
        // 当数据大于0 小于this.pageNum时说明没有分页
        this.downTag = 0
        this.autoTag = false
      }
    },
    upEnd() {
      this.loadTag = false
      this.upTag = 0
      this.scroll.finishPullDown()
      this.refresh()
    },
    downEnd() {
      this.scroll.finishPullUp()
      this.refresh()
    },
    setTop () {
      let dTop = document.createElement('div')
      dTop.className = "scrollToTop"
      document.body.appendChild(dTop);
    }
  },
  mounted() {
    this.$nextTick(() => {
      //this.setTop();
      let _self = this;
      if (this.pullDownRefresh) {
        setTimeout(() => {
          this.$refs.scrollH.style.minHeight = `${(this.$refs.wrapper.offsetHeight + 1)}px`
          this.scroll.refresh()
        }, 100)
      }
      if (!this.scroll) {
        const pullDownRefresh = this.pullDownRefresh
          ? {
              threshold: 60,
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
        this.scroll.refresh()
        /*
        *监听手势y轴滑动距离
        */
        this.scroll.on("scroll", pos => {
          let scrollY = Math.round(-(pos.y));
          if (_self.toTop) {
            if (scrollY >= _self.$refs.wrapper.offsetHeight) {
              _self.$refs.scrollToTop.style.bottom = `${_self.$refs.scrollH.offsetHeight - _self.$refs.wrapper.offsetHeight - scrollY + 20}px`;
            } else {
              _self.$refs.scrollToTop.style.bottom = '100000px';
            }
          }
          if (!this.pullDownRefresh) {
            return
          }
          if (pos.y > 60) {
            try {
              this.$refs.refreshIcon.style.transform = 'rotate(0deg)'
              this.$refs.refreshIcon.style.webkitTransform = 'rotate(0deg)'
            } catch(e) {}
            this.upTag = 1;
          } else {
            try {
              this.$refs.refreshIcon.style.transform = 'rotate(180deg)'
              this.$refs.refreshIcon.style.webkitTransform = 'rotate(180deg)'
            } catch(e) {}
            this.upTag = 0
          }
        });
        /*
        *下拉刷新监听
        */
        this.scroll.on("pullingDown", () => {
          this.loadTag = true;
          let _self = this;
          this.$emit("show-data", {
            type: 0,
            cb(len) {
              _self.upShow(len)
              _self.upEnd(len)
            }
          });
        });
        /*
        *上拉刷新监听
        */
        this.scroll.on("pullingUp", () => {
          let _self = this;
          if (this.downTag === 0 || this.downTag === -1) {
            return;
          }
          this.$emit("show-data", {
            type: 1,
            cb(len) {
              if (typeof len === 'undefined') {
                return
              }
              _self.downEnd()
              if (len < this.pageSize) {
                //如果分页查询数据小于this.pageSize（为每页条数，根据自己项目设置） 说明数据已全部加载完毕
                _self.autoTag = false
                _self.downTag = 0
              } else {
                // 如果等于this.pageSize  说明还可能有分页
                _self.downTag = 1
                _self.autoTag = false
              }
            }
          });
        });
      }
    });
  }
};
</script>

<style lang = "less">
.scrollToTop {
  position:absolute;
  width:80px;
  height:80px;
  background:#444;
  z-index:9999;
  border-radius: 100%;
  left: 40px;
  bottom: 100000px;
}
.fail-dialog {
  padding-top: 3rem;
  width: 100%;
  position: absolute;
  height: 15rem;
  top: 0;
  left: 0;
  z-index: 99;
  background-color:#fff;
}
.empty-height {
  height: 5rem
}
.scroll-up-tip {
  z-index: 1;
  width: 100%;
  position: absolute;
  top: -88px;
  height: 88px;
  text-align: center;
  color: #666;
}
.scroll-nodata-pd {
  background:#fff;
  padding: 2rem 0;
}
</style>
