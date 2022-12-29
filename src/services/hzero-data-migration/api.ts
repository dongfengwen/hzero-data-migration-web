// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: DATA.CurrentUser;
  }>('/v1/lov/value-page', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<DATA.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<DATA.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function dataRule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.RuleList>('/api/v1/lov/value-page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function dataTemplateOld(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.RuleList>('/api/v1/template/value-page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function dataRuleView(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.RuleList>('/api/v1/lovView/value-page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量审批 GET /api/rule */
export async function dataApproval(
  params: {},
) {
  return request<DATA.RuleList>('/api/v1/lov/data-approval', {
    method: 'POST',
    data: params["selectedRowSet"],
  });
}

export async function dataTemplateApproval(
  params: {},
) {
  return request<DATA.RuleList>('/api/v1/template/data-approval', {
    method: 'POST',
    data: params["selectedRowSet"],
  });
}

/** 批量审批 GET /api/rule */
export async function dataViewApproval(
  params: {},
) {
  return request<DATA.RuleList>('/api/v1/lovView/data-approval', {
    method: 'POST',
    data: params["selectedRowSet"],
  });
}


export async function dataDifferencesDev(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    lovId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/lov/data-differences-dev', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


export async function dataDifferencesTemplateDev(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    lovId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/template/data-differences-dev', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
export async function dataDifferencesViewDev(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    viewHeaderId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/lovView/data-differences-dev', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 差异 GET /api/rule */
export async function dataTemplateDifferencesProd(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    lovId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/template/data-differences-prod', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function dataDifferencesProd(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    lovId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/lov/data-differences-prod', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/** 差异 GET /api/rule */
export async function dataDifferencesViewProd(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    viewHeaderId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<DATA.LovValueListParams>('/api/v1/lovView/data-differences-prod', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<DATA.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<DATA.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
