<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- :collapse="isCollapse" -->
      <el-menu
        :default-active="activeMenu"
        @select="handleSelect"
        @open="open"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        active-text-color="white"
        :collapse-transition="false"
        mode="vertical"
      >
      <!-- :active-text-color="variables.menuActiveText" -->
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    
  },
  methods:{
    handleSelect(e){
      console.log(e,this.item)
    },
    open(e){
      // console.log(e,'---')
    }
  }
}
</script>
