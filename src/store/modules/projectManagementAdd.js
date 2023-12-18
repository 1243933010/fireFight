

const state = {
  formInfo: {
    demand_department_id: "",
    project_leader: "",
    contact_phone: "",
    name: "",
    type: "",
    no: "",
    audit_amount: "",
    budget: "",
    procurement_method: "",
    public_date: "",
    notice_link: "",
    input12: "true",
    small_company:'',//是否面向小微企业，不展示
  },
  project_attachments:[
    {type:'purchase_intention',title:'采购意向',description:'',files:[]},
    {type:'budget_audit_report',title:'纪保预算审核报告书',description:'',files:[]},
    {type:'purchase_demand',title:'采购需求',description:'',files:[]},
    {type:'act_plan',title:'实施计划',description:'',files:[]},
    {type:'check_opinion',title:'审查意见书',description:'',files:[]},
    {type:'main_party_committee',title:'大队党委会',description:'',files:[]},
    {type:'detachment_party_committee',title:'支队党委会',description:'',files:[]},
  ],
  radioLabelList: [
    { label: '是:整体专门面向中小企业采购 (即100%)', child: [], checked: false, },
    {
      label: '否: 预留预算总额的货物类、服务类项目不低于30%，工程类项目不低于40%，由需求单位根据实际情况填写专门面向中小企业采购。', child: [
        { label1: '采购项目整体或者设置采购包专门面向中小企业采购', checked: false, },
        { label1: '供应商以联合体形式参加采购活动，联合体中中小企业承担预算总额的', checked: false, label2: '%部分', num: '' },
        { label1: '获得采购合同的供应商将采购项目中的', checked: false, label2: '%分包给一家或者多家中小企业', num: '' },

      ], checked: false,
    },
    { label: '否:项目不适用专门面向中小企业，根据《政府采购促进中小企业发展管理办法》财库[2020] 46 号的规定，符合下列情形之一的，可不专门面向中小企业预留采购份额。', child: [], checked: false, },
  ],
  // fileForm: {
  //   text1: '',
  //   fileList1: [
  //     { title: '这是文件名称', type: 'pdf', url: '1111' },
  //     { title: '这是文件名称', type: 'pdf', url: '1111' },
  //   ],
  //   text2: '',
  //   fileList2: [],
  //   text3: '',
  //   fileList3: [],
  //   text4: '',
  //   fileList4: [],
  //   text5: '',
  //   fileList5: [],
  //   text6: '',
  //   fileList6: [],
  //   text7: '',
  //   fileList7: [],
  // },
}


const mutations = {
  UPDATE_FORMINFO: (state, form) => {
    console.log('-----')
    state.formInfo = form;
    // eslint-disable-next-line no-prototype-builtins
    // if (state.hasOwnProperty(key)) {
    //   state[key] = value
    // }
  },
  UPDATE_PROJECT_ATTACHMENTS:(state,list)=>{
    state.project_attachments = list;
  },
  UPDATE_RADIOLABELLIST:(state,list)=>{
    state.radioLabelList = list;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}

