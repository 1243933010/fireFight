

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
    input12: "",
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
  //实施委托
  ImplementationCommissionForm:{
    agent_id: '',
    files: []
  },
  thirdData:{
    bidBaseProject:{
      bid_file_date:'',
      bid_publish_date:'',
      publish_link:'',
      bid_open_date:'',
      doubt:"",
      bid_publish_photo:[],
      bid_register_file:[],
      bid_file_issue:[],
      project_attachments:[
        {type:'purchase_meeting',title:'支队/大队采购例会',description:'',files:[]},
        {type:'bid_authorization',title:'委托招标函',description:'',files:[]},
        {type:'purchase_file_confirm',title:'采购文件确认函',description:'',files:[]},
      ]
    },
    startData:{
      bid_files_list:[
        {type:'bid_user_login',title:'投标人签到表',files:[]},
        {type:'bid_open_log',title:'开标记录表',files:[]},
        {type:'buyer_auth_bid',title:'采购人评标代表授权书',files:[]},
        {type:'committee_login',title:'评标委员会签到表',files:[]},
        {type:'bid_rules',title:'评标规则',files:[]},
        {type:'quality_check',title:'资格审查表、符合性审查表',files:[]},
        {type:'bid_process_file',title:'评标过程资料',files:[]},
        {type:'bid_report',title:'评标报告',files:[]},
        {type:'bid_result_confirm',title:'评标结果确认函',files:[]},
      ],
      bid_units:[
        {amount:'',name:"",contact:'',files:[]},
        {amount:'',name:"",contact:'',files:[]},
        {amount:'',name:"",contact:'',files:[]},
      ],
      project_attachments:[
        {type:'expert_info',title:'参与评审专家信息',files:[],description:''},
      ]
    },
    resultData:{
      bid_success_amount:'',
      bid_success_unit:'',
      bid_success_phone:'',
      bid_success_contact:'',
      bid_success_link:'',
      bid_success_publish_date:'',
      bid_success_unit_type:'',
      bid_success_unit_per:'',
      bid_success_notice_date:'',
      bid_success_photo:[],
      bid_success_notice:[],
      project_attachments:[
        {type:'accusation_question',title:'举报/质疑/投诉',files:[],description:''},
      ]
    }
  }
}


const mutations = {
  UPDATE_FORMINFO: (state, form) => {
    state.formInfo = form;
  },
  UPDATE_PROJECT_ATTACHMENTS:(state,list)=>{
    state.project_attachments = list;
  },
  UPDATE_RADIOLABELLIST:(state,list)=>{
    state.radioLabelList = list;
  },
  update_ImplementationCommissionForm:(state,data)=>{
    // console.log(type,data,'}}}')
    if(data.type=='form'){
      state.ImplementationCommissionForm.agent_id = data.data;
    }else{
      state.ImplementationCommissionForm.files = data.data;
    }
    
  },
  
  update_bidBaseProject:(state,form)=>{
    state.thirdData.bidBaseProject = form;
  },

  update_startData_bid_files_list:(state,list)=>{
    state.thirdData.bid_files_list = list;
  },
  update_startData_bid_units:(state,list)=>{
    state.thirdData.startData.bid_units = list;
  },
  update_startData_project_attachments:(state,list)=>{
    state.thirdData.startData.project_attachments = list;
  },
  update_resultData:(state,form)=>{
    state.thirdData.resultData = form;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}

