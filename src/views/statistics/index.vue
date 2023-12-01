<template>
	<div class="statistics-pages">
		<div class="filter-content">
			<div class="module-tit">
				<div class="icon" style="width: 14px">
					<img src="../../assets/liucheng.png" class="img" />
				</div>
				<div class="text">筛选内容</div>
			</div>
			<!-- :rules="loginRules" -->
			<el-form ref="loginForm" :model="projectInfo" class="form">
				<el-form-item label="项目名称" class="label-input">
					<el-input v-model="projectInfo.projectName" placeholder="请输入项目名称"></el-input>
				</el-form-item>

				<el-form-item label="项目类型" class="label-input">
					<el-select v-model="projectInfo.projectType" placeholder="请选择项目类型">
						<el-option label="类型一" value="types1"></el-option>
						<el-option label="类型二" value="types2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="部门名称" class="label-input">
					<el-select v-model="projectInfo.department" placeholder="请选择部门名称">
						<el-option label="部门一" value="types1"></el-option>
						<el-option label="部门二" value="types2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="审核状态" class="label-input">
					<el-select v-model="projectInfo.reviewStatus" placeholder="请选择审核状态">
						<el-option label="状态一" value="types1"></el-option>
						<el-option label="状态二" value="types2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="采购方式" class="label-input">
					<el-select v-model="projectInfo.procurementMethod" placeholder="请选择采购方式">
						<el-option label="方式一" value="types1"></el-option>
						<el-option label="方式二" value="types2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="申请时间" class="label-input">
					<el-date-picker v-model="projectInfo.time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</el-form-item>

				<el-button type="primary" class="search-btn" @click="searchHandle">搜索</el-button>
			</el-form>
		</div>

		<div class="module-tit" style="margin-top: 30px">
			<div class="icon" style="width: 20px">
				<img src="../../assets/count.png" class="img" />
			</div>
			<div class="text">统计分析表</div>
		</div>

		<div class="list">
			<el-table :data="list" :header-cell-style="setTitle" style="width: 100%" border fit highlight-current-row>
				<el-table-column type="selection" width="45"></el-table-column>
				<el-table-column type="index" label="序号" width="50"></el-table-column>
				<el-table-column prop="title" label="项目编号" width="100"></el-table-column>
				<el-table-column prop="title1" label="项目名称" width="80"></el-table-column>
				<el-table-column prop="title2" label="项目类型"></el-table-column>
				<el-table-column prop="title3" label="采购方式"></el-table-column>
				<el-table-column prop="title4" label="需求部门"></el-table-column>
				<el-table-column prop="title5" label="预算金额"></el-table-column>
				<el-table-column prop="title6" label="审计金额"></el-table-column>
				<el-table-column prop="title7" label="中标金额"></el-table-column>
				<el-table-column prop="title8" label="采购日期"></el-table-column>
			</el-table>
			<el-pagination
				style="text-align: right"
				:current-page="paginationObj.page"
				:page-sizes="[10, 20, 50, 100]"
				:page-size="paginationObj.pageSize"
				:total="paginationObj.total"
				layout="total, sizes, prev, pager, next, jumper"
				@size-change="pageSizeChangeHandle"
				@current-change="pageCurrentChangeHandle"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projectInfo: {
				projectName: '',
				projectType: '',
				department: '',
				reviewStatus: '',
				procurementMethod: '',
				time: ''
			},
            list: [
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
                { title: '项目编号', title1: '项目名称', title2: '项目类型', title3: '采购方式', title4: '需求部门', title5: '预算金额', title6: '审计金额', title7: '中标金额', title8: '采购日期' },
            ],
            paginationObj: {
                page: 1,
                pageSize: 10,
                total: 200
            }
		};
	},
	methods: {
		searchHandle() {},
		setTitle({ rowIndex, columnIndex }) {
			return 'background:#D2DFF9;color:#404659;font-size:14px;';
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
	font-size: 0;

	.img {
		width: 100%;
	}
}

.module-tit {
	margin-bottom: 20px;
	display: flex;
	align-items: center;

	.text {
		margin-left: 8px;
		font-size: 16px;
		color: #454d65;
		font-weight: bold;
	}
}

.statistics-pages {
	.filter-content {
		padding: 20px 38px 0 20px;
		background-color: #fff;

		.form {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.label-input {
				margin-right: 60px;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				&.time {
					::v-deep & > .el-form-item__content {
						display: flex;
						align-items: center;
					}
					.zhi {
						margin-left: 10px;
						margin-right: 10px;
					}
				}
			}

			.search-btn {
				margin-bottom: 22px;
			}
		}
	}
}
</style>
