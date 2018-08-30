<template>
    <div v-show = "topMenuShow" class="top-menu co-flex co-ver">
      <div ref="topMenu" class="top-menu-list">
        <div class="menu-list co-bd-b co-bg-0 co-flex co-jsb" @click="chooseMenu(item.id, item.name, index)" v-for="(item, index) in menuList" :key="index">
          <div>{{item.name}}</div>
          <div v-show="currentMenu == index"><i class="coicon coicon-success_large co-cl-4"></i></div>
        </div>
      </div>
      <div class="co-f1" @click="closeMenu">
      </div>
    </div>
</template>
<script>
export default {
  name: 'topMenu',
  components: {
  },
  model: {
    prop: 'topMenuShow',
    event: 'topValue'
  },
  props: {
    menuList: {
      type: Array,
      default: function () {
        return []
      }
    },
    topMenuShow: false
  },
  data () {
    return {
      currentMenu: 0
    }
  },
  watch: {
    topMenuShow (val, old) {
      if (val) {
        setTimeout(() => {
          this.$refs.topMenu.style.height = parseInt(this.menuList.length) * 2 + 'rem'
        })
      }
    }
  },
  methods: {
    closeMenu () {
      this.$refs.topMenu.style.height = '0rem'
      this.$emit('topValue', false)
    },
    chooseMenu (id, name, index) {
      this.$refs.topMenu.style.height = '0rem'
      this.currentMenu = index
      this.$emit('topValue', false)
      this.$emit('menu-change', {id, name, index})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .top-menu {
    position: absolute;
    width:100%;
    height:1000px;
    background:rgba(0, 0, 0, .4);
    z-index:999999;
    .menu-list {
      height: 2rem;
      line-height: 2rem;
      padding: 0 .5rem;
    };
    .top-menu-list {
      height: 0rem;
      overflow: hidden;
      -webkit-transition: all .4s ease;
      transition: all .4s ease;
    }
  }
</style>
