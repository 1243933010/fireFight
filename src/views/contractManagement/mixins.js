export const addMixins = {
    data() {
        return {
            stepsList: [
                { title: '项目信息录入' },
                { title: '实施委托' },
                { title: '开评标' },
                { title: '完成' },
            ],
            formInfo: {
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: "",
                input7: "",
                input8: "",
                input9: "",
                input10: "",
                input11: "",
                input12: "",
            },
            rules: {
                input1: [
                    { required: true, message: '请选择需求单位', trigger: 'blur' },
                ],
                input2: [
                    { required: true, message: '请输入项目负责人', trigger: 'blur' },
                ],
                input3: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                input4: [
                    { required: true, message: '请输入项目名称', trigger: 'blur' },
                ],
                input5: [
                    { required: true, message: '请选择项目类型', trigger: 'blur' },
                ],
                input6: [
                    { required: true, message: '请输入项目编号', trigger: 'blur' },
                ],
                input7: [
                    { required: true, message: '请输入审计金额', trigger: 'blur' },
                ],
                input8: [
                    { required: true, message: '请输入预算金额', trigger: 'blur' },
                ],
                input9: [
                    { required: true, message: '请选择采购方式', trigger: 'blur' },
                ],
                input10: [
                    { required: true, message: '请选择日期', trigger: 'blur' },
                ],
                input11: [
                    { required: true, message: '请输入采购意向公告链接', trigger: 'blur' },
                ],
                input12: [
                    { required: true, message: '请选择是否面向中小微企', trigger: 'blur' },
                ],
            },
            activeIndex: 0,
            childRadioBool: false,
            childRadioIndex: 0,
            childInput1: 0,
            childInput2: 0,
            fileForm:{
                text1:'',
                fileList1:[
                    {title:'这是文件名称',type:'pdf',url:'1111'},
                    {title:'这是文件名称',type:'pdf',url:'1111'},
                ],
                text2:'',
                fileList2:[],
                text3:'',
                fileList3:[],
                text4:'',
                fileList4:[],
                text5:'',
                fileList5:[],
                text6:'',
                fileList6:[],
                text7:'',
                fileList7:[
                    {title:'这是文件名称',type:'pdf',url:'1111'},
                    {title:'这是文件名称',type:'pdf',url:'1111'},
                ],
            }
        }
    },
    computed: {
        stepList() {
            return [
                {
                    title: "需求单位",
                    isInput: this.formInfo.input1,
                    isActive: !this.formInfo.input1 && this.formInfo.input2,
                },
                {
                    title: "项目负责人",
                    isInput: this.formInfo.input2,
                    isActive: !this.formInfo.input2 && this.formInfo.input3,
                },
                {
                    title: "联系电话",
                    isInput: this.formInfo.input3,
                    isActive: !this.formInfo.input3 && this.formInfo.input4,
                },
                {
                    title: "项目名称",
                    isInput: this.formInfo.input4,
                    isActive: !this.formInfo.input4 && this.formInfo.input5,
                },
                {
                    title: "项目类型",
                    isInput: this.formInfo.input5,
                    isActive: !this.formInfo.input5 && this.formInfo.input6,
                },
                {
                    title: "项目编号",
                    isInput: this.formInfo.input6,
                    isActive: !this.formInfo.input6 && this.formInfo.input7,
                },
                {
                    title: "审计金额",
                    isInput: this.formInfo.input7,
                    isActive: !this.formInfo.input7 && this.formInfo.input8,
                },
                {
                    title: "预算金额",
                    isInput: this.formInfo.input8,
                    isActive: !this.formInfo.input8 && this.formInfo.input9,
                },
                {
                    title: "采购方式",
                    isInput: this.formInfo.input9,
                    isActive: !this.formInfo.input9 && this.formInfo.input10,
                },
                {
                    title: "采购意向公开日期",
                    isInput: this.formInfo.input10,
                    isActive: !this.formInfo.input10 && this.formInfo.input11,
                },
                {
                    title: "采购意向公告链接",
                    isInput: this.formInfo.input11,
                    isActive: !this.formInfo.input11 && this.formInfo.input12,
                },
                {
                    title: "是否面向中小微企",
                    isInput: this.formInfo.input12,
                    isActive: !this.formInfo.input12 && (this.fileForm.input1||this.fileForm.fileList1.length>0),
                },
                {
                    title: "采购意向",
                    isInput: this.fileForm.input1||this.fileForm.fileList1.length>0,
                    isActive: (!this.fileForm.input1&&this.fileForm.fileList1.length==0) && (this.fileForm.input2||this.fileForm.fileList2.length>0),
                },
                {
                    title: "纪保预算审核报告书",
                    isInput: this.fileForm.input2||this.fileForm.fileList2.length>0,
                    isActive: (!this.fileForm.input2&&this.fileForm.fileList2.length==0) && (this.fileForm.input3||this.fileForm.fileList3.length>0),
                },
                {
                    title: "采购需求",
                    isInput: this.fileForm.input3||this.fileForm.fileList3.length>0,
                    isActive: (!this.fileForm.input3&&this.fileForm.fileList3.length==0) && (this.fileForm.input4||this.fileForm.fileList4.length>0),
                },
                
                {
                    title: "实施计划",
                    isInput: this.fileForm.input4||this.fileForm.fileList4.length>0,
                    isActive: (!this.fileForm.input4&&this.fileForm.fileList4.length==0) && (this.fileForm.input5||this.fileForm.fileList5.length>0),
                },
                {
                    title: "审查意见书",
                    isInput: this.fileForm.input5||this.fileForm.fileList5.length>0,
                    isActive: (!this.fileForm.input5&&this.fileForm.fileList5.length==0) && (this.fileForm.input6||this.fileForm.fileList6.length>0),
                },
                {
                    title: "大队党委会",
                    isInput: this.fileForm.input6||this.fileForm.fileList6.length>0,
                    isActive: (!this.fileForm.input6&&this.fileForm.fileList6.length==0) && (this.fileForm.input7||this.fileForm.fileList7.length>0),
                },
                {
                    title: "支队党委会",
                    isInput: this.fileForm.input7||this.fileForm.fileList7.length>0,
                    isActive: false,
                },
            ]

        },
    },
}