<template>
    <div class="main">
        <div class="tab-icon">
            <img class="img" src="../../../assets/liucheng.png" alt="">
            <span class="span">个人中心修改密码</span>
        </div>
        <div class="form">
            <el-form ref="form" size="small"  :model="form" label-width="90px" class="form-container">
                <el-form-item label="所属部门">
                    <!-- <el-select v-model="form.department_id" placeholder="请选择">
                        <el-option v-for="(item, index) in list" :key="index" :label="item.name" :value="item.id" />
                    </el-select> -->
                    <el-input :disabled="true" v-model="department" placeholder="" />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.name" placeholder="请输入手机号" />
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.name" placeholder="请输入邮箱" />
                </el-form-item>
                <el-form-item label="旧密码">
                    <el-input v-model="form.old_password" placeholder="请输入我的密码">
                    <!-- <span slot="suffix" style="color: blue;" @click="forget">忘记密码</span> -->
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="form.new_password" placeholder="请输入新密码">
                    <!-- <span slot="suffix" style="color: blue;" @click="forget">忘记密码</span> -->
                    </el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input v-model="form.confirm_password" placeholder="请确认新密码">
                    <!-- <span slot="suffix" style="color: blue;" @click="forget">忘记密码</span> -->
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-col :span="11">
                        <el-button @click="updatePassword" type="primary">修改</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>



<script >
import { departmentArr,resetUser } from "@/api/project";
import store from "@/store";
export default {
    data() {
        return {
            list:[],
            form: {
                department_id:'',
                old_password:"",
                new_password:'',
                confirm_password:'',
                name:"",
                region:""
            }
        }
    },
    mounted(){
        // this.getDepart();
        console.log(this.$store.state.user,'---')
    },
    computed:{
        department(){
            return this.$store.state.user.department||''
        },
        user(){
            return this.$store.state.user||{}
        }
    },
    methods:{
        async updatePassword(){
            let res = await resetUser(this.form);
            console.log(res)
        },
        forget(){
            this.$router.push({name:'password'})
        },
        async getDepart(){
            let res = await departmentArr({per_page:1000});
            console.log(res)
            if (res.code == 200) {
                this.list = res.data.list
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~@/styles/btn.scss";

.main {
    width: 100%;
    height: 100%;
    background-color: white;
    .form{
        width: 30%;
    }
}
</style>