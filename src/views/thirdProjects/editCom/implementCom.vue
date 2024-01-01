<template>
    <div>
        <div>
            <el-form ref="formInfo" :inline="true" :disabled="true" :rules="rules" :model="formInfo" class="demo-form-inline"
              label-width="100px">
              <el-col :span="14">
                <el-form-item label="项目编号" prop="no" placeholder="请输入项目编号">
                  <el-input v-model="formInfo.no" type="number" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抽取编号" prop="choose_no" placeholder="请输入抽取编号">
                  <el-input v-model="formInfo.choose_no" type="number" />
                </el-form-item>
              </el-col>
              
              <el-col :span="14">
                <el-form-item label="抽取时间" prop="choose_time">
                  <el-date-picker value-format="yyyy-MM-dd" v-model="formInfo.choose_time" type="date"
                    placeholder="请选择抽取时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="24">
              <div class="file-form" style="padding-left: 30px;">
                <div class="file-form-item" v-for="(item, index) in formInfo.agent_receipt" :key="index">
                  <div class="left">
                    <div class="title"><span><span style="color: red;">*</span>{{ item.title }}</span></div>
                    <div class="input">
                      <el-input  type="textarea" :rows="4" v-model="item.description" placeholder="">
                      </el-input>
                    </div>
                  </div>
                  <div class="right">
                    <UploadCom title="附件" :fileList="item.files" @updateFile="(e) => updateFile(e, item, index)" />
                  </div>
                </div>

              </div>
            </el-col>
              <el-col :span="24">
                <el-form-item label="抽取采购代理机构登记" prop="files" label-width="170px">
                  <el-upload :action="uploadUrl" :headers="headers" list-type="picture-card" :limit="5"
                    :file-list="formInfo.files" :before-upload="beforeAvatarUpload" :on-success="handleSuccess">
                    <i slot="default" class="el-icon-plus" v-if="[5, 6, 8, 10].includes(projectInfo.status)"></i>
                    <div class="el-upload__tip" slot="tip">
                      只能上传图片或视频
                    </div>
                    <div slot="file" slot-scope="{file,index,list}">
                      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                      <span class="el-upload-list__item-actions" v-if="[5, 6, 8, 10].includes(projectInfo.status)">
                        <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div>
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="采购代理名称" prop="agent_id" label-width="115px">
                  <el-select v-model="formInfo.agent_id" placeholder="请选择采购代理名称">
                    <el-option v-for="(item, index) in agentArr" :key="index" :label="item.name" :value="item.id" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-form>
          </div> 
    </div>
</template>

<script>
import UploadCom from './uploadCom.vue'
import {
  projectDetail,
  agentList,
  saveImplement,
  submitImplement,
  projectAudit
} from "@/api/project";
import { getToken } from "@/utils/auth";
export default{
  components:{UploadCom},
    data(){
        return{
            rules: {
        agent_id: [
          { required: true, message: "请选择需求单位", trigger: "blur" },
        ],
        files: [{ required: true, message: "请上传图片或者视频", trigger: "blur" }],
      },
      agentArr: [],
        }
    },
    mounted() {
    this.getAgentList();
  },
  computed: {
    uploadUrl() {
      return process.env.VUE_APP_UPLOAD_API + "/user/upload_file";
    },
    headers() {
      return {
        Authorization: `Bearer ${getToken()}`,
      };
    },
    formInfo() {
      return this.$store.state.thirdProjects.ImplementationCommissionForm;
    },
    projectInfo() {
      return this.$store.state.projectManagementAdd.formInfo;
    },
  },
  methods:{
    async getAgentList() {
      let res = await agentList();
      // console.log(res)
      if (res.code == 200) {
        this.agentArr = res.data;
      }
    },
  }
}
</script>