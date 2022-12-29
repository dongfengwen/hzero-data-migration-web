import { dataTemplateOld,dataTemplateApproval ,dataDifferencesTemplateDev,dataTemplateDifferencesProd} from '@/services/hzero-data-migration/api';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  FooterToolbar, ModalForm,
  PageContainer,
  ProTable,
  ProFormText,
  ProForm,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import {Button, message, Tag} from 'antd';
import React, { useRef, useState } from 'react';


/**
 *  Delete node
 * @zh-CN 批量提交审批
 *
 * @param selectedRows
 */
const handleApproval = async (selectedRowSet: DATA.RuleListItem[]) => {
  const hide = message.loading('正在同步');
  if (!selectedRowSet) return true;
  try {
    await dataTemplateApproval({
      selectedRowSet
    });
    hide();
    message.success('已成功同步！');
    return true;
  } catch (error) {
    hide();
    message.error('同步失败，请重试');
    return false;
  }
};

export type Status = {
  color: string;
  text: string;
};


const TableList: React.FC = () => {


  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<DATA.RuleListItem[]>([]);
  //独立值集
  const [modalVisit, setModalVisit] = useState(false);
  const [currentRowValue, setCurrentRowValue] = useState<DATA.RuleListItem>();
  const [readonly] = useState(false);

  //SQL 和URL SQL
  const [modalVisitURLSQL, setModalVisitURLSQL] = useState(false);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  //主列表表单
  const columns: ProColumns<DATA.RuleListItem>[] = [
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.tenant.name"
          defaultMessage="tenant name"
        />
      ),
      dataIndex: 'tenantName',
      valueType: 'textarea',
      search: false,
    },
    //值集编码
    {
      title: '模板代码',
      dataIndex: 'templateCode',
      valueType: 'textarea',
    },
    //值集名称
    {
      title: '模板名称',
      dataIndex: 'templateName',
      valueType: 'textarea',
    },
    //值集类型
    {
      title: 'sheet',
      dataIndex: 'sheetIndex',
      valueType: 'textarea',
    },
    //值集类型
    {
      title: 'sheet名称',
      dataIndex: 'sheetName',
      valueType: 'textarea',
      search: false,
    },
    //描述
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.status"
          defaultMessage="Number of service calls"
        />
      ),
      dataIndex: 'enabledFlag',
      valueEnum: {
        1: { text: '启用', status: 'Success' },
        0: { text: '禁用', status: 'Error' },
      },
      width:120,
      search: false,
    },
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.results"
          defaultMessage="Number of service calls"
        />
      ),
      width: 120,
      dataIndex: 'addModify',
      search: false,
      render: (_, record) => <Tag color={record.addModifyColor}>{record.addModify}</Tag>,
    },
    //创建人
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.createdByName"
          defaultMessage="Number of service calls"
        />
      ),
      dataIndex: 'createdByName',
      valueType: 'textarea',
      hideInTable:true,
      search: false,
    },

    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.difference"
          defaultMessage="Number of service calls"
        />
      ),
      valueType: 'code',
      dataIndex: 'difference',
      width: 120,
      search: false,

      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRowValue(entity);
              if(entity.lovTypeName=='URL' || entity.lovTypeName=='SQL'){
                setModalVisitURLSQL(true);
              }else {
                setModalVisit(true);
              }
            }}
          >
            {dom}
          </a>
        );
      },
    },
  ];

  //弹窗表单
  const modelColumns: ProColumns<DATA.LovValueList>[] = [
    //值
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.value"
          defaultMessage="lov value"
        />
      ),
      dataIndex: 'lovValue',
      valueType: 'textarea',
      width:40,
      search: false,
    },
    //翻译
    {
      title: <FormattedMessage id="pages.lovView.table.lov.meaning" defaultMessage="Description" />,
      dataIndex: 'lovMeaning',
      valueType: 'textarea',
      width:60,
      search: false,
    },
    //排序
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.order.seq"
          defaultMessage="orderSeq"
        />
      ),
      dataIndex: 'orderSeq',
      width:50,
      valueType: 'textarea',
      search: false,
    },
    //状态
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.enabled_flag_name"
          defaultMessage="enabledFlag"
        />
      ),
      dataIndex: 'enabledFlag',
      width:60,
      valueEnum: {
        1: { text: '启用', status: 'Success' },
        0: { text: '禁用', status: 'Error' },
      },
      search: false,
    },
  ];

  return (
    <PageContainer>
      <ProTable<DATA.RuleListItem, DATA.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.lovView.table.lov.code',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="lovId"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
        }}
        request={dataTemplateOld}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      <ModalForm
        title="独立值集对比差异"
        open={modalVisit}
        onFinish={async () => {
          //message.success('提交成功');
          return true;
        }}
        onOpenChange={setModalVisit}
        //点击按钮自动刷新
        modalProps={{
          destroyOnClose: true,
        }}
        submitter={false}
      >
        <ProForm.Group>
          <ProTable<DATA.LovValueList>
            headerTitle = 'DEV'
            actionRef={actionRef}
            columns={modelColumns}
            search={false}
            rowKey="lovValueId"
            request={()=>{
              return dataDifferencesTemplateDev({lovId:currentRowValue==undefined?-1:currentRowValue.devLovId})
            }}
            pagination={{
              showQuickJumper: true,
            }}
          />
          <ProTable<DATA.LovValueList>
            headerTitle = 'PROD'
            columns={modelColumns}
            actionRef={actionRef}
            rowKey="lovValueId"
            request={()=>{
              return dataTemplateDifferencesProd({lovId:currentRowValue==undefined?-1:currentRowValue.prodLovId})
            }}
            search={false}
            pagination={{
              showQuickJumper: true,
            }}
          />
        </ProForm.Group>
      </ModalForm>


      <ModalForm
        title="URL/SQL对比差异"
        open={modalVisitURLSQL}
        onFinish={async () => {
          //message.success('提交成功');
          return true;
        }}
        onOpenChange={setModalVisitURLSQL}
        //点击按钮自动刷新
        modalProps={{
          destroyOnClose: true,
        }}
        readonly={readonly}
        submitter={false}
        initialValues={{
          devLovCode: currentRowValue==undefined?'':currentRowValue.devLovCode,
          prodLovCode: currentRowValue==undefined?'':currentRowValue.prodLovCode,
          devLovName: currentRowValue==undefined?'':currentRowValue.devLovName,
          prodLovName: currentRowValue==undefined?'':currentRowValue.prodLovName,
          devLovTypeName: currentRowValue==undefined?'':currentRowValue.devLovTypeName,
          prodLovTypeName: currentRowValue==undefined?'':currentRowValue.prodLovTypeName,
          devLovValueField: currentRowValue==undefined?'':currentRowValue.devLovValueField,
          prodLovValueField: currentRowValue==undefined?'':currentRowValue.prodLovValueField,
          devDisplayField: currentRowValue==undefined?'':currentRowValue.devDisplayField,
          prodDisplayField: currentRowValue==undefined?'':currentRowValue.prodDisplayField,
          devRouteName: currentRowValue==undefined?'':currentRowValue.devRouteName,
          prodRouteName: currentRowValue==undefined?'':currentRowValue.prodRouteName,
          devEncryptField: currentRowValue==undefined?'':currentRowValue.devEncryptField,
          prodEncryptField: currentRowValue==undefined?'':currentRowValue.prodEncryptField,
          devCustomSql: currentRowValue==undefined?'':currentRowValue.devCustomSql,
          prodCustomSql: currentRowValue==undefined?'':currentRowValue.prodCustomSql,
          devCustomUrl: currentRowValue==undefined?'':currentRowValue.devCustomUrl,
          prodCustomUrl: currentRowValue==undefined?'':currentRowValue.prodCustomUrl,
          devTranslationSql: currentRowValue==undefined?'':currentRowValue.devTranslationSql,
          prodTranslationSql: currentRowValue==undefined?'':currentRowValue.prodTranslationSql,
          devEnabledFlag: currentRowValue==undefined?'':currentRowValue.devEnabledFlag==1?"启用":"禁用",
          prodEnabledFlag: currentRowValue==undefined?'':currentRowValue.prodEnabledFlag==1?"启用":"禁用",
        }}
      >
        <ProForm.Group>
          <ProFormText width="md" name="devLovCode" label="值集编码"/>
          <ProFormText width="md" name="prodLovCode" label="值集编码"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devLovName" label="值集名称"  />
          <ProFormText width="md" name="prodLovName" label="值集名称"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devEnabledFlag" label="是否启用" />
          <ProFormText width="md" name="prodEnabledFlag" label="是否启用"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devLovTypeName" label="值集类型"  />
          <ProFormText width="md" name="prodLovTypeName" label="值集类型"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devLovValueField" label="值字段"  />
          <ProFormText width="md" name="prodLovValueField" label="值字段"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devDisplayField" label="翻译字段"  />
          <ProFormText width="md" name="prodDisplayField" label="翻译字段"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devRouteName" label="路由"  />
          <ProFormText width="md" name="prodRouteName" label="路由"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devEncryptField" label="加密字段"  />
          <ProFormText width="md" name="prodEncryptField" label="加密字段"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devCustomSql" label="查询SQL"  />
          <ProFormText width="md" name="prodCustomSql" label="查询SQL"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devCustomUrl" label="查询URL"  />
          <ProFormText width="md" name="prodCustomUrl" label="查询URL"  />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="devTranslationSql" label="翻译SQL" />
          <ProFormText width="md" name="prodTranslationSql" label="翻译SQL"  />
        </ProForm.Group>
      </ModalForm>
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button type="primary"  onClick={async () => {
            console.log(typeof selectedRowsState);
            await handleApproval(selectedRowsState);
            setSelectedRows([]);
            actionRef.current?.reloadAndRest?.();
          }}>
            <FormattedMessage
              id="pages.lovView.table.lov.synchronization"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
