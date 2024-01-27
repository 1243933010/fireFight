<template>
  <div style="padding-left: 30px;">
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
            <div style=" width: 50%;"   v-for="(item, index) in startData.bid_files_list"  :key="index">
        <UploadCom type="see" :title="item.title" :fileList="item.files"  @updateFile="(e)=>updateFile(e,item)" />
      </div>
        </div>
      <BidCom @updateDetail="updateDetail" /> 
  </div>
</template>

<script>
import BidCom from "./bid.vue";

import UploadCom from '../thirdProjects/editCom/uploadCom.vue'
export default {
  components: { UploadCom, BidCom },
  data() {
    return {};
  },
  computed: {
    projectInfo() {
      return this.$store.state.projectManagementAdd.formInfo;
    },
    startData() {
      return this.$store.state.projectManagementAdd.thirdData.startData;
    },
  },
  methods: {
    updateDetail(){
      this.$emit("updateDetail");
    },
    updateFile(e,item,index){
        console.log(e,item,index)
        if(typeof e =='number'){
          item.files.splice(e,1)
        }else{
          item.files.push(e)
        }
        console.log(this.$store.state.projectManagementAdd.thirdData)
      }
  },
};
</script>
