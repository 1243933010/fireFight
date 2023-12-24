<template>
  <div>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
            <div style=" width: 50%;"   v-for="(item, index) in startData.bid_files_list"  :key="index">
        <UploadCom :title="item.title" :fileList="item.files"  @updateFile="(e)=>updateFile(e,item.files)" />
      </div>
        </div>
      <!-- <el-col :span="12">
        <UploadCom title="投标人签到表" :fileList="startData."  @updateFile="(e)=>updateFile(e,bidBaseProject.bid_register_file)" />
      </el-col> -->
      <!-- <el-col :span="12">
        <UploadCom title="开标记录表" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="采购人评标代表授权书" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="评标委员会签到表" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="评标守则" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="资格审查表、符合性审查表" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="评标过程资料" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="评标报告" :fileList="[]" />
      </el-col>
      <el-col :span="12">
        <UploadCom title="评标结果确认函" :fileList="[]" />
      </el-col> -->

      <BidCom /> 
  </div>
</template>

<script>
import BidCom from "./bid.vue";

import UploadCom from "./uploadCom.vue";
export default {
  components: { UploadCom, BidCom },
  data() {
    return {};
  },
  computed: {
    projectInfo() {
      return this.$store.state.thirdProjects.formInfo;
    },
    startData() {
      console.log(this.$store.state.thirdProjects.thirdData.startData,'==========')
      return this.$store.state.thirdProjects.thirdData.startData;
    },
  },
  methods: {
    updateFile(e,item,index){
        console.log(e,item,index)
        if(typeof e =='number'){
          item.files.splice(e,1)
        }else{
          item.files.push(e)
        }
        console.log(this.$store.state.thirdProjects.thirdData)
      }
  },
};
</script>
