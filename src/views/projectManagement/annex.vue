<template>
    <div class="box-right">
        <div class="files">
          <div class="title1">
            <img src="../../assets/liucheng.png" alt="">
            <span>附件{{  }}</span>
          </div>
          <div class="file-form">
            <div class="file-form-item" v-for="(item,index) in project_attachments" :key="index">
              <div class="left">
                <div class="title"><span>{{ item.title }}</span></div>
                <div class="input">
                  <el-input type="textarea" :rows="4" v-model="item.description" placeholder="我部已申请采购一批消防器材望上级批准。">
                  </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="item.files" @updateFile="(e)=>updateFile(e,item,index)" />
              </div>
            </div>
            <!-- <div class="file-form-item">
              <div class="left">
                <div class="title"><span>采购意向</span></div>
                <div class="input">
                  <el-input type="textarea" :rows="4" v-model="fileForm.text1" placeholder="我部已申请采购一批消防器材望上级批准。">
                  </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList1" @updateFile="updateFile" />
              </div>
            </div> -->
            <!-- <div class="file-form-item">
              <div class="left">
                <div class="title"><span>纪保预算审核报告书</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text2" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList2" @updateFile="updateFile" />
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>采购需求</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text3" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList3"  @updateFile="updateFile"/>
              </div>
            </div>

            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>实施计划</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text4" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList4"  @updateFile="updateFile"/>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>审查意见书</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text5" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList5" @updateFile="updateFile" />
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>大队党委会</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text6" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList6"  @updateFile="updateFile"/>
              </div>
            </div>
            <div class="file-form-item">
              <div class="left">
                <div class="title"><span>支队党委会</span></div>
                <div class="input"><el-input type="textarea" v-model="fileForm.text7" :rows="4" placeholder="我部已申请采购一批消防器材望上级批准。"> </el-input>
                </div>
              </div>
              <div class="right">
                <UploadCom title="附件" :fileList="fileForm.fileList7" @updateFile="updateFile" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
</template>


<script>
import { number } from 'echarts/lib/export'
import UploadCom from '../thirdProjects/editCom/uploadCom.vue'
export default{
    components:{UploadCom},
    data(){
        return{
            
            
        }
    },
    computed:{
      project_attachments(){
        return this.$store.state.projectManagementAdd.project_attachments
      }
    },
    methods:{
      updateFile(e,item,index){
        console.log(e,item,index)
        if(typeof e ==number){
          itemm.files.splice(e,1)
        }else{
          item.files.push(e)
        }
        console.log(this.$store.state.projectManagementAdd.project_attachments)
      }
    }
}
</script>


<style lang="scss" scoped>
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
</style>