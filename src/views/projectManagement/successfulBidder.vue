<template>
  <div>
    <el-form ref="thirdForm" style="" :inline="true" :rules="thirdFormRules" :model="resultData" class="demo-form-inline"
      :disabled="![21, 24, 26].includes(projectInfo.status)" label-width="140px">

      <div style="display: flex;flex-direction: row;margin-bottom: 20px;">
        <el-form-item label="中标金额" prop="bid_success_amount" style="width: 50%;">
          <el-input v-model="resultData.bid_success_amount" placeholder="请输入中标金额">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="中标单位" prop="bid_success_unit" style="width: 50%;">
          <el-input v-model="resultData.bid_success_unit" placeholder="请输入中标单位">
          </el-input>
        </el-form-item>

      </div>
      <div style="display: flex;flex-direction: row;margin-bottom: 20px;">
        <el-form-item label="联系姓名" prop="bid_success_contact" style="width: 50%;">
          <el-input v-model="resultData.bid_success_contact" placeholder="请输入联系人">
          </el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="bid_success_phone" style="width: 50%;">
          <el-input v-model="resultData.bid_success_phone" placeholder="请输入联系电话">
          </el-input>
        </el-form-item>


      </div>
      <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
        <el-form-item label="发布中标公告日期" prop="bid_success_publish_date" style="width: 50%;">
          <el-date-picker v-model="resultData.bid_success_publish_date" value-format="yyyy-MM-dd" type="date"
            placeholder="请选择发布中标公告日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="中标结果公告链接" prop="bid_success_link" style="width: 50%;">
          <el-input v-model="resultData.bid_success_link" placeholder="请输入中标结果公告链接">
          </el-input>
        </el-form-item>
      </div>
      <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
        <el-form-item :label="`公示图`" prop="input3" style="width: 50%;">
          <el-upload :action="uploadUrl" :headers="headers" list-type="picture-card" :limit="1"
            :file-list="resultData.bid_success_photo" :on-progress="handleProgress" :on-success="handleSuccess">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file,index,list}">
              <img class="el-upload-list__item-thumbnail"
                v-if="file.url.includes('jpeg') || file.url.includes('png') || file.url.includes('jpg')" :src="file.url"
                alt="" />
              <img class="el-upload-list__item-thumbnail"
                v-if="dialogImageUrl.includes('mp4') || dialogImageUrl.includes('ogg')" src="../../assets/video.png"
                alt="" />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-delete">
                  <span class="el-upload-list__item-preview" style="margin-right: 10px;"
                    @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>

                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="中标通知书日期" prop="bid_success_notice_date" style="width: 50%;">
          <el-date-picker v-model="resultData.bid_success_notice_date" type="date" value-format="yyyy-MM-dd"
            placeholder="请选择开评标日期">
          </el-date-picker>
        </el-form-item>


      </div>
      <div style="display: flex;flex-direction: row;">
        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
          <!-- <div style="width: 50%;"> -->
          <UploadCom title="中标通知书/成交结果通知书" :fileList="resultData.bid_success_notice" type="see"
            @updateFile="(e) => updateFile(e, resultData.bid_success_notice)" />
          <!-- </div> -->
        </div>

        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
          <!-- <div style="width: 50%;"> -->
          <UploadCom title="中标供应商企业类型" :fileList="resultData.bid_unit_type" type="see"
            @updateFile="(e) => updateFile(e, resultData.bid_unit_type)" />
          <!-- </div> -->
        </div>

      </div>
      <div style="display: flex;flex-direction: row;">
        <el-form-item label="中标供应商企份额" prop="bid_success_unit_per" style="width: 45%;">
          <el-input v-model="resultData.bid_success_unit_per" placeholder="请输入中标供应商企份额">
            <span slot="suffix">%</span>
          </el-input>
        </el-form-item>
        
        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
          <!-- <div style="width: 50%;"> -->
          <UploadCom title="投标文件" :fileList="resultData.bid_file" type="see"
            @updateFile="(e) => updateFile(e, resultData.bid_file)" />
          <!-- </div> -->
        </div>
      </div>
      <div class="background-icon">
        <span class="title">相关资料</span>
      </div>
      <div style="display: flex;flex-direction: row;">
        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
          <!-- <div style="width: 50%;"> -->
          <UploadCom title="相关资料（如质疑答复、投书处理决定等)" :fileList="resultData.project_attachments" type="see"
            @updateFile="(e) => updateFile(e, resultData.project_attachments)" />
          <!-- </div> -->
        </div>
       
      </div>
      <div class="background-icon">
        <span class="title">档案汇编</span>
      </div>
      <div style="display: flex;flex-direction: row;">
       
        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 20px;">
          <!-- <div style="width: 50%;"> -->
          <UploadCom title="档案汇编" :fileList="resultData.file_compilation" type="see"
            @updateFile="(e) => updateFile(e, resultData.file_compilation)" />
          <!-- </div> -->
        </div>
      </div>
    </el-form>
    <div>
      <div style="display: flex;flex-direction: row;"
        v-if="projectInfo.bid_result_last_log &&projectInfo.bid_result_last_log.description">
        <span style="color: red;font-size: 14px;">审核意见:</span>
        <el-input :disabled="true" style="max-width: 300px;" type="textarea" :rows="4"
          v-model="projectInfo.bid_result_last_log.description"></el-input>
      </div>
    </div>
    <div style="width:100%;display: flex;justify-content: center;align-items: center;">
    <el-button @click="auditFnc" v-if="projectInfo.status == 25" v-permission="['department_auditor']"
        type="primary">审核</el-button>
      </div>
        <checkDialog ref="checkDialog" title="审核" @auditEmit="auditEmit"
      :radioList="[{ label: '驳回', value: 26 }, { label: '通过', value: 27 },]" />
    <el-dialog :visible.sync="dialogVisible">
      <img style="width:100%;"
        v-if="dialogImageUrl.includes('jpeg') || dialogImageUrl.includes('png') || dialogImageUrl.includes('jpg')"
        :src="dialogImageUrl" alt="">
      <video controls v-if="dialogImageUrl.includes('mp4') || dialogImageUrl.includes('ogg')" :src="dialogImageUrl"></video>
    </el-dialog>
  </div>
</template>

<script>
import UploadCom from '../thirdProjects/editCom/uploadCom.vue'
import checkDialog from "@/components/checkDialog.vue";
import { getToken } from '@/utils/auth'
import { bidResultSave, resultOpenSubmit, projectAudit } from "@/api/project";
export default {
  components: { UploadCom, checkDialog },
  data() {
    return {
      thirdFormRules: {
        bid_success_publish_date: [{ required: true, message: "请选择中标发布日期", trigger: "blur", },],
        bid_success_notice_date: [{ required: true, message: "请选择标告知书日期", trigger: "blur", },],
        bid_success_amount: [{ required: true, message: "请输入中标金额", trigger: "blur" },],
        bid_success_unit: [{ required: true, message: "请输入单位", trigger: "blur" },],
        bid_success_phone: [{ required: true, message: "请输入电话", trigger: "blur" },],
        bid_success_contact: [{ required: true, message: "请输入联系人", trigger: "blur" },],
        bid_success_link: [{ required: true, message: "请输入公示链接", trigger: "blur" },],
        bid_success_unit_type: [{ required: true, message: "请输入企业类型", trigger: "blur" },],
        bid_success_unit_per: [{ required: true, message: "请输入企业份额", trigger: "blur" },],
        bid_success_photo: [{ required: true, message: "请上传中标图片", trigger: "blur" },],
        bid_success_notice: [{ required: true, message: "请上传中标告知书", trigger: "blur" },],
      },
      dialogVisible: false,
      dialogImageUrl: ''
    };
  },
  computed: {
    projectInfo() {
      return this.$store.state.projectManagementAdd.formInfo;
    },
    resultData() {
      return this.$store.state.projectManagementAdd.thirdData.resultData;
    },
    uploadUrl() {
      return process.env.VUE_APP_UPLOAD_API + '/user/upload_file'
    },
    headers() {
      return {
        "Authorization": `Bearer ${getToken()}`
      }
    },
  },
  methods: {
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogVisible = true;
      this.dialogImageUrl = file.url;
    },
    updateFile(e, item, index) {
      console.log(e, item, index)
      if (typeof e == 'number') {
        item.splice(e, 1)
      } else {
        item.push(e)
      }
      console.log(this.$store.state.projectManagementAdd.project_attachments)
    },
    async saveFnc(reqBool) {
      if (!reqBool) {
        this.submitFnc();
        return
      }
      let resultData = this.$store.state.projectManagementAdd.thirdData.resultData;

      this.$refs.thirdForm.validate(async (valid) => {
        if (valid) {
          if (!resultData.bid_success_photo.length) {
            this.$message.error('请上传图片');
            return
          }
          if (!resultData.bid_success_notice.length) {
            this.$message.error('请上传中标通知书/成交结果通知书');
            return
          }
          if (!resultData.bid_file.length) {
            this.$message.error('请上传投标文件');
            return
          }
          if (!resultData.bid_unit_type.length) {
            this.$message.error('请上传中标企业类型');
            return
          }
          if (!resultData.file_compilation.length) {
            this.$message.error('请上传档案汇编');
            return
          }

          // if(!resultData.project_attachments[0].files.length){
          // this.$message.error('请上传附件');
          // return
          // }
          let form = this.$store.state.projectManagementAdd.thirdData.resultData;
          form.id = this.projectInfo.id;
          form.project_attachments3 = form.project_attachments;
          form.project_attachments = []
          form.is_submit = 1;
          console.log(form);
          //  return
          let res = await bidResultSave(form);
          console.log(res)
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$emit('updateDetail')

            return
          }
          this.$message.error(res.msg)
        } else {

          return false;
        }

      });



    },
    async submitFnc() {
      let form = this.$store.state.projectManagementAdd.thirdData.resultData;
      form.id = this.projectInfo.id;
      console.log(form);
      //  return
      let res = await bidResultSave(form);
      console.log(res)
      if (res.code == 200) {
        this.$message.success(res.msg)
        this.$emit('updateDetail')

        return
      }
      this.$message.error(res.msg)
    },
    handleProgress(e, file, fileList) {
      // console.log(e, file, fileList)
    },
    handleSuccess(e, file, fileList) {
      console.log(e, file, fileList, '----')
      if (e.code === 200) {
        e.data.title = e.data.file_name;
        this.resultData.bid_success_photo.push(e.data)
        // this.$emit('updateFile',e.data)
        // this.fileList.push(e.data);
      }
    },
    async auditFnc() {
      this.$refs.checkDialog.openDialog(true)
    },
    async auditFncEnd() {
      this.$refs.checkDialogEnd.openDialog(true)
    },
    async auditEmit(e) {
      console.log(e)
      let res = await projectAudit({ id: this.projectInfo.id, ...e });
      console.log(res)
      if (res.code == 200) {
        this.$message.success(res.msg);
        this.$emit('updateDetail')
        this.$refs.checkDialog.openDialog(false)
        return
      }
      this.$message.error(res.msg);
    },
    async auditEmitEnd(e) {
      console.log(e)
      let res = await projectAudit({ id: this.projectInfo.id, ...e });
      console.log(res)
      if (res.code == 200) {
        this.$message.success(res.msg);
        this.$emit('updateDetail')
        this.$refs.checkDialogEnd.openDialog(false)
        return
      }
      this.$message.error(res.msg);
    },
  }
};
</script>

