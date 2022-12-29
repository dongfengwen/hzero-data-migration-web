/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  //同步记录
  {
    name: 'sync-records',
    icon: 'CloudSyncOutlined',
    path: '/sync-records-list',
    component: './SyncRecords/Records',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'DeploymentUnitOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Lov/LovValue',
      },
      {
        path: '/admin/lov-view',
        name: 'lov-view',
        component: './Lov/LovView',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  //菜单权限
  {
    name: 'permission-list',
    icon: 'FileDoneOutlined',
    path: '/permission-list',
    component: './Menu/Permission',
  },
  //返回消息
  {
    name: 'return-message-list',
    icon: 'MessageOutlined',
    path: '/return-message-list',
    component: './Return/Message',
  },
  //多语言
  {
    name: 'multilingual-list',
    icon: 'ReadOutlined',
    path: '/multilingual-list',
    component: './Multilingual/Language',
  },
  //消息模版
  {
    name: 'message-template-list',
    icon: 'SwitcherOutlined',
    path: '/message--template-list',
    component: './Message/Template',
  },
  //导入模版（老版）
  {
    name: 'import-template-old',
    icon: 'ToTopOutlined',
    path: '/import-template-old',
    component: './Import/TemplateOld',
  },
  //导入导出模版（新版）
  {
    path: '/template-new',
    name: 'template-new',
    icon: 'UploadOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: '/template-new',
        redirect: '/template-new/new',
      },
      {
        path: '/template-new/new/import',
        name: 'import-new',
        component: './Template/Import',
      },
      {
        path: '/template-new/new/export',
        name: 'export-new',
        component: './Template/Export',
      },
    ],
  },
  //报表模版
  {
    name: 'report-template',
    icon: 'AppstoreAddOutlined',
    path: '/report-template',
    component: './Report/Template',
  },
  //工作流
  {
    name: 'workflow-template',
    icon: 'ClusterOutlined',
    path: '/workflow-template',
    component: './Workflow/Template',
  },
  //脚本引擎周边
  {
    path: '/script-engine',
    name: 'script-engine',
    icon: 'RocketOutlined',
    access: 'canAdmin',
    routes: [
      {
        path: '/script-engine',
        redirect: '/script-engine/perimeter',
      },
      //埋点脚本管理
      {
        path: '/script-engine/perimeter/embedment',
        name: 'perimeter-embedment',
        component: './ScriptEngine/Embedment',
      },
      //Query Block
      {
        path: '/script-engine/perimeter/queryBlock',
        name: 'perimeter-query-block',
        component: './ScriptEngine/QueryBlock',
      },
      //独立脚本
      {
        path: '/script-engine/perimeter/aloneScripts',
        name: 'perimeter-alone-scripts',
        component: './ScriptEngine/AloneScripts',
      },
      //API
      {
        path: '/script-engine/perimeter/api',
        name: 'perimeter-api',
        component: './ScriptEngine/Api',
      },
    ],
  },
  //配置表定义
  {
    name: 'configuration-table',
    icon: 'ReconciliationOutlined',
    path: '/configuration-table',
    component: './Configuration/Table',
  },
  //调度任务
  {
    name: 'scheduling-task',
    icon: 'RobotOutlined',
    path: '/scheduling-task',
    component: './Scheduling/Task',
  },
  //编码规则
  {
    name: 'coding-rules',
    icon: 'UngroupOutlined',
    path: '/coding-rules',
    component: './Coding/Rules',
  },
  {
    name: 'coding-shares',
    icon: 'UngroupOutlined',
    path: '/coding-shares',
    component: './shares/sharesList',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
