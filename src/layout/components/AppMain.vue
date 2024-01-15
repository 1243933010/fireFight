<template>
  <section class="app-main" ref="appMain">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>

    <div class="el-backtop" @click="scrollToTop" v-show="showBool">
      <i class="el-icon-caret-top"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data(){
    return{
      showBool:false
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  methods: {
    scrollToTop() {
      if(this.$refs.appMain){
        const tabsContent = this.$refs.appMain;
      tabsContent.scrollTo({
          top: 0,
          behavior: "smooth", // 使用平滑滚动效果
        });
      }
      
      },
    handleScroll(e) {
      if(e.target.scrollTop>2000){
        this.showBool = true;
       this.$forceUpdate();
      }else{
        this.showBool = false;
       this.$forceUpdate();
      }
     
      // 在这里可以执行你想要的操作
    },
    debounce: function (func, delay) {
      let timeoutId;

      return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },
  mounted() {
    // 获取 el-tabs 内容区域的实例
    if(this.$refs.appMain){
    const tabsContent = this.$refs.appMain;

    // 添加滚动事件监听器
    tabsContent.addEventListener('scroll', this.handleScroll);
  }
  },
  beforeDestroy() {
    // 移除滚动事件监听器
    const tabsContent = this.$refs.appMain;
    tabsContent.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
.el-backtop{
  position: fixed;
  right: 40px;
    bottom: 40px;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 5;
}
.app-main {
  /* 50= navbar  50  */
  margin-top: 4px;
  width: 100%;
  position: relative;
  overflow-y: auto;
  min-height: 50%;
  flex-grow: 1;
}


.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
