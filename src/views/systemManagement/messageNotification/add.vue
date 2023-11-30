<template>
    <div>
        <el-dialog title="代办项目提示"  center :visible.sync="dialogVisible" width="50%">
            <el-form class="form" ref="formInfo" size="small" inline :model="formInfo" label-width="120px">
            <el-form-item label="消息标题" prop="name">
                <el-input v-model="formInfo.name" />
            </el-form-item>
            <el-form-item label="接收部门" prop="region">
                <el-select v-model="formInfo.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="消息内容" prop="name" style="width: 100%;">
                <el-input v-model="formInfo.name" type="textarea" />
            </el-form-item>
            <!-- <el-form-item label="时间">
                <el-date-picker v-model="formInfo.region" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item> -->
        </el-form>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data() {
        return {
            formInfo:{
                name:'',
                region:''
            },
            dialogVisible:false
        }
    },
    // beforeRouteLeave(to, from, next) {
    //     console.log('111111')
    //     next();
    // },
    mounted(){
        console.log(this.$route)
    },
    methods: {
        open(id){
            if(!id){
                // this.$refs.formInfo.res
            }
            this.dialogVisible = true;
        }
    }
}
</script>

<style lang="scss" scoped>

::v-deep .el-dialog__header{
    background: linear-gradient(0deg, #2E6DFF 0%, #6280F5 100%);
    .el-dialog__title{
        color: white;
        font-size: 16px;
        font-weight: 600;
    }
}
</style>