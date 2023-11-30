<template>
  <div class="step">
    <ul class="step-list">
      <div class="line">
        <div class="done" :style="`height: ${stepCount * 53}px`"></div>
        <div
          class="doing"
          :style="`height: calc(100% - ${stepCount * 53}px)`"
        ></div>
      </div>
      <li
        class="step-item"
        v-for="(item, index) in stepList"
        :key="index"
        :class="{ undone: item.isActive, done: item.isInput }"
      >
        <div class="space-box" v-if="index !== stepList.length - 1"></div>
        <div class="step-text">
          <div class="icon">
            <img src="../assets/gou.png" class="img" />
          </div>
          <div class="text">{{ item.title }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    stepList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      stepH: 53,
      stepCount: 0,
      isOver: false,
    };
  },
  mounted() {},
  watch: {
    stepList: {
      handler(newArray) {
        for (let i = 0; i < newArray.length; i++) {
          this.stepCount = i;
          if (!(!newArray[i].isActive && newArray[i].isInput)) {
            break;
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 50%;
  flex-grow: 1;

  .step-list {
    margin: 0;
    padding: 0;
    position: relative;

    .step-item {
      margin: 0;
      padding: 0;
      list-style: none;
      position: relative;
      z-index: 1;

      .step-text {
        display: flex;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;

        .icon {
          margin-right: 8px;
          border-radius: 50%;
          border: 2px solid #a6a9bc;
          padding: 3px;
          width: 16px;
          height: 16px;
          background-color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 10px;
          }
        }

        .text {
          font-size: 14px;
          color: #404659;
        }
      }

      &.done {
        .step-text {
          .icon {
            background-color: #3961f8;
            border: none;
          }
        }
      }

      &.undone {
        .step-text {
          .icon {
            border-color: #3961f8;
          }
        }
      }

      &:last-child {
        .step-text {
          position: static;
        }
      }

      .space-box {
        width: 100%;
        height: 53px;
      }
    }

    .line {
      width: 3px;
      height: 100%;

      position: absolute;
      top: 0;
      left: 6px;

      .done {
        background: linear-gradient(0deg, #3958f8 0%, #378cf7 100%);
        height: 0;
        transition: height 0.5s;
      }

      .doing {
        height: 100%;
        background: #eaedec;
        transition: height 0.5s;
      }
    }
  }
}
</style>
