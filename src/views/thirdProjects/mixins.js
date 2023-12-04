export const addMixins = {
    data() {
        return {
            stepsList: [
                { title: '项目信息录入' },
                { title: '实施委托' },
                { title: '开评标' },
                { title: '完成' },
            ],
           
            
           
            
           
           
            startForm:{
                fileList1:[],
                fileList2:[],
                fileList3:[],
                fileList4:[],
                fileList5:[],
                fileList6:[],
                fileList7:[],
                fileList8:[],
                fileList9:[],
            }
        }
    },
    computed: {
        stepList() {
            return [
                {
                    title: "基本信息",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "三方基本信息录入",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "开标",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "投标单位",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "中标单位",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "中标公告",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "附件",
                    isInput: true,
                    isActive: true,
                },
                // {
                //     title: "项目负责人",
                //     isInput: this.formInfo.input2,
                //     isActive: !this.formInfo.input2 && this.formInfo.input3,
                // },
                // {
                //     title: "联系电话",
                //     isInput: this.formInfo.input3,
                //     isActive: !this.formInfo.input3 && this.formInfo.input4,
                // },
                // {
                //     title: "项目名称",
                //     isInput: this.formInfo.input4,
                //     isActive: !this.formInfo.input4 && this.formInfo.input5,
                // },
                // {
                //     title: "项目类型",
                //     isInput: this.formInfo.input5,
                //     isActive: !this.formInfo.input5 && this.formInfo.input6,
                // },
                // {
                //     title: "项目编号",
                //     isInput: this.formInfo.input6,
                //     isActive: !this.formInfo.input6 && this.formInfo.input7,
                // },
                // {
                //     title: "审计金额",
                //     isInput: this.formInfo.input7,
                //     isActive: !this.formInfo.input7 && this.formInfo.input8,
                // },
                // {
                //     title: "预算金额",
                //     isInput: this.formInfo.input8,
                //     isActive: !this.formInfo.input8 && this.formInfo.input9,
                // },
                // {
                //     title: "采购方式",
                //     isInput: this.formInfo.input9,
                //     isActive: !this.formInfo.input9 && this.formInfo.input10,
                // },
                // {
                //     title: "采购意向公开日期",
                //     isInput: this.formInfo.input10,
                //     isActive: !this.formInfo.input10 && this.formInfo.input11,
                // },
                // {
                //     title: "采购意向公告链接",
                //     isInput: this.formInfo.input11,
                //     isActive: !this.formInfo.input11 && this.formInfo.input12,
                // },
                // {
                //     title: "是否面向中小微企",
                //     isInput: this.formInfo.input12,
                //     isActive: !this.formInfo.input12 && this.formInfo.input13,
                // },
                // {
                //     title: "采购代理机构名称",
                //     isInput: this.formInfo.input13,
                //     isActive: !this.formInfo.input13 && (this.fileForm.input1 || this.fileForm.fileList1.length > 0),
                // },

                // // {
                // //     title: "采购代理机构名称",
                // //     isInput: this.formInfo.input13,
                // //     isActive: !this.formInfo.input12 && (this.fileForm.input1||this.fileForm.fileList1.length>0),
                // // },
                // {
                //     title: "支队/大队采购例会",
                //     isInput: this.fileForm.input1 || this.fileForm.fileList1.length > 0,
                //     isActive: (!this.fileForm.input1 && this.fileForm.fileList1.length == 0) && (this.fileForm.input2 || this.fileForm.fileList2.length > 0),
                // },
                // {
                //     title: "委托招标函",
                //     isInput: this.fileForm.input2 || this.fileForm.fileList2.length > 0,
                //     isActive: (!this.fileForm.input2 && this.fileForm.fileList2.length == 0) && (this.fileForm.input3 || this.fileForm.fileList3.length > 0),
                // },
                // {
                //     title: "参与评审专家信息",
                //     isInput: this.fileForm.input3 || this.fileForm.fileList3.length > 0,
                //     isActive: (!this.fileForm.input3 && this.fileForm.fileList3.length == 0) && (this.fileForm.input4 || this.fileForm.fileList4.length > 0),
                // },

                // {
                //     title: "举报/质疑/投诉",
                //     isInput: this.fileForm.input4 || this.fileForm.fileList4.length > 0,
                //     isActive: (!this.fileForm.input4 && this.fileForm.fileList4.length == 0) && (this.fileForm.input5 || this.fileForm.fileList5.length > 0),
                // },
                // {
                //     title: "采购文件确认函",
                //     isInput: this.fileForm.input5 || this.fileForm.fileList5.length > 0,
                //     isActive: false,
                // },
            ]

        },
    },
}