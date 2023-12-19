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
  

  //---------------

  //实施委托列表
  export function implementList(params) {
    return request({
      url: `/project/implement_list`,
      method: 'get',
      params
    })
  }
  