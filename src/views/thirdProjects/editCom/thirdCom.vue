<template>
  <div>
    <el-row>
      <el-form
        ref="thirdForm"
        style="padding-left: 30px"
        :inline="true"
        :rules="thirdFormRules"
        :model="thirdForm"
        class="demo-form-inline"
      >
        <el-col :span="12">
          <el-form-item
            label="采购代理机构制作招标文件具体日期填写"
            prop="input1"
          >
            <el-date-picker
              v-model="thirdForm.input1"
              type="date"
              placeholder="请选择采购意向公开日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <div class="left-form">
            <div class="file-form">
              <div class="file-form-item">
                <div class="left"></div>
                <div
                  class="right"
                  style="display: flex; flex-direction: column"
                >
                  <UploadCom
                    title="采购代理机构招标文件(发售稿)"
                    flex="row"
                    :fileList="thirdForm.fileList3"
                  />
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发布招标公告日期" prop="input2">
            <!-- <el-input v-model="thirdForm.input2"  /> -->
            <el-date-picker
              v-model="thirdForm.input2"
              type="date"
              placeholder="请选择发布招标公告日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="公示链接" prop="input3">
            <el-input v-model="thirdForm.input3" placeholder="请输入公示链接" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="公示图（1/4）" prop="input3">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit="4"
              :file-list="thirdForm.fileList2"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
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
        <el-col :span="24">
          <UploadCom title="投标报名登记表" :fileList="thirdForm.fileList3" />
        </el-col>
        <el-col :span="12">
          <el-form-item label="开评标日期" prop="input4">
            <el-date-picker
              v-model="thirdForm.input4"
              type="date"
              placeholder="请选择开评标日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="是否有质疑/澄清" prop="input5">
            <el-input
              v-model="thirdForm.input5"
              type="textarea"
              placeholder="是否有质疑/澄清"
            />
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
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
                  <div class="title"><span>支队/大队采购例会</span></div>
                  <div class="input">
                    <el-input
                      type="textarea"
                      :rows="4"
                      v-model="fileForm.input1"
                      placeholder="我部已申请采购一批消防器材望上级批准。"
                    >
                    </el-input>
                  </div>
                </div>
                <div class="right">
                  <UploadCom title="附件" :fileList="fileForm.fileList1" />
                </div>
              </div>
              <div class="file-form-item">
                <div class="left">
                  <div class="title"><span>委托招标函</span></div>
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
                  <UploadCom title="附件" :fileList="fileForm.fileList2" />
                </div>
              </div>

              <div class="file-form-item">
                <div class="left">
                  <div class="title"><span>采购文件确认函</span></div>
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
                  <UploadCom title="附件" :fileList="fileForm.fileList5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex;justify-content: center;align-items: center;width: 100%;">
      <el-button type="normal">保存草稿</el-button>
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import UploadCom from "./uploadCom.vue";
export default {
  components: { UploadCom },
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
