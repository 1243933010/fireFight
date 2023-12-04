<template>
    <div>
        <el-form ref="formInfo" :inline="true" :rules="rules" :model="formInfo" class="demo-form-inline"
            label-width="100px">
            <el-col :span="12">
              <el-form-item label="需求单位" prop="input1">
                <el-select v-model="formInfo.input1" placeholder="请选择需求单位" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目负责人" prop="input2" placeholder="请输入项目负责人">
                <el-input v-model="formInfo.input2" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话" prop="input3" placeholder="请输入联系电话">
                <el-input v-model="formInfo.input3" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称" prop="input4" placeholder="请输入项目名称">
                <el-input v-model="formInfo.input4" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目类型" prop="input5">
                <el-select v-model="formInfo.input5" placeholder="请选择项目类型" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目编号" prop="input6" placeholder="请输入项目编号" :disabled="true">
                <el-input v-model="formInfo.input6"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审计金额" prop="input7" placeholder="请输入审计金额" :disabled="true">
                <el-input v-model="formInfo.input7" type="number"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预算金额" prop="input8" placeholder="请输入预算金额" :disabled="true">
                <el-input v-model="formInfo.input8" type="number"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购方式" prop="input9">
                <el-select v-model="formInfo.input9" placeholder="请选择采购方式" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购意向公开日期" prop="input10">
                <el-date-picker v-model="formInfo.input10" type="date" placeholder="请选择采购意向公开日期" :disabled="true">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购意向公告链接" prop="input11" placeholder="请输入采购意向公告链接" label-width="150px">
                <el-input v-model="formInfo.input11" type="text"  :disabled="true"/>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="" prop="input12">
                <div class="form-title" style="padding-left:20px;"><span><span style="color: red;">*</span> 是否面向中小微企：</span></div>
                <div class="radio-item" @click="setIndex(0)">
                  <div class="radio-class" :class="activeIndex == 0 ? 'active' : ''"></div>
                  <span>是:整体专门面向中小企业采购 (即100%)</span>
                </div>
                <div class="radio-item" @click="setIndex(1)">
                  <div class="radio-class " :class="activeIndex == 1 ? 'active' : ''"></div>
                  <span>否: 预留预算总额的货物类、服务类项目不低于30%，工程类项目不低于40%，由需求单位根据实际情况填写专门面向中小企业采购。</span>
                </div>
                <div class="radio-item-child" v-if="childRadioBool">
                  <div class="radio-item" @click="setChildIndex(0)">
                    <div class="radio-class " :class="childRadioIndex == 0 ? 'active' : ''"></div>
                    <span>采购项目整体或者设置采购包专门面向中小企业采购</span>
                  </div>
                  <div class="radio-item" @click="setChildIndex(1)">
                    <div class="radio-class " :class="childRadioIndex == 1 ? 'active' : ''"></div>
                    <span>供应商以联合体形式参加采购活动，联合体中中小企业承担预算总额的
                      <el-input style="width: 10%;" v-model="childInput1" size="small" type="number"></el-input>
                      %部分</span>
                  </div>
                  <div class="radio-item" @click="setChildIndex(2)">
                    <div class="radio-class " :class="childRadioIndex == 2 ? 'active' : ''"></div>
                    <span>获得采购合同的供应商将采购项目中的
                      <el-input style="width: 10%;" v-model="childInput2" size="small" type="number"></el-input>
                      %分包给一家或者多家中小企业</span>
                  </div>
                </div>
                <div class="radio-item" @click="setIndex(2)">
                  <div class="radio-class " :class="activeIndex == 2 ? 'active' : ''"></div>
                  <span>否:项目不适用专门面向中小企业，根据《政府采购促进中小企业发展管理办法》财库[2020] 46 号的规定，符合
                    下列情形之一的，可不专门面向中小企业预留采购份额。</span>
                </div>

              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购代理机构名称" prop="input13">
                <el-select v-model="formInfo.input13" placeholder="请选择采购代理机构名称" :disabled="true">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-form>
    </div>
</template>


<script> 
export default{
    data(){
        return{
            formInfo: {
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: "",
                input7: "",
                input8: "",
                input9: "",
                input10: "",
                input11: "",
                input12: "",
                input13: ''
            },
            rules: {
                input1: [
                    { required: true, message: '请选择需求单位', trigger: 'blur' },
                ],
                input2: [
                    { required: true, message: '请输入项目负责人', trigger: 'blur' },
                ],
                input3: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                input4: [
                    { required: true, message: '请输入项目名称', trigger: 'blur' },
                ],
                input5: [
                    { required: true, message: '请选择项目类型', trigger: 'blur' },
                ],
                input6: [
                    { required: true, message: '请输入项目编号', trigger: 'blur' },
                ],
                input7: [
                    { required: true, message: '请输入审计金额', trigger: 'blur' },
                ],
                input8: [
                    { required: true, message: '请输入预算金额', trigger: 'blur' },
                ],
                input9: [
                    { required: true, message: '请选择采购方式', trigger: 'blur' },
                ],
                input10: [
                    { required: true, message: '请选择日期', trigger: 'blur' },
                ],
                input11: [
                    { required: true, message: '请输入采购意向公告链接', trigger: 'blur' },
                ],
                input12: [
                    { required: true, message: '请选择是否面向中小微企', trigger: 'blur' },
                ],
                input13: [
                    { required: true, message: '请选择采购代理机构名称', trigger: 'blur' },
                ],
            },
            activeIndex: 0,
            childRadioBool: false,
            childRadioIndex: 0,
            childInput1: 0,
            childInput2: 0,
        }
    }
}
</script>


<style lang="scss" scoped>


.radio-item-child {
  padding-left: 20px;
}

.radio-item {
  display: flex;
  flex-direction: row;
  padding-left:20px;
  // align-items: center;
  cursor: pointer;

  span {
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
  }

  .radio-class {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    margin-top: 10px;
    margin-right: 10px;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform .15s ease-in;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: white;
    }

    &.active {
      background: #409eff;

      &::after {
        width: 5px;
        height: 5px;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}



.box {
  // padding-bottom: 35px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .box-left {
    display: flex;
    height: auto;
    background-color: white;
    max-width: 1000px;

    .form {
      min-width: 500px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      background-color: white;
      padding-bottom: 35px;

    }

    // max-width: 1100px;
    .step1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      padding: 74px 0 0 58px;
      margin-bottom: 37px;

      .item {
        font-size: 14px;
        color: #1D70FF;
        margin-right: 46px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 14px;
          margin-right: 15px;
        }

        span {
          margin-right: 18px;
        }

        div {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #1D70FF 0%, rgba(29, 112, 255, 0) 100%);
        }
      }

      .active {
        color: #A6A9BC;

        div {
          background: linear-gradient(90deg, #A6A9BC 0%, rgba(166, 169, 188, 0) 100%);
        }
      }
    }

  
  }

}
</style>
  