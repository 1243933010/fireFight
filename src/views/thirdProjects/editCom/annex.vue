<template>
    <div class="box-right">
        <div class="files">
          <div class="title1">
            <img src="../../../assets/liucheng.png" alt="">
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
                      <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../../assets/upload_icon.png" alt="" srcset="">
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
                      <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../../assets/upload_icon.png" alt="" srcset="">
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
                      <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../../assets/upload_icon.png" alt="" srcset="">
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
                      <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../../assets/upload_icon.png" alt="" srcset="">
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
                      <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                      <span>{{ item.title }}.{{ item.type }}</span>
                      <div class="delete"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                    </div>
                  </div>
                  <div class="upload-btn">
                    <div class="btn">
                      <img src="../../../assets/upload_icon.png" alt="" srcset="">
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
</template>


<script>
export default{
    data(){
        return{
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