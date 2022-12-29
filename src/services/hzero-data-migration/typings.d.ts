// @ts-ignore
/* eslint-disable */

declare namespace DATA {
  type CurrentUser = {
    tenantName?: string;
    lovCode?: string;
    lovName?: string;
    lovTypeName?: string;
    description?: string;
    createdByName?: string;
    lastUpdatedByName?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    tenantName?: string;
    lovCode?: string;
    lovName?: string;
    lovTypeName?: string;
    description?: string;
    createdByName?: string;
    lastUpdatedByName?: string;
    lovId?: number;
    devLovId?: number;
    prodLovId?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    devLovCode: string;
    prodLovCode: string;
    devLovName: string;
    prodLovName: string;
    devLovTypeName: string;
    prodLovTypeName: string;
    devLovValueField: string;
    prodLovValueField: string;
    devDisplayField: string;
    prodDisplayField: string;
    devRouteName:string;
    prodRouteName:string;
    devEncryptField:string;
    prodEncryptField:string;
    devCustomSql:string;
    prodCustomSql:string;
    devCustomUrl:string;
    prodCustomUrl:string;
    devTranslationSql:string;
    prodTranslationSql:string;
    addModifyColor:string;
    addModify:string;
    progress?: number;
    devEnabledFlag?: number;
    prodEnabledFlag?: number;
  };

  type LovViewListItem = {
    key?: number;
    tenantName?: string;
    lovCode?: string;
    lovName?: string;
    viewCode?: string;
    viewName?: string;
    lovTypeName?: string;
    description?: string;
    createdByName?: string;
    lastUpdatedByName?: string;
    lovId?: number;
    devLovId?: number;
    prodLovId?: number;
    devViewHeaderId?: number;
    prodViewHeaderId?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    devLovCode: string;
    prodLovCode: string;
    devLovName: string;
    prodLovName: string;
    devLovTypeName: string;
    prodLovTypeName: string;
    devLovValueField: string;
    prodLovValueField: string;
    devDisplayField: string;
    prodDisplayField: string;
    devRouteName:string;
    prodRouteName:string;
    devEncryptField:string;
    prodEncryptField:string;
    devCustomSql:string;
    prodCustomSql:string;
    devCustomUrl:string;
    prodCustomUrl:string;
    devTranslationSql:string;
    prodTranslationSql:string;
    addModifyColor:string;
    addModify:string;
    progress?: number;
    devEnabledFlag?: number;
    prodEnabledFlag?: number;
  };

  type LovValueList = {
    key?: number;
    lovId?: number;
    lovValueId?: number;
    lovValue?: string;
    lovMeaning?: string;
    orderSeq?: number;
    enabledFlagName?: string;
  };


  type LovValueURLSQLList = {
    key?: number;
    lovId?: number;
    lovValueId?: number;
    lovValue?: string;
    lovMeaning?: string;
    orderSeq?: number;
    enabledFlagName?: string;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type LovValueListParams = {
    data?: LovValueList[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
