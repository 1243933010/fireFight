<template>
  <div style="height: auto">
    <div class="box">
      <div class="box-left">
        <div class="steps">
          <Steps :stepList="stepList" />
        </div>
        <div class="form">
          <div class="background-icon">
            <span class="title">基本信息</span>
          </div>
          
          <BasicMsg />

          <!-- 三方基本信息录入 -->
          <div class="background-icon">
            <span class="title">三方基本信息录入</span>
          </div>
          
          <ThirdCom />
          <!-- 开标 -->
          <div class="background-icon">
            <span class="title">开标</span>
          </div>
          <div style="padding-left: 30px;">
            
            <StartCom />
          </div>
          <div class="btnn">
            <div class="btn1">取消</div>
            <div class="btn2">提交</div>
            <div class="btn3">保存草稿</div>
            <div class="btn4">通过</div>
            <div class="btn5">驳回</div>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="files">
          <div class="title1">
            <img src="../../assets/liucheng.png" alt="">
            <span>附件</span>
          </div>
          <div class="file-form">
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>支队/大队采购例会</span></div>
                <div class="input">
                  <el-input type="textarea" :rows="4" v-model="fileForm.input1" placeholder="我部已申请采购一批消防器材望上级批准。">
                  </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList1" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>委托招标函</span></div>
                <div class="input"><el-input type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList2" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>参与评审专家信息</span></div>
                <div class="input"><el-input type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList3" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>采购文件确认函</span></div>
                <div class="input"><el-input type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList5" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>举报/质疑/投诉</span></div>
                <div class="input"><el-input type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList4" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Steps from "@/components/steps.vue";
import { addMixins } from './mixins'
import BasicMsg from './editCom/basicMsg.vue'
import ThirdCom from './editCom/thirdCom.vue'
import StartCom from './editCom/start.vue'


export default {
  mixins: [addMixins],
  components: { Steps,BasicMsg,ThirdCom,StartCom },
  data() {
    return {

    };
  },

  mounted() { },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    setIndex(ind) {
      this.activeIndex = ind;
      this.childRadioBool = false;
      if (this.activeIndex == 1) {
        this.childRadioBool = true;
        this.childRadioIndex = 0;
      }
    },
    setChildIndex(ind) {
      this.childInput1 = 0;
      this.childInput2 = 0;
      this.childRadioIndex = ind;

    },
    handleRemove(file) {
      console.log(this.dialogImageUrl)
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  },
};
</script>
  
<style lang="scss" scoped>
@import url('./mixins.scss');

.background-icon {
  width: 300px;
  height: 29px;
  margin-left: 30px;
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
      content: '';
      width: 0;
      height: 0;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform .15s ease-in;
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

.btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btnn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  div {
    width: 86px;
    height: 36px;
    background: #DCE3FD;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }

  .btn1 {
    background: #DCE3FD;
    color: #3E72FB;
  }

  .btn2 {
    background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);
    color: #FEFEFF;
  }

  .btn3 {
    background: white;
    border: 1px solid #A7AABD;
    color: #404659;
  }

  .btn4 {
    background: linear-gradient(0deg, #6080F6 0%, #2D6CFF 100%);
    color: #FEFEFF;
  }

  .btn5 {
    background: linear-gradient(0deg, #FC6235 0%, #FC4935 100%);
    color: #FEFEFF;
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
        color: #1D70FF;
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
          background: linear-gradient(90deg, #1D70FF 0%, rgba(29, 112, 255, 0) 100%);
        }
      }

      .active {
        color: #A6A9BC;

        div {
          background: linear-gradient(90deg, #A6A9BC 0%, rgba(166, 169, 188, 0) 100%);
        }
      }
    }

    .steps {
      margin-left: 2px;
      box-sizing: border-box;
      padding: 0px 16px 0;
      // width: 148px;
      height: auto;
      background-color: #fff;
      // border-right: 1px solid #EAEDEC;
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 42px;

        .icon {
          width: 14px;
          margin-right: 8px;

          img {
            width: 100%;
          }
        }

        span {
          color: #404659;
          font-size: 16px;
        }
      }
    }
  }

  .box-right {
    display: flex;
    flex-grow: 1;
    background-color: white;
    box-sizing: border-box;
    border-left: 1px solid #EAEDEC;

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
        color: #454D65;
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
                  border: 1px solid #2D6CFF;
                  // background: #FFFFFF;
                  border-radius: 4px;
                  margin-right: 19px;
                }

                span {
                  font-size: 12px;
                  color: #A6A9BC;
                }
              }
            }
          }

          // align-items: center;
        }
      }
    }
  }
}
</style>
  