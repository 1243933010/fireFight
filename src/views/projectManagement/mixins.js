export const addMixins = {
    data() {
        return {
            stepsList: [
                { title: '项目信息录入' },
                { title: '实施委托' },
                { title: '开评标' },
                { title: '完成' },
            ],

        }
    },
    computed: {
        stepList() {
            return [
                {
                    title: "需求单位",
                    isInput: this.$store.state.projectManagementAdd.formInfo.demand_department_id,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.demand_department_id && this.$store.state.projectManagementAdd.formInfo.project_leader,
                },
                {
                    title: "项目负责人",
                    isInput: this.$store.state.projectManagementAdd.formInfo.project_leader,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.project_leader && this.$store.state.projectManagementAdd.formInfo.contact_phone,
                },
                {
                    title: "联系电话",
                    isInput: this.$store.state.projectManagementAdd.formInfo.contact_phone,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.contact_phone && this.$store.state.projectManagementAdd.formInfo.name,
                },
                {
                    title: "项目名称",
                    isInput: this.$store.state.projectManagementAdd.formInfo.name,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.name && this.$store.state.projectManagementAdd.formInfo.type,
                },
                {
                    title: "项目类型",
                    isInput: this.$store.state.projectManagementAdd.formInfo.type,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.type && this.$store.state.projectManagementAdd.formInfo.no,
                },
                {
                    title: "项目编号",
                    isInput: this.$store.state.projectManagementAdd.formInfo.no,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.no && this.$store.state.projectManagementAdd.formInfo.audit_amount,
                },
                {
                    title: "审计金额",
                    isInput: this.$store.state.projectManagementAdd.formInfo.audit_amount,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.audit_amount && this.$store.state.projectManagementAdd.formInfo.budget,
                },
                {
                    title: "预算金额",
                    isInput: this.$store.state.projectManagementAdd.formInfo.budget,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.budget && this.$store.state.projectManagementAdd.formInfo.procurement_method,
                },
                {
                    title: "采购方式",
                    isInput: this.$store.state.projectManagementAdd.formInfo.procurement_method,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.procurement_method && this.$store.state.projectManagementAdd.formInfo.public_date,
                },
                {
                    title: "采购意向公开日期",
                    isInput: this.$store.state.projectManagementAdd.formInfo.public_date,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.public_date && this.$store.state.projectManagementAdd.formInfo.notice_link,
                },
                {
                    title: "采购意向公告链接",
                    isInput: this.$store.state.projectManagementAdd.formInfo.notice_link,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.notice_link && this.$store.state.projectManagementAdd.formInfo.input12,
                },
                {
                    title: "是否面向中小微企",
                    isInput: this.$store.state.projectManagementAdd.formInfo.input12,
                    isActive: !this.$store.state.projectManagementAdd.formInfo.input12 && (this.$store.state.projectManagementAdd.fileForm.demand_department_id || this.$store.state.projectManagementAdd.fileForm.fileList1.length > 0),
                },
                {
                    title: "采购意向",
                    isInput: this.$store.state.projectManagementAdd.fileForm.demand_department_id || this.$store.state.projectManagementAdd.fileForm.fileList1.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.demand_department_id && this.$store.state.projectManagementAdd.fileForm.fileList1.length == 0) && (this.$store.state.projectManagementAdd.fileForm.project_leader || this.$store.state.projectManagementAdd.fileForm.fileList2.length > 0),
                },
                {
                    title: "纪保预算审核报告书",
                    isInput: this.$store.state.projectManagementAdd.fileForm.project_leader || this.$store.state.projectManagementAdd.fileForm.fileList2.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.project_leader && this.$store.state.projectManagementAdd.fileForm.fileList2.length == 0) && (this.$store.state.projectManagementAdd.fileForm.contact_phone || this.$store.state.projectManagementAdd.fileForm.fileList3.length > 0),
                },
                {
                    title: "采购需求",
                    isInput: this.$store.state.projectManagementAdd.fileForm.contact_phone || this.$store.state.projectManagementAdd.fileForm.fileList3.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.contact_phone && this.$store.state.projectManagementAdd.fileForm.fileList3.length == 0) && (this.$store.state.projectManagementAdd.fileForm.name || this.$store.state.projectManagementAdd.fileForm.fileList4.length > 0),
                },

                {
                    title: "实施计划",
                    isInput: this.$store.state.projectManagementAdd.fileForm.name || this.$store.state.projectManagementAdd.fileForm.fileList4.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.name && this.$store.state.projectManagementAdd.fileForm.fileList4.length == 0) && (this.$store.state.projectManagementAdd.fileForm.type || this.$store.state.projectManagementAdd.fileForm.fileList5.length > 0),
                },
                {
                    title: "审查意见书",
                    isInput: this.$store.state.projectManagementAdd.fileForm.type || this.$store.state.projectManagementAdd.fileForm.fileList5.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.type && this.$store.state.projectManagementAdd.fileForm.fileList5.length == 0) && (this.$store.state.projectManagementAdd.fileForm.no || this.$store.state.projectManagementAdd.fileForm.fileList6.length > 0),
                },
                {
                    title: "大队党委会",
                    isInput: this.$store.state.projectManagementAdd.fileForm.no || this.$store.state.projectManagementAdd.fileForm.fileList6.length > 0,
                    isActive: (!this.$store.state.projectManagementAdd.fileForm.no && this.$store.state.projectManagementAdd.fileForm.fileList6.length == 0) && (this.$store.state.projectManagementAdd.fileForm.audit_amount || this.$store.state.projectManagementAdd.fileForm.fileList7.length > 0),
                },
                {
                    title: "支队党委会",
                    isInput: this.$store.state.projectManagementAdd.fileForm.audit_amount || this.$store.state.projectManagementAdd.fileForm.fileList7.length > 0,
                    isActive: false,
                }
            ]
        }
    }

}