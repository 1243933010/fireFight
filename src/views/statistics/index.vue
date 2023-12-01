<template>
  <div class="statistics-pages">
    <div class="filter-content">
      <div class="module-tit">
        <div class="icon">
          <img src="../../assets/liucheng.png" class="img" />
        </div>
        <div class="text">筛选内容</div>
      </div>

      <div class="form">
        <div class="label-input">
          <label for="projectName">项目名称</label>
          <div class="input-box">
            <input
              type="text"
              placeholder="请输入项目名称"
              name="projectName"
            />
            <div class="icon icon-search">
              <img src="../../assets/search.png" />
            </div>
          </div>
        </div>
        <div class="label-input">
          <label for="projectName">项目名称</label>
          <div class="input-box">
            <input
              type="text"
              placeholder="请输入项目名称"
              name="projectName"
            />
            <div class="icon icon-triangle">
              <img src="../../assets/triangle.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
input {
  margin: 0;
  outline: 0;
  border: 0;
  padding: 0;
  background-color: transparent;

  &::placeholder {
    color: #a6a9bc;
  }
}

.icon {
  width: 14px;
  font-size: 0;

  .img {
    width: 100%;
  }
}

.statistics-pages {
  .filter-content {
    padding: 20px 38px 20px 20px;
    background-color: #fff;

    .module-tit {
      display: flex;
      align-items: center;

      .text {
        font-size: 16px;
        color: #454d65;
      }
    }

    .form {
        display: flex;
        flex-wrap: wrap;

      .label-input {
        display: flex;
        align-items: center;
        width: 25%;

        label {
          font-size: 14px;
          color: #404659;
        }

        .input-box {
          display: flex;
          align-items: center;

          border-radius: 4px;
          border: 1px solid #eaedec;
          padding: 12px 20px 12px 12px;
          color: #404659;

          input {
            font-size: 14px;
          }

          .icon-search {
            width: 14px;
          }

          .icon-triangle {
            width: 14px;
          }
        }
      }
    }
  }
}
</style>
