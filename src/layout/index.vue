<template>
  <div class="pages">
    <div class="header">
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
      <div>11</div>
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
  }

  .header {
    display: flex;
    justify-content: space-between;

    .left-log {
      .logo {
        margin-right: 55px;
        height: 100%;
        font-size: 0;

        img {
          height: 100%;
        }
      }

      .platform-name {
        color: #FC5835;
        font-size: 24px;
      }
    }

    .avatar-team-name {
      .message-icon {
        .img {
          
        }
      }

      .team-name {

      }

      .avatar {
        .img {

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

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
