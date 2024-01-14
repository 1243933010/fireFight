<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "PingFang SC", Arial, sans-serif;
}
div{
  /* cursor: pointer; */
}
span{
  /* cursor: progress; */
}
::v-deep .el-input{
  width: 200px !important;
}
</style>
