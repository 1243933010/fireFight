import request from '@/utils/request'

//新增页面保存草稿
export function projectAdd(data) {
    return request({
      url: '/project/add',
      method: 'post',
      data
    })
  }
  //编辑页面保存草稿
export function projectEdit(data) {
  return request({
    url: `/project/edit/${data.id}`,
    method: 'post',
    data
  })
}

  //项目管理列表
  export function projectList(params) {
    return request({
      url: '/project/list',
      method: 'get',
      params
    })
  }
  
  //项目管理详情
  export function projectDetail(pv) {
    return request({
      url: `/project/info/${pv}`,
      method: 'get',
    })
  }
  

  //项目管理提交
  export function projectSubmit(data) {
    return request({
      url: `/project/submit`,
      method: 'post',
      data
    })
  }
  
  //项目管理审核
  export function projectAudit(data) {
    return request({
      url: `/project/audit`,
      method: 'post',
      data
    })
  }
    
  //项目管理删除
  export function projectDelete(data) {
    return request({
      url: `/project/destroy/5`,
      method: 'post',
      data
    })
  }
  

  //---------------

  //实施委托列表
  export function implementList(params) {
    return request({
      url: `/project/implement_list`,
      method: 'get',
      params
    })
  }
  
    //实施委托列表
    export function agentList() {
      return request({
        url: `/project/agent_list`,
        method: 'get',
      })
    }
    
     //实施委托保存草稿
     export function saveImplement(data) {
      return request({
        url: `/project/save_implement_data/${data.id}`,
        method: 'post',
        data
      })
    }
    
     //实施委托提交
     export function submitImplement(id) {
      return request({
        url: `/project/submit_implement`,
        method: 'post',
        data:{id}
      })
    }
    


    //-------
     //第三方列表
  export function agentProjectList(params) {
    return request({
      url: `/project/agent_project_list`,
      method: 'get',
      params
    })
  }
//保存招标信息
  export function bidBaseSave(data) {
    return request({
      url: `/project/bid_base_save`,
      method: 'post',
      data
    })
  }
  //提交招标信息
  export function bidBaseSubmit(id) {
    return request({
      url: `/project/submit_bid_base`,
      method: 'post',
      data:{id}
    })
  }