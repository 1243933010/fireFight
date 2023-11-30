<template>
  <div style="height: 100%">
    <div class="box">
      <div class="box-left">
        <div class="steps">
          <div class="title">
            <div class="icon">
              <img src="../../assets/liucheng.png" srcset="" />
            </div>
            <span>流程指引</span>
          </div>
          <Steps :stepList="stepList" />
        </div>
        <div class="form">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input
                v-model="formInline.user"
                placeholder="审批人"
              ></el-input>
            </el-form-item>
            <el-form-item label="审批人1">
              <el-input
                v-model="formInline.user1"
                placeholder="审批人1"
              ></el-input>
            </el-form-item>
            <el-form-item label="审批人2">
              <el-input
                v-model="formInline.user2"
                placeholder="审批人2"
              ></el-input>
            </el-form-item>
            <el-form-item label="审批人3">
              <el-input
                v-model="formInline.user3"
                placeholder="审批人3"
              ></el-input>
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
import Steps from "@/components/steps.vue";
export default {
  components: { Steps },
  data() {
    return {
      formInline: {
        user: undefined,
        user1: undefined,
        user2: undefined,
        user3: undefined,
        region: undefined,
      },
    };
  },
  computed: {
    stepList() {
      return [
        {
          title: "审批人",
          isInput: this.formInline.user,
          isActive: !this.formInline.user && this.formInline.user1,
        },
        {
          title: "审批人1",
          isInput: this.formInline.user1,
          isActive: !this.formInline.user1 && this.formInline.user2,
        },
        {
          title: "审批人2",
          isInput: this.formInline.user2,
          isActive: !this.formInline.user2 && this.formInline.user3,
        },
        {
          title: "审批人3",
          isInput: this.formInline.user3,
          isActive: !this.formInline.user3 && this.formInline.region,
        },
        {
          title: "活动区域",
          isInput: this.formInline.region,
          isActive: false,
        },
      ];
    },
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding-bottom: 35px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .box-left {
    display: flex;
    height: 100%;

    .steps {
      margin-left: 2px;
      padding: 20px 16px 0;
      width: 138px;
      height: 100%;
      background-color: #fff;

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
