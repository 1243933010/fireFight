

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
    {type:'purchase_intention1',title:'纪保预算审核报告书',description:'',files:[]},
    {type:'purchase_intention2',title:'采购需求',description:'',files:[]},
    {type:'purchase_intention3',title:'实施计划',description:'',files:[]},
    {type:'purchase_intention4',title:'审查意见书',description:'',files:[]},
    {type:'purchase_intention5',title:'大队党委会',description:'',files:[]},
    {type:'purchase_intention6',title:'支队党委会',description:'',files:[]},
  ],
  fileForm: {
    text1: '',
    fileList1: [
      { title: '这是文件名称', type: 'pdf', url: '1111' },
      { title: '这是文件名称', type: 'pdf', url: '1111' },
    ],
    text2: '',
    fileList2: [],
    text3: '',
    fileList3: [],
    text4: '',
    fileList4: [],
    text5: '',
    fileList5: [],
    text6: '',
    fileList6: [],
    text7: '',
    fileList7: [],
  },
}


const mutations = {
  UPDATE_FORMINFO: (state, form) => {
    state.formInfo = form;
    // eslint-disable-next-line no-prototype-builtins
    // if (state.hasOwnProperty(key)) {
    //   state[key] = value
    // }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}

