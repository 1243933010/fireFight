import request from '@/utils/request'

export function projectAdd(data) {
    return request({
      url: '/project/add',
      method: 'post',
      data
    })
  }
  
  export function projectList(pv) {
    return request({
      url: '/project/list',
      method: 'get',
      params: { pv }
    })
  }
  
  export function projectDetail(pv) {
    return request({
      url: `/project/info/${pv}`,
      method: 'get',
    })
  }
  