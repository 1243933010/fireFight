<template>
  <div style="height: auto">
    <div class="box">
      <div class="box-left">
        <div class="steps">
          <Steps :stepList="stepList" />
        </div>
        <div class="form">
          <div class="background-icon">
            <span class="title">基本信息</span>
          </div>

          <BasicMsg :disabled="true" />

          <!-- 三方基本信息录入 -->
          <div class="background-icon">
            <span class="title">招标</span>
          </div>

          <ThirdCom />
          <!-- 开标 -->
          <div class="background-icon">
            <span class="title">开评标</span>
          </div>
          <!-- <div></div> -->
          <div style="padding-left: 30px;">

            <StartCom />
          </div>

            <!-- <BidCom /> -->

             <!-- 中标单位 -->
          <div class="background-icon">
            <span class="title">中标</span>
          </div>
          <div style="padding-left: 30px;">

            <SuccessfulBidder />
          </div>
          <div class="btnn">
            <!-- <div class="btn1">取消</div> -->
            <div class="btn2">提交</div>
            <div class="btn3">保存草稿</div>
            <!-- <div class="btn4">通过</div> -->
            <!-- <div class="btn5">驳回</div> -->
          </div>
        </div>
      </div>
      <!-- <AnnexCom /> -->
      <div></div>
    </div>
  </div>
</template>
  
<script>
import Steps from "@/components/steps.vue";
import { addMixins } from './mixins'
import BasicMsg from './editCom/basicMsg.vue'
import ThirdCom from './editCom/thirdCom.vue'
import StartCom from './editCom/start.vue'
import AnnexCom from './editCom/annex.vue'
// import BidCom from './editCom/bid.vue'
import SuccessfulBidder from './editCom/successfulBidder.vue'
import {
  projectDetail,
  agentList,
  saveImplement,
  submitImplement,
  projectAudit
} from "@/api/project";
export default {
  mixins: [addMixins],
  components: { Steps, BasicMsg, ThirdCom, StartCom, AnnexCom,SuccessfulBidder},
  data() {
    return {

    };
  },

  mounted() { 
    let route = this.$route;
    this.getDetail(route.params.id);
    this.getAgentList();
  },
  methods: {
    async getDetail(id) {
      let res = await projectDetail(id);
      if (res.code == 200) {
        this.$store.commit("thirdProjects/UPDATE_FORMINFO", {
          ...res.data,
          input12: "true",
        });
        this.$store.commit(
          "thirdProjects/UPDATE_PROJECT_ATTACHMENTS",
          res.data.attachments_content
        );
        this.$store.commit(
          "thirdProjects/UPDATE_RADIOLABELLIST",
          JSON.parse(res.data.small_company)
        );
        this.$store.commit(
          "thirdProjects/update_ImplementationCommissionForm",{type:'file',
          data:res.data.agent_check_videos}
        );
        this.$store.commit(
          "thirdProjects/update_ImplementationCommissionForm",
          {type:'form',
          data:res.data.agent_id});
      }
    },
    async getAgentList() {
      let res = await agentList();
      // console.log(res)
      if (res.code == 200) {
        this.agentArr = res.data;
      }
    },


  },
};
</script>
  
<style lang="scss" scoped>
@import url('./mixins.scss');


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


}
</style>
  