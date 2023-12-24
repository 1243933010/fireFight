<template>
    <div>
        <div class="left-form">
            <div class="file-form">
                <div class="file-form-item">
                    <div class="left">
                    </div>
                    <div class="right">
                        <div class="title"><span><span style="color: red;">*</span> {{ title }}</span></div>
                        <div class="upload">
                            <div class="file-list">
                                <div class="item" v-for="(item, index) in fileList" :key="index">
                                    <div class="file-icon"><img src="../../../assets/file_icon.png" alt="" srcset=""></div>
                                    <span class="span">{{ item.title }}.{{ item.type }}</span>
                                    <div class="delete" @click="deleteFile(item,index)"><img src="../../../assets/delete_icon.png" alt="" srcset=""></div>
                                </div>
                            </div>
                            <div class="upload-btn">
                                <div class="btn">
                                    <img class="img" src="../../../assets/upload_icon.png" alt="" srcset="">
                                    <el-upload class="upload-demo" :action="uploadUrl"
                                        :headers="headers"
                                        :show-file-list="false" :limit="3" :on-exceed="handleExceed" :file-list="fileList"
                                        :on-progress="handleProgress"
                                        :on-success="handleSuccess">
                                        <div style="display: flex;flex-direction: row;align-items: center;">
                                            <div class="upload">
                                                <!-- <img src="../../../assets/upload_icon.png" alt="" srcset=""> -->
                                                <span class="span">上传文件</span>
                                            </div>
                                            <!-- <div slot="tip" class="el-upload__tip">支持扩展名: .rar .zip .doc 、docx .pdf.jpg..
                                            </div> -->
                                        </div>
                                    </el-upload>
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
import { getToken } from '@/utils/auth'
export default {
    props: {
        title: {
            type:String,
            default:'test'
        },
        fileList: {
            type:Array,
            default:()=>[]
        },
    },
    
    data() {
        return {

        }
    },
    computed:{
        uploadUrl(){
            return  process.env.VUE_APP_UPLOAD_API+'/user/upload_file'
        },
        headers(){
            return {
                "Authorization":`Bearer ${getToken()}`
            }
        }
    },
    methods:{
        deleteFile(item,index){
            // this.fileList.splice(index,1)
            this.$emit('updateFile',index)
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        handleProgress(e, file, fileList) {
            // console.log(e, file, fileList)
        },
        handleSuccess(e, file, fileList){
            console.log(e, file, fileList,'----')
            if(e.code===200){
                e.data.title = e.data.file_name;
                this.$emit('updateFile',e.data)
                // this.fileList.push(e.data);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./../mixins.scss');
</style>