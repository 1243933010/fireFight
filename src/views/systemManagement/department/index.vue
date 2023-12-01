<template>
    <div>
        <div class="tab-icon">
            <img src="../../../assets/clock.png" alt="">
            <span>筛选</span>
        </div>
        <el-form class="form" ref="form" size="small" inline :model="form" label-width="120px">
            <el-form-item label="部门名称">
                <el-input v-model="form.name" placeholder="请输入部门名称" />
            </el-form-item>
            <el-form-item label="用户状态">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
                <!-- <el-button type="primary">重置</el-button> -->
            </el-form-item>
        </el-form>
        <div style="margin-bottom: 10px;padding-left: 40px;">
            <el-button size='small' @click="addBtn" type="primary">新增</el-button>
        </div>
        <div class="list">
            <el-table :data="list" :header-cell-style="setTitle" style="width: 100%" border fit highlight-current-row>
                <el-table-column type="index" label="序号" width="100"></el-table-column>
                <el-table-column prop="title" label="部门名称" width="180"></el-table-column>
                <el-table-column prop="title1" label="排序" width="180"></el-table-column>
                <el-table-column prop="title2" label="状态"></el-table-column>
                <el-table-column prop="title2" label="创建时间"></el-table-column>
                <el-table-column align="center" prop="created_at" label="操作" width="300">
                    <template slot-scope="scope">
                        <div style="display: flex;flex-direction: row;align-items: center;">
                            <div class="btn btn1" @click="handleType(2)">编辑</div>
                            <div class="btn btn2" @click="handleType(2)">删除</div>
                            <div class="btn btn3" @click="handleType(2)">重置密码</div>
                        </div>
                        <!-- <el-button style="background: #DCE3FD;color: #3E72FB;border: none;"  @click="handleType(2)" type="primary" size="small">编辑</el-button>
                        <el-button style="background: linear-gradient(0deg, #FC4835 0%, #FC6235 100%);color: #FEFEFF;" @click="handleType(3)"  type="primary" size="small">删除</el-button>
                        <el-button style="background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);color: #FEFEFF;" @click="handleType(1)" type="primary" size="small">详情</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination style="text-align: right;" :current-page="paginationObj.page" :page-sizes="[10, 20, 50, 100]"
                :page-size="paginationObj.pageSize" :total="paginationObj.total"
                layout="total, sizes, prev, pager, next, jumper" @size-change="pageSizeChangeHandle"
                @current-change="pageCurrentChangeHandle" />
        </div>

        <AddDialog ref="add" />
    </div>
</template>



<script>
// import Pagination from '@/components/Pagination'
import AddDialog from './add.vue'
export default {
    components:{AddDialog},
    data() {
        return {
            form: {
                name: '',
                region: ''
            },
            list: [
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
            ],
            paginationObj: {
                page: 1,
                pageSize: 10,
                total: 200
            }
        }
    },
    methods: {
        setTitle({ rowIndex, columnIndex }) {
            return "background:#D2DFF9;color:#404659;font-size:14px;";
        },
        async query() {

        },
        addBtn(){
            this.$refs.add.open();
        },
        onSubmit() {
            this.$message('submit!')
        },
        onCancel() {
            this.$message({
                message: 'cancel!',
                type: 'warning'
            })
        },
        openDetail(item) {
            console.log(item)
        },
        // 分页, 每页条数
        pageSizeChangeHandle(val) {
            this.page = 1
            this.pageSize = val
            this.query()
        },
        // 分页, 当前页
        pageCurrentChangeHandle(val) {
            this.page = val
            this.query()
        },
        handleType(type) {
            this.$router.push({ name: 'messageNotificationEdit', params: { id: 1 } })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/btn.scss";
.btn {
    width: 59px;
    height: 28px;
    background: #DCE3FD;
    border-radius: 4px;
    margin-right: 16px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn1 {
    background: #DCE3FD;
    color: #3E72FB;
}

.btn2 {
    background: linear-gradient(0deg, #FC4835 0%, #FC6235 100%);
    color: #FEFEFF;
}

.btn3 {
    background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);
    color: #FEFEFF;
}

.form {
    background-color: white;
    padding: 0 0 36px 0;
    margin-bottom: 21px;
}

.list {
    width: 100%;
    height: 100%;
    background-color: #EBEFFE;
    // padding: 0 30px;

    // box-sizing: border-box;

    .list-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .item {
        background-color: white;
        border-radius: 20px;
        width: 100%;

        .item-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 15px;
        }

        .item-con {
            display: flex;
            justify-content: space-between;

            .item-con-left {

                font-size: 20px;

                .item-con-left-o,
                .item-con-left-t {
                    // margin-right: 25px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;

                    div {
                        min-width: 250px;
                        margin-right: 25px;
                    }
                }

                // font-weight: 600;
            }

            .item-con-right {
                display: flex;
                flex-direction: row;
                align-items: center;

                div {
                    margin: 0 5px;
                }
            }
        }
    }
}</style>