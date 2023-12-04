<template>
    <div>
        <div class="bid">
            <div class="background-icon">
                <span class="title">投标单位</span>
            </div>
            <div class="add" @click="addForm">
                <img src="../../../assets/add_icon1.png" alt="" srcset="">
                <span>添加单位</span>
            </div>
        </div>
        <div style="padding-left: 30px;">
            <div class="item" v-for="(item, index) in list" :key="index">
                <el-form :ref="item.ref" style="padding-left: 30px;" :inline="true" :rules="item.rules" :model="item.form">
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
            ]
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
</style>