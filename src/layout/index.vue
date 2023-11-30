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
        <div class="message-icon" @click="openMessage">
          <el-badge :value="12" class="item">
            <img src="../assets/message_yellow.png" class="img" />
          </el-badge>
        </div>
        <div class="team-name">深圳市福田区消防救援大队</div>
        <div class="avatar">
          <!-- <img src="" class="img" /> -->
          <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
            <div class="avatar-wrapper">
              <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar">
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown">

              <el-dropdown-item divided @click.native="logout">
                <span style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <div :class="classObj" class="app-wrapper">
      <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <sidebar class="sidebar-container" />
      <div :class="{ hasTagsView: needTagsView }" class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <navbar />
          <tags-view v-if="needTagsView" />
        </div>
        <app-main />
        <!-- <right-panel v-if="showSettings">
          <settings />
        </right-panel> -->
      </div>
    </div>
    <el-dialog title="代办项目提示"  center :visible.sync="dialogVisible" width="50%">

      <el-table :data="list" border fit highlight-current-row style="z-index: 10000;position: relative;">
        <el-table-column align="center" label="ID" width="95">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="Title">
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column label="Author" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.content }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Pageviews" align="center">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState, mapGetters } from 'vuex'

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
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      list: [
        { title: '标题', content: '内容', time: '199966' },
        { title: '标题', content: '内容', time: '199966' },
        { title: '标题', content: '内容', time: '199966' }
      ],
      listLoading: false
    }
  },
  methods: {
    async openMessage() {
      console.log('1111')
      this.dialogVisible = true
    },
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
      display: flex;
      justify-content: center;
      align-items: center;
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
}</style>
