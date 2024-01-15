<template>
    <div>
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 这里放置你的主要内容 -->
      </div>
  
      <!-- 滚动到底部时显示的图标 -->
      <div v-if="showScrollToTop" @click="scrollToTop" class="scroll-to-top-icon">
        <!-- 这里放置你的图标 -->
        <span>↑</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showScrollToTop: false,
      };
    },
    methods: {
      // 监听页面滚动事件
      handleScroll() {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        console.log(scrollY,'-----------------')
        // 当滚动到底部时显示图标
        this.showScrollToTop = scrollY > 0.8 * (scrollHeight - clientHeight);
      },
      // 点击图标时滚动到页面顶部
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 使用平滑滚动效果
        });
      },
    },
    mounted() {
        console.log(scrollY,'-----------------')
      // 监听页面滚动事件
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      // 移除滚动事件监听器
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style>
  /* 可以根据实际需要添加样式 */
  .scroll-to-top-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
  }
  </style>
  