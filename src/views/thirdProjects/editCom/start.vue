<template>
    <div>
        <el-col :span="12">
            <UploadCom title="投标人签到表" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="开标记录表" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="采购人评标代表授权书" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="评标委员会签到表" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="评标守则" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="资格审查表、符合性审查表" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="评标过程资料" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="评标报告" :fileList="[]" />
        </el-col>
        <el-col :span="12">
            <UploadCom title="评标结果确认函" :fileList="[]" />
        </el-col>
       
    </div>
</template>



<script>
import UploadCom from './uploadCom.vue'
export default{
    components:{UploadCom},
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