<style lang="scss" scoped>

.background-icon {
  width: 300px;
  height: 29px;
  // margin-left: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
  background: url("../../assets/background_icon.png") no-repeat 100% 100%;
  padding-top: 5px;

  .title {
    padding-left: 9px;
    color: white;
    font-size: 14px;
  }
}

.radio-item-child {
  padding-left: 20px;
}

.radio-item {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  // align-items: center;
  cursor: pointer;

  span {
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
  }

  .radio-class {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    margin-top: 10px;
    margin-right: 10px;

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: white;
    }

    &.active {
      background: #409eff;

      &::after {
        width: 5px;
        height: 5px;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}

.box {
  // padding-bottom: 35px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .box-left {
    display: flex;
    height: auto;
    background-color: white;
    max-width: 1000px;

    .form {
      min-width: 500px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      background-color: white;
      padding-bottom: 35px;
    }

    // max-width: 1100px;
    .step1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      padding: 74px 0 0 58px;
      margin-bottom: 37px;

      .item {
        font-size: 14px;
        color: #1d70ff;
        margin-right: 46px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 14px;
          margin-right: 15px;
        }

        span {
          margin-right: 18px;
        }

        div {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg,
              #1d70ff 0%,
              rgba(29, 112, 255, 0) 100%);
        }
      }

      .active {
        color: #a6a9bc;

        div {
          background: linear-gradient(90deg,
              #a6a9bc 0%,
              rgba(166, 169, 188, 0) 100%);
        }
      }
    }
  }
}

.box-right1 {
  display: flex;
  flex-grow: 1;
  background-color: white;
  box-sizing: border-box;
  // border-left: 1px solid #EAEDEC;

  .files {
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 20px;
    width: 100%;

    .title1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 16px;
      color: #454d65;
      font-weight: 600;
      margin-bottom: 20px;

      img {
        width: 14px;
        margin-right: 8px;
      }
    }

    .file-form {
      .file-form-item {
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;

        .left {
          width: 50%;

          .title {
            color: #404659;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 14px;
          }
        }

        .right {
          width: 50%;
          box-sizing: border-box;
          padding-left: 16px;

          .title {
            color: #404659;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 14px;
          }

          .upload {
            display: flex;
            flex-direction: column;

            .file-list {
              display: flex;
              flex-direction: column;

              .item {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 13px;

                .file-icon {
                  width: 16px;
                  height: 13px;
                  margin-right: 6px;
                }

                span {
                  color: #404659;
                  font-size: 14px;
                  margin-right: 12px;
                }

                .delete {
                  width: 14px;
                  height: 15px;
                }
              }
            }

            .upload-btn {
              display: flex;
              justify-content: center;
              align-items: center;

              .btn {
                width: 100px;
                height: 36px;
                border: 1px solid #2d6cff;
                // background: #FFFFFF;
                border-radius: 4px;
                margin-right: 19px;
              }

              span {
                font-size: 12px;
                color: #a6a9bc;
              }
            }
          }
        }

        // align-items: center;
      }
    }
  }
}</style>
