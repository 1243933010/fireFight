<template>
    <div style="height: 100%;">
        <div class="content">
            <div class="left">
                <div class="box">
                    <div class="item" v-for="(item, index) in treeList" :key="index">
                        <div class="title" @click="handleClick('parent', index)">
                            <span :class="index == parentInd ? 'active' : ''">{{ item.title }}</span>
                            <i v-if="item.children.length>0&&index !== parentInd" class="el-icon-arrow-right"></i>
                            <i v-if="item.children.length>0&&index == parentInd" class="el-icon-arrow-down"></i>

                        </div>
                        <div class="child">
                            <div class="item" v-for="(value, ind) in item.children" :key="ind">
                                <div class="title" @click="handleClick('child', ind, index)">
                                    <span :class="parentInd == index && childInd == ind ? 'active' : ''"> {{ value.title
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <el-form class="form" ref="form" size="small" inline :model="form" label-width="120px">
                    <el-form-item label="用户姓名" placeholder="请输入用户姓名">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="部门名称">
                        <el-select v-model="form.region" placeholder="请输入用户姓名">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="用户状态">
                        <el-select v-model="form.region" placeholder="请输入用户姓名">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="时间">
                        <el-date-picker v-model="form.region" type="daterange" range-separator="至" start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                        <!-- <el-button type="primary">重置</el-button> -->
                    </el-form-item>
                </el-form>
                <div style="margin-bottom: 10px;display: flex;flex-direction: row;padding-left: 50px;">
                    <div class="botton btn5" @click="addBtn">新增</div>
                    <div class="botton btn6" @click="addBtn">删除</div>
                    <div class="botton btn7" @click="addBtn">导出</div>
                </div>
                <div class="list">
                    <el-table :data="list" :header-cell-style="setTitle" style="width: 100%" border fit
                        highlight-current-row>
                        <el-table-column type="selection" width="45"></el-table-column>
                        <el-table-column type="index" label="序号" width="50"></el-table-column>
                        <el-table-column prop="title" label="姓名" width="100"></el-table-column>
                        <el-table-column prop="title" label="用户角色" width="80"></el-table-column>
                        <el-table-column prop="title" label="登录账号"></el-table-column>
                        <el-table-column prop="title" label="部门名称"></el-table-column>
                        <el-table-column prop="title" label="手机号"></el-table-column>
                        <el-table-column prop="title" label="状态"></el-table-column>
                        <el-table-column prop="title" label="创建时间"></el-table-column>
                        <el-table-column align="center" prop="created_at" label="操作" width="300">
                            <template slot-scope="scope">
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    <div class="btn btn1" @click="handleType(2)">编辑</div>
                                    <div class="btn btn2" @click="handleType(2)">删除</div>
                                    <div class="btn btn3" @click="handleType(2)">重置密码</div>
                                    <div class="btn btn4" @click="handleType(2)">分配角色</div>

                                </div>
                                <!-- <el-button style="background: #DCE3FD;color: #3E72FB;border: none;"  @click="handleType(2)" type="primary" size="small">编辑</el-button>
                        <el-button style="background: linear-gradient(0deg, #FC4835 0%, #FC6235 100%);color: #FEFEFF;" @click="handleType(3)"  type="primary" size="small">删除</el-button>
                        <el-button style="background: linear-gradient(0deg, #6280F5 0%, #2D6CFF 100%);color: #FEFEFF;" @click="handleType(1)" type="primary" size="small">详情</el-button> -->
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination style="text-align: right;" :current-page="paginationObj.page"
                        :page-sizes="[10, 20, 50, 100]" :page-size="paginationObj.pageSize" :total="paginationObj.total"
                        layout="total, sizes, prev, pager, next, jumper" @size-change="pageSizeChangeHandle"
                        @current-change="pageCurrentChangeHandle" />
                </div>

            </div>
        </div>
        <AddDialog  ref="add" />
    </div>
</template>



<script>
import AddDialog from './add.vue'
export default {
    components:{AddDialog},
    data() {
        return {
            treeList: [
                // {
                //     title: '支队机关各处室', id: 1,
                //     children: [
                //         { title: '办公室', id: 1, children: [] },
                //         { title: '指挥中心', id: 1, children: [] },
                //         { title: '作战训练处', id: 1, children: [] }]
                // },
                {
                    title: '深圳市消防救援支队', id: 1,
                    children: [
                        { title: '办公室', id: 1, children: [] },
                        { title: '指挥中心', id: 1, children: [] },
                        { title: '作战训练处', id: 1, children: [] },
                        { title: '信息通信处', id: 1, children: [] },
                        { title: '组织教育处', id: 1, children: [] },
                        { title: '人事处', id: 1, children: [] },
                        { title: '队务处', id: 1, children: [] },
                        { title: '法制与社会消防工作处', id: 1, children: [] },
                        { title: '重点保卫处', id: 1, children: [] },
                        { title: '新闻宣传处', id: 1, children: [] },
                        { title: '后勤装备处', id: 1, children: [] },
                        { title: '财务处', id: 1, children: [] },
                        { title: '战勤保障处', id: 1, children: [] },
                        { title: '采购办', id: 1, children: [] },
                        { title: '基建工作专班', id: 1, children: [] },
                        { title: '督察队', id: 1, children: [] },
                        { title: '应急通信与车辆勤务站', id: 1, children: [] },
                    ]
                },
                {
                    title: '深圳市消防救援支队特勤大队', id: 1,children: []
                },
                {
                    title: '深圳市消防救援支队大亚湾特勤大队', id: 1,children: []
                },
                {
                    title: '深圳市消防救援支队水上大队', id: 1,children: []
                },
                {
                    title: '深圳市福田区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市罗湖区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市南山区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市盐田区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市宝安区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市龙岗区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市龙华区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市光明区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市坪山区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市大鹏新区消防救援大队', id: 1,children: []
                },
                {
                    title: '深圳市深汕特别合作区消防救援大队', id: 1,children: []
                },
            ],
            parentInd: 0,
            childInd: 0,
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
        addBtn() {
            this.$refs.add.open();
        },
        setTitle({ rowIndex, columnIndex }) {
            return "background:#D2DFF9;color:#404659;font-size:14px;";
        },
        handleClick(type, index, parentInd) {
            if (type == 'parent') {
                this.parentInd = index;
                this.childInd = 0;
            } else {
                this.childInd = index;
                this.parentInd = parentInd
            }
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
    }
}
</script>


<style lang="scss" scoped>
.botton {
    width: 80px;
    height: 34px;
    background: #1D70FF;
    margin-right: 16px;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    width: 59px;
    height: 28px;
    background: #DCE3FD;
    color: #FFFFFF;
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

.btn4 {
    background: linear-gradient(0deg, #FFC22E 0%, #FF952E 100%);
    color: #FEFEFF;
}

.btn5 {
    background: #1D70FF;
    color: #FEFEFF;
}

.btn6 {
    background: linear-gradient(0deg, #FC4935 0%, #FC6235 100%);
    color: #FEFEFF;
}

.btn7 {
    background: #EAEDEC;
    color: #454D65;
}

.active {
    color: #2E6DFF;
}

.content {
    width: 98%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    

    .left {
        width: 310px;
        height: 100%;
        background-color: white;
        margin-right: 10px;
        padding-top: 26px;
        padding-left: 31px;
        color: #454D65;
        font-size: 14px;
        overflow-y: auto;

        .box {
            .item {
                margin-bottom: 10px;
                // font-size: 14px;
                .title {
                    cursor: pointer;
                    margin-bottom: 25px;

                    span {
                        margin-right: 12px;
                    }
                }

                .child {
                    padding-left: 20px;

                    .item {
                        cursor: pointer;
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }

    .right {
        min-width: 500px;
        flex-grow: 1;
        .form{
            padding-top: 20px;
            background-color: white;
            margin-bottom: 30px;
        }
        // background: green;
    }
}</style>