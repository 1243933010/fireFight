<template>
    <div>
        <el-dialog title="添加用户" center :visible.sync="dialogVisible" width="50%" :show-close="false">
            <el-form class="form" ref="formInfo" :rules="rules" size="small" :model="formInfo" label-width="120px">
                <el-col :span="12">
                    <el-form-item label="用户姓名" prop="name">
                        <el-input v-model="formInfo.name" placeholder="请输入用户姓名" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属部门" prop="region">
                        <el-select v-model="formInfo.region" placeholder="请选择所属部门">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="手机号" prop="region">
                        <el-input v-model="formInfo.name" placeholder="请输入手机号" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="登录账号" prop="region">
                        <el-input v-model="formInfo.name" placeholder="请输入登录账号" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="登录密码" prop="region">
                        <el-input v-model="formInfo.name" placeholder="请输入登录密码" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="角色" prop="region">
                        <el-select v-model="formInfo.region" placeholder="请选择角色">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-form-item label="状态" prop="region">
                    <el-radio-group v-model="formInfo.region">
                        <el-radio :label="3">正常</el-radio>
                        <el-radio :label="6">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注" prop="name" style="width: 100%;">
                    <el-input v-model="formInfo.name" type="textarea" placeholder="请输入备注" />
                </el-form-item>
            </el-form>
            <div class="btn">
                <div class="btn1">确定</div>
                <div class="btn2">取消</div>
            </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data() {
        return {
            formInfo: {
                name: '',
                region: ''
            },
            dialogVisible: false,
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                region: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ]
            },
            fileList: []
        }
    },

    beforeRouteLeave(to, from, next) {
        console.log('111111')
        next();
    },
    mounted() {
        console.log(this.$route)
    },
    methods: {
        open(id) {
            if (!id) {
                // this.$refs.formInfo.res
            }
            this.dialogVisible = true;
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        handleProgress(e, file, fileList) {
            console.log(e, file, fileList)
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
    background: linear-gradient(0deg, #2E6DFF 0%, #6280F5 100%);

    .el-dialog__title {
        color: white;
        font-size: 16px;
        font-weight: 600;
    }
}

.upload {
    width: 100px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #2D6CFF;
    // border-: linear-gradient(0deg, #2D6CFF, #2172FF) 10 10;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    img {
        margin-right: 5px;
    }
}

.btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

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
        color: #2D6CFF;
    }

    .btn2 {
        background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);
        color: #FEFEFF;
    }
}
</style>