<template>
    <div>
       
        <div class="bid">
            <!-- <div class="background-icon">
                <span class="title">投标单位</span>
            </div> -->
            <div></div>
            <div class="add" @click="addForm">
                <img src="../../../assets/add_icon1.png" alt="" srcset="">
                <span>添加单位</span>
            </div>
        </div>
        <div >
            <div class="item" v-for="(item, index) in list" :key="index">
                <el-form :ref="item.ref" :inline="true" :rules="item.rules" :model="item.form">
                    <el-col :span="24">
                        <el-form-item label="参与投标单位" prop="input1" placeholder="请输入参与投标单位">
                            <el-input v-model="item.form.input1" />
                        </el-form-item>
                        <div class="float" v-if="index>2" @click="deleteItem(index)">
                            <div>删除</div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="参与投标报价金额" prop="input1" placeholder="请输入参与投标报价金额">
                            <el-input v-model="item.form.input1" type="number" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="参与投标联系人" prop="input1" placeholder="请输入参与投标联系人">
                            <el-input v-model="item.form.input1" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <UploadCom title="投标文件" :fileList="item.form.fileList1" />
                    </el-col>
                </el-form>
            </div>
        </div>
        <el-row>
            <el-col :span="24">
        <div class="box-right">
        <div class="files">
          <div class="title1">
            <img src="../../../assets/liucheng.png" alt="">
            <span>附件</span>
          </div>
          <div class="file-form">
            
            <div class="file-form-item">
             
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList3" />
              </div>
              <div class="left">
                <div class="title"><span>参与评审专家信息</span></div>
                <div class="input"><el-input type="textarea" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
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



<script >
import UploadCom from './uploadCom.vue'
export default {
    components: { UploadCom },
    data() {
        return {
            list: [
                {
                    ref: 'ref1',
                    form: { input1: "", fileList1: [] },
                    rules: {
                        input1: [{ required: true, message: '请输入参与投标单位', trigger: 'blur' },]
                    }
                },
                {
                    ref: 'ref2',
                    form: { input1: "", fileList1: [] },
                    rules: {
                        input1: [{ required: true, message: '请输入参与投标单位', trigger: 'blur' },]
                    }
                },
                {
                    ref: 'ref3',
                    form: { input1: "", fileList1: [] },
                    rules: {
                        input1: [{ required: true, message: '请输入参与投标单位', trigger: 'blur' },]
                    }
                }
            ],
            fileForm: {
                text1: '',
                fileList1: [
                    { title: '这是文件名称', type: 'pdf', url: '1111' },
                    { title: '这是文件名称', type: 'pdf', url: '1111' },
                ],
                text2: '',
                fileList2: [],
                text3: '',
                fileList3: [],
                text4: '',
                fileList4: [],
                text5: '',
                fileList5: [],
            },
        }
    },
    methods: {
        addForm() {
            this.list.push({
                ref: `ref${this.list.length + 1}`,
                form: { input1: "", fileList1: [] },
                rules: {
                    input1: [{ required: true, message: '请输入参与投标单位', trigger: 'blur' },]
                }
            })
        },
        deleteItem(index){
            this.list.splice(index,1)
        }
    }
}
</script>


<style lang="scss" scoped>
.float {
    padding-right: 30px;
    padding-top: 0px;
    float: right;

    div {
        width: 100px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid red;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.background-icon {
    width: 300px;
    height: 29px;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    background: url("../../../assets/background_icon.png") no-repeat 100% 100%;
    padding-top: 5px;

    .title {
        padding-left: 9px;
        color: white;
        font-size: 14px;
    }
}


.bid {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add {
        width: 100px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #2D6CFF;
        // border-image: linear-gradient(0deg, #2D6CFF, #2172FF) 10 10;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        // flex-direction: row;
        align-items: center;
        margin-right: 41px;

        img {
            width: 18px;
            height: 18px;
            margin-right: 7px;
        }

        span {
            color: #404659;
            font-size: 12px;
        }
    }
}
.box-right {
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
</style>