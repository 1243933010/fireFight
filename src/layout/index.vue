<template>
  <div class="pages">
    <div class="header">
      <div class="city-bg">
        <img src="../assets/city_bg.png" class="img" />
      </div>

      <div class="left-log">
        <div class="logo">
          <img src="../assets/logo.png" class="img" />
        </div>
        <div class="platform-name">采购业务工作管理系统</div>
      </div>

      <div class="avatar-team-name">
        <div class="message-icon">
          <img src="../assets/message_yellow.png" class="img" />
        </div>
        <div class="team-name">深圳市福田区消防救援大队</div>
        <div class="avatar">
          <img src="" class="img" />
        </div>
      </div>
    </div>

    <div :class="classObj" class="app-wrapper">
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <sidebar class="sidebar-container" />
      <div :class="{hasTagsView:needTagsView}" class="main-container">
        <div :class="{'fixed-header':fixedHeader}">
          <navbar />
          <tags-view v-if="needTagsView" />
        </div>
        <app-main />
        <!-- <right-panel v-if="showSettings">
          <settings />
        </right-panel> -->
      </div>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .pages {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    padding: 20px 50px 20px 30px;
    display: flex;
    justify-content: space-between;
    height: 85px;
    background: linear-gradient(0deg, #EEF4FA 0%, #7DBCED 100%);
    position: relative;

    .city-bg {
      width: 300px;
      position: absolute;
      top: 50%;
      right: 100px;
      transform: translateY(-50%);

      .img {
        width: 100%;
      }
    }

    .left-log {
      display: flex;
      .logo {
        margin-right: 55px;
        height: 100%;
        font-size: 0;

        img {
          height: 100%;
        }
      }

      .platform-name {
        color: #FC5535;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .avatar-team-name {
      display: flex;
      align-items: center;
      .message-icon {
        margin-right: 20px;
        width: 18px;
        font-size: 0;

        .img {
          width: 100%;
        }
      }

      .team-name {
        margin-right: 15px;
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }

      .avatar {
        border-radius: 50%;
        border: 4px solid #E5E5E5;
        width: 48px;
        height: 48px;
        overflow: hidden;
        .img {
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
      }
    }
  }

  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    min-height: 10%;
    flex-grow: 1;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
