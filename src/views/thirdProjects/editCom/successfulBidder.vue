<template>
  <div>
    <el-form
      ref="thirdForm"
      style=""
      :inline="true"
      :rules="thirdFormRules"
      :model="thirdForm"
      class="demo-form-inline"
    >
      <el-col :span="12">
        <el-form-item label="中标金额" prop="input3">
          <el-input v-model="thirdForm.input3" placeholder="请输入中标金额">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="中标单位" prop="input3">
          <el-input v-model="thirdForm.input3" placeholder="请输入中标单位">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系姓名" prop="input3">
          <el-input v-model="thirdForm.input3" placeholder="请输入联系人">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系电话" prop="input3">
          <el-input v-model="thirdForm.input3" placeholder="请输入联系电话">
          </el-input>
        </el-form-item>
      </el-col>

      <el-col :span="24">
        <el-form-item label="上传图片" prop="input3">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            size="small"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <!-- <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""> -->
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="公式链接" prop="input3">
          <el-input v-model="thirdForm.input3" placeholder="请输入公式链接">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发布中标公告日期" prop="input1">
          <el-date-picker
            v-model="thirdForm.input1"
            type="date"
            placeholder="请选择发布中标公告日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="中标供应商企业类型" prop="input1">
          <el-select
            v-model="thirdForm.input3"
            placeholder="请选择需求单位"
            :disabled="true"
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="中标供应商企份额" prop="input3">
          <el-input
            v-model="thirdForm.input3"
            placeholder="请输入中标供应商企份额"
          >
            <span slot="suffix">%</span>
          </el-input>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="中标通知书日期" prop="input4">
          <el-date-picker
            v-model="thirdForm.input4"
            type="date"
            placeholder="请选择开评标日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="13">
        <UploadCom
          title="中标通知书/成交结果通知书"
          :fileList="thirdForm.fileList3"
        />
      </el-col>
    </el-form>
    <el-row>
      <el-col :span="24">
        <div class="box-right1">
          <div class="files">
            <div class="title1">
              <img src="../../../assets/liucheng.png" alt="" />
              <span>附件</span>
            </div>
            <div class="file-form">
              <div class="file-form-item">
                <div class="left">
                  <div class="title"><span>举报/质疑/投诉</span></div>
                  <div class="input">
                    <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="我部已申请采购一批消防器材望上级批准。"
                    >
                    </el-input>
                  </div>
                </div>
                <div class="right">
                  <UploadCom title="附件" :fileList="fileForm.fileList4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex;justify-content: center;align-items: center;width: 100%;">
      <el-button  v-if="projectInfo.status == 23" v-permission="['project_registrar']"  type="normal">保存草稿</el-button>
      <el-button  v-if="projectInfo.status == 24" v-permission="['project_registrar']"  type="primary">提交</el-button>
      <el-button  @click="auditFnc"  v-if="projectInfo.status == 25" v-permission="['department_auditor']"  type="primary">初审</el-button>
      <el-button   @click="auditFncEnd" v-if="projectInfo.status == 27" v-permission="['department_auditor']"  type="primary">终审</el-button>

    </div>
    <checkDialog ref="checkDialog" title="初审"  @auditEmit="auditEmit" :radioList="[ { label: '拒绝', value: 26 }, { label: '通过', value: 27 },]" />
    <checkDialog ref="checkDialogEnd" title="终审"  @auditEmit="auditEmitEnd" :radioList="[ { label: '拒绝', value: 28 }, { label: '通过', value: 29 },]" />

    
  </div>
</template>

<script>
import UploadCom from "./uploadCom.vue";
import checkDialog from "@/components/checkDialog.vue";
export default {
  components: { UploadCom ,checkDialog},
  data() {
    return {
      thirdForm: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",

        fileList1: [],
        fileList3: [
          {
            title: "111",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
          {
            title: "111",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],

        dialogImageUrl: "",
        dialogVisible: false,
        disabled: false,
        fileList2: [
          {
            name: "111",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],
      },
      thirdFormRules: {
        input1: [
          {
            required: true,
            message: "请选择采购意向公开日期",
            trigger: "blur",
          },
        ],
        input2: [
          {
            required: true,
            message: "请选择发布招标公告日期",
            trigger: "blur",
          },
        ],
        input3: [
          { required: true, message: "请输入公示链接", trigger: "blur" },
        ],
        fileList1: [
          {
            required: true,
            message: "请上传采购代理机构招标文件(发售稿)",
            trigger: "blur",
          },
        ],
        input4: [
          { required: true, message: "请输入开评标日期", trigger: "blur" },
        ],
        input5: [
          { required: true, message: "请输入是否有质疑/澄清", trigger: "blur" },
        ],
      },
      fileForm: {
        text1: "",
        fileList1: [
          { title: "这是文件名称", type: "pdf", url: "1111" },
          { title: "这是文件名称", type: "pdf", url: "1111" },
        ],
        text2: "",
        fileList2: [],
        text3: "",
        fileList3: [],
        text4: "",
        fileList4: [],
        text5: "",
        fileList5: [],
      },
    };
  },
  computed:{
    projectInfo() {
      return this.$store.state.thirdProjects.formInfo;
    },
  },
  methods:{
    async auditFnc(){
      this.$refs.checkDialog.openDialog(true)
    },
    async auditFncEnd(){
      this.$refs.checkDialogEnd.openDialog(true)
    },
    async auditEmit(e){
      console.log(e)
      let res = await projectAudit({id:this.$store.state.projectManagementAdd.formInfo.id,status:e.status});
      console.log(res)
      if(res.code==200){
        this.$message.success(res.msg);
        this.$router.go(-1)
        return
      }
      this.$message.error(res.msg);
    },
    async auditEmitEnd(e){
      console.log(e)
      let res = await projectAudit({id:this.$store.state.projectManagementAdd.formInfo.id,status:e.status});
      console.log(res)
      if(res.code==200){
        this.$message.success(res.msg);
        this.$router.go(-1)
        return
      }
      this.$message.error(res.msg);
    },
  }
};
</script>

<style lang="scss" scoped>
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
          background: linear-gradient(
            90deg,
            #1d70ff 0%,
            rgba(29, 112, 255, 0) 100%
          );
        }
      }

      .active {
        color: #a6a9bc;

        div {
          background: linear-gradient(
            90deg,
            #a6a9bc 0%,
            rgba(166, 169, 188, 0) 100%
          );
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
}
</style>
