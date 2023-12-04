<template>
  <div style="height: auto">
    <div class="box">
      <div class="box-left">
        <div class="steps">
          <Steps :stepList="stepList" />
        </div>
        <div class="form" style="padding-top: 50px;">
          <!-- <div class="step1">
              <div class="item" :class="index !== 0 ? 'active' : ''" v-for="(item, index) in stepsList" :key="index">
                <img v-if="index == 0" src="../../assets/step_icon_check.png" alt="" srcset="">
                <img v-if="index !== 0" src="../../assets/step_icon.png" alt="" srcset="">
                <span>{{ item.title }}</span>
                <div></div>
              </div>
            </div> -->
          <el-form :inline="true" :rules="rules"  :model="formInfo" class="demo-form-inline" label-width="100px">
            <el-col :span="12">
              <el-form-item label="需求单位" prop="input1">
                <el-select v-model="formInfo.input1" placeholder="请选择需求单位"  :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目负责人" prop="input2" placeholder="请输入项目负责人" >
                <el-input v-model="formInfo.input2"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话" prop="input3" placeholder="请输入联系电话" >
                <el-input v-model="formInfo.input3"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称" prop="input4" placeholder="请输入项目名称" >
                <el-input v-model="formInfo.input4"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目类型" prop="input5">
                <el-select v-model="formInfo.input5" placeholder="请选择项目类型" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目编号" prop="input6" placeholder="请输入项目编号">
                <el-input v-model="formInfo.input6" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审计金额" prop="input7" placeholder="请输入审计金额">
                <el-input v-model="formInfo.input7" type="number"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预算金额" prop="input8" placeholder="请输入预算金额">
                <el-input v-model="formInfo.input8" type="number"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购方式" prop="input9">
                <el-select v-model="formInfo.input9" placeholder="请选择采购方式" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购意向公开日期" prop="input10">
                <el-date-picker v-model="formInfo.input10" type="date" placeholder="请选择采购意向公开日期" :disabled="true">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购意向公告链接" prop="input11" placeholder="请输入采购意向公告链接" label-width="150px">
                <el-input v-model="formInfo.input11" type="text" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="" prop="input12">
                <div class="form-title"><span><span style="color: red;">*</span> 是否面向中小微企：</span></div>
                <div class="radio-item" @click="setIndex(0)">
                  <div class="radio-class" :class="activeIndex == 0 ? 'active' : ''"></div>
                  <span>是:整体专门面向中小企业采购 (即100%)</span>
                </div>
                <div class="radio-item" @click="setIndex(1)">
                  <div class="radio-class " :class="activeIndex == 1 ? 'active' : ''"></div>
                  <span>否: 预留预算总额的货物类、服务类项目不低于30%，工程类项目不低于40%，由需求单位根据实际情况填写专门面向中小企业采购。</span>
                </div>
                <div class="radio-item-child" v-if="childRadioBool">
                  <div class="radio-item" @click="setChildIndex(0)">
                    <div class="radio-class " :class="childRadioIndex == 0 ? 'active' : ''"></div>
                    <span>采购项目整体或者设置采购包专门面向中小企业采购</span>
                  </div>
                  <div class="radio-item" @click="setChildIndex(1)">
                    <div class="radio-class " :class="childRadioIndex == 1 ? 'active' : ''"></div>
                    <span>供应商以联合体形式参加采购活动，联合体中中小企业承担预算总额的
                      <el-input style="width: 10%;" v-model="childInput1" size="small" type="number"></el-input>
                      %部分</span>
                  </div>
                  <div class="radio-item" @click="setChildIndex(2)">
                    <div class="radio-class " :class="childRadioIndex == 2 ? 'active' : ''"></div>
                    <span>获得采购合同的供应商将采购项目中的
                      <el-input style="width: 10%;" v-model="childInput2" size="small" type="number"></el-input>
                      %分包给一家或者多家中小企业</span>
                  </div>
                </div>
                <div class="radio-item" @click="setIndex(2)">
                  <div class="radio-class " :class="activeIndex == 2 ? 'active' : ''"></div>
                  <span>否:项目不适用专门面向中小企业，根据《政府采购促进中小企业发展管理办法》财库[2020] 46 号的规定，符合
                    下列情形之一的，可不专门面向中小企业预留采购份额。</span>
                </div>

              </el-form-item>
            </el-col>
            <el-col :span="13">
              <el-form-item label="采购代理名称" prop="input13"  >
                <el-select v-model="formInfo.input13" placeholder="请选择采购代理名称">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="input14">
                <!-- <el-input v-model="formInfo.input11" type="text" /> -->
                <div class="upload-class">
                  <div class="label"><span>抽取采购代理机构登记</span></div>
                  <div class="upload-class-con">
                    <span class="span">1111</span>
                    <div class="upload-btn">
                      <div class="btn">
                        <img src="../../assets/upload_icon.png" alt="" srcset="">
                        <span>上传文件</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-col>
            <!-- <el-form-item> -->
            <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
            <!-- </el-form-item> -->
            <div class="btnn">
              <div class="btn1">取消</div>
              <div class="btn2">提交</div>
              <div class="btn3">保存草稿</div>
              <div class="btn4">通过</div>
              <div class="btn5">驳回</div>
            </div>
          </el-form>

        </div>
      </div>
      <div class="box-right">
        <div class="files">
          <div class="title1">
            <img src="../../assets/liucheng.png" alt="">
            <span>附件</span>
          </div>
          <el-form :disabeld="true">
            <div class="file-form">
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>采购意向</span></div>
                <div class="input"><el-input type="textarea"  :disabled="true" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
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
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>纪保预算审核报告书</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
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
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>采购需求</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
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
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>实施计划</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
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
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>审查意见书</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
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
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>大队党委会</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList6" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>支队党委会</span></div>
                <div class="input"><el-input :disabled="true" type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <div class="title"><span>附件</span></div>
                <div class="upload">
                  <div class="file-list">
                    <div class="item" v-for="(item, index) in fileForm.fileList7" :key="index">
                      <div class="file-icon"><img src="../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <!-- <div class="upload-btn">
                    <div class="btn">
                      <img src="../../assets/upload_icon.png" alt="" srcset="">
                      <span>上传文件</span>
                    </div>
                    <span>支持扩展名: .rar .zip .doc 、docx .pdf.jpg..</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Steps from "@/components/steps.vue";
import { addMixins } from './mixins'
export default {
  mixins: [addMixins],
  components: { Steps },
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

    }
  },
};
</script>
  
<style lang="scss" scoped>
.upload-class {
  .label{
    color: #404659;
    font-size: 14px;
    margin-bottom: 14px;
  }

  .upload-class-con{
    display: flex;
   flex-direction: row;
   align-items: center;
   .span{
    margin-right: 35px;
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
  