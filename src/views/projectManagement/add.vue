<template>
    <div style="height: 100%;">
        <div class="box">
            <div class="box-left">
                <div class="steps">
                    <div class="title">
                        <img src="../../assets/liucheng.png" alt="" srcset="">
                        <span>流程指引</span>
                    </div>
                    <Steps :stepList="stepList" />
                </div>
                <div class="form">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="box-right">
                <div class="files">
                    <div class="title">附件</div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Steps from '@/components/steps.vue'
export default {
    components: { Steps },
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    computed: {
        stepList() {
            return [
                {title:'审批人',isInput:this.formInline.user,isActive:!this.formInline.user&&this.formInline.region},
                {title:'活动区域',isInput:this.formInline.region,isActive:false}
            ]
        }
    },
    mounted() {

    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .box-left {
        display: flex;
        flex-direction: row;
    }
}
.steps{
    width: 135px;
    height: 100%;
    border-right: 1px solid #EAEDEC;
    title{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 42px;
        img{
            width: 14px;
            margin-right: 8px;
        }
        span{
            color: #404659;
            font-size: 16px;
        }
    }
}
</style>