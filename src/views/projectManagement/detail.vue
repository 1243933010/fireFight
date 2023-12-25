<template>
  <div style="height: auto">
    <div class="box">
      <div class="box-left">
        <div class="steps">
          <Steps :stepList="stepList" />
        </div>
        <div class="form">
          <div class="step1">
            <div class="item" :class="index !== 0 ? 'active' : ''" v-for="(item, index) in stepsList" :key="index">
              <img v-if="index == 0" src="../../assets/step_icon_check.png" alt="" srcset="">
              <img v-if="index !== 0" src="../../assets/step_icon.png" alt="" srcset="">
              <span>{{ item.title }}</span>
              <div></div>
            </div>
          </div>

          <BasicMsg :disabled="true" />
          
          <ImplementationCommissionInfo v-if="formInfo.status>=6" />

            <div  v-if="formInfo.status>=11">
              <div class="background-icon">
            <span class="title">招标</span>
          </div>
          <thirdCom />
            </div>


           <div  v-if="formInfo.status>=18">
            <div class="background-icon">
            <span class="title">开标</span>
          </div>
          <startCom />
           </div>
          <div v-if="formInfo.status>=24">
            <div class="background-icon">
            <span class="title">中标</span>
          </div>
          <successfulBidder />
          </div>

            
            
          <div class="btnn">
            <div class="btn2" @click="auditFnc" v-if="formInfo.status==1" v-permission="['department_auditor']">初审</div>
            <div class="btn2" @click="auditFncEnd" v-if="formInfo.status==3" v-permission="['procure_auditor']">终审</div>
          </div>
        </div>
      </div>
      <div class="box-right">
          <div class="file-form">
            <AnnexCom />

            <div class="background-icon">
            <span class="title">合同列表</span>
          </div>
            <contractCom  v-if="formInfo.status>=31" />
        </div>
      </div>
    </div>
    <checkDialog ref="checkDialog" title="初审"  @auditEmit="auditEmit" :radioList="[{label:'通过',value:3},{label:'拒绝',value:2}]" />
    <checkDialog ref="checkDialogEnd" title="终审"  @auditEmit="auditEmitEnd" :radioList="[{label:'通过',value:5},{label:'拒绝',value:4}]" />
  </div>
</template>


<script>



import Steps from "@/components/steps.vue";
import { addMixins } from './mixins'
import AnnexCom from './annex.vue'
import BasicMsg from './basicMsg.vue'
import { mapState, mapGetters } from 'vuex'
import { projectEdit,projectDetail,projectAudit } from "@/api/project";
import checkDialog from '@/components/checkDialog.vue'
import ImplementationCommissionInfo from './ImplementationCommissionInfo.vue'
import thirdCom from './thirdCom.vue'
import startCom from './start.vue'
import successfulBidder from './successfulBidder.vue'
import contractCom from './contractCom.vue'


export default {
  mixins: [addMixins],
  components: { Steps, AnnexCom, BasicMsg,checkDialog,ImplementationCommissionInfo,thirdCom,startCom,successfulBidder,contractCom },
  data() {
    return {

    };
  },

  mounted() {
    let route = this.$route;
    console.log( this.$store.getters)
    this.getDetail(route.query.id);
  },
  computed: {
    // ...mapGetters([
    //   'stepList'
    // ]),
    formInfo(){
      console.log( this.$store.state.projectManagementAdd.formInfo)
      return this.$store.state.projectManagementAdd.formInfo
    }
  },
  methods: {
    async getDetail(id){
      let res = await projectDetail(id);
      // console.log(res.data.attachments_content,JSON.parse(res.data.small_company))
      if(res.code==200){
        this.$store.commit('projectManagementAdd/UPDATE_RADIOLABELLIST',JSON.parse(res.data.small_company));
        this.$store.commit('projectManagementAdd/UPDATE_FORMINFO',{...res.data,input12:'true'});
        this.$store.commit('projectManagementAdd/UPDATE_PROJECT_ATTACHMENTS',res.data.project_attachments0);
        if(res.data.status>6){
          this.$store.commit(
          "projectManagementAdd/update_ImplementationCommissionForm",
          {type:'form',
          data:res.data.agent_id});
        }
        
        if(res.data.status>11){
            //招标信息替换
            let data = {
            ...res.data.bid_info,
            bid_file_issue:res.data.bid_file_issue,
            bid_publish_photo:res.data.bid_publish_photo,
            bid_register_file:res.data.bid_register_file,
            project_attachments:res.data.project_attachments1}
          this.$store.commit(
          "projectManagementAdd/update_bidBaseProject", data);
        }
        if(res.data.status>=18){
          this.$store.commit(
          "projectManagementAdd/update_startData_bid_files_list",  res.data.bid_files_list);
          this.$store.commit(
          "projectManagementAdd/update_startData_bid_units", res.data.bid_units);
          this.$store.commit(
          "projectManagementAdd/update_startData_project_attachments", res.data.project_attachments2);
        }
        if(res.data.status>=24){
          let data1 = {
            ...res.data.bid_info,
            bid_success_photo:res.data.bid_success_photo,
            bid_success_notice:res.data.bid_success_notice,
          }
          data1.project_attachments = res.data.project_attachments3
          this.$store.commit(
          "projectManagementAdd/update_resultData",data1);
        }
        if(res.data.status>=31){
        this.$store.commit(
          "projectManagementAdd/update_contractList",
          res.data.contract
        );
      }
      }
    },
    async auditFnc(){
      this.$refs.checkDialog.openDialog(true)
    },
    async auditFncEnd(){
      this.$refs.checkDialogEnd.openDialog(true)
    },
    async auditEmit(e){
      console.log(e)
      let res = await projectAudit({id:this.$store.state.projectManagementAdd.formInfo.id,status:e.status});
      console.log(res)
      if(res.code==200){
        this.$message.success(res.msg);
        this.$router.go(-1)
        return
      }
      this.$message.error(res.msg);
    },
    async auditEmitEnd(e){
      console.log(e)
      let res = await projectAudit({id:this.$store.state.projectManagementAdd.formInfo.id,status:e.status});
      console.log(res)
      if(res.code==200){
        this.$message.success(res.msg);
        this.$router.go(-1)
        return
      }
      this.$message.error(res.msg);
    },
    // async submitFnc() {
    // console.log(this.$store.state.user)
    //   let state = this.$store.state.projectManagementAdd;
    //   let form = {...state.formInfo};
    //   form.project_attachments = state.project_attachments
    //   form.radioLabelList = state.radioLabelList;
    //   form.small_company = JSON.stringify(state.radioLabelList)
    //   console.log(form)
     
    //   let bool = false;
    //    this.$refs.basicMsg.verifyForm((bools)=>{
    //     bool = bools
    //   })
    //   console.log(bool,'===')
    //   let fileBool = true;
    //   this.$store.state.projectManagementAdd.project_attachments.forEach((val)=>{
    //     if(val.files.length==0){
    //       fileBool = false;
    //     }
    //   })
    //   if(!bool){
    //     this.$message.error('表单必须填写')
    //     return
    //   }
    //   if(!fileBool){
    //     this.$message.error('附件必须上传')
    //     return
    //   }
    //   console.log(form);
      // let res = await projectEdit(form);
      // console.log(res)
      // if(res.code==200){
      //   this.$message.success(res.msg);
      //   this.$router.go(-1)
      //   return
      // }
      // this.$message.error(res.msg);
    // },

  },
};
</script>

<style lang="scss" scoped>
.background-icon {
  width: 300px;
  height: 29px;
  margin-left: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
  background: url("../../assets/background_icon.png") no-repeat 100% 100%;
  padding-top: 5px;

  .title {
    padding-left: 9px;
    color: white;
    font-size: 14px;
  }
}

.radio-item-child {
  padding-left: 20px;
}

.radio-item {
  display: flex;
  flex-direction: row;
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

.btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btnn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

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
    color: #3E72FB;
  }

  .btn2 {
    background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);
    color: #FEFEFF;
  }

  .btn3 {
    background: white;
    border: 1px solid #A7AABD;
    color: #404659;
  }

  .btn4 {
    background: linear-gradient(0deg, #6080F6 0%, #2D6CFF 100%);
    color: #FEFEFF;
  }

  .btn5 {
    background: linear-gradient(0deg, #FC6235 0%, #FC4935 100%);
    color: #FEFEFF;
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

    .steps {
      margin-left: 2px;
      box-sizing: border-box;
      padding: 0px 16px 0;
      // width: 148px;
      height: auto;
      background-color: #fff;
      // border-right: 1px solid #EAEDEC;
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 42px;

        .icon {
          width: 14px;
          margin-right: 8px;

          img {
            width: 100%;
          }
        }

        span {
          color: #404659;
          font-size: 16px;
        }
      }
    }
  }

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
}</style>
