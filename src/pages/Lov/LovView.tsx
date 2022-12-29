import { dataRuleView,dataViewApproval ,dataDifferencesViewDev,dataDifferencesViewProd} from '@/services/hzero-data-migration/api';
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
const handleApproval = async (selectedRowSet: DATA.LovViewListItem[]) => {
  const hide = message.loading('正在同步');
  if (!selectedRowSet) return true;
  try {
    await dataViewApproval({
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
  const [selectedRowsState, setSelectedRows] = useState<DATA.LovViewListItem[]>([]);
  //独立值集
  const [modalVisit, setModalVisit] = useState(false);
  const [currentRowValue, setCurrentRowValue] = useState<DATA.LovViewListItem>();
  const [readonly] = useState(false);

  //SQL 和URL SQL
  const [modalVisitURLSQL, setModalVisitURLSQL] = useState(false);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  //主列表表单
  const columns: ProColumns<DATA.LovViewListItem>[] = [
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
      title: <FormattedMessage id="pages.lovView.table.view.lov.code" defaultMessage="Description" />,
      dataIndex: 'viewCode',
      valueType: 'textarea',
    },
    //值集编码
    {
      title: <FormattedMessage id="pages.lovView.table.view.lov.code" defaultMessage="Description" />,
      dataIndex: 'viewName',
      valueType: 'textarea',
    },
    //值集编码
    {
      title: <FormattedMessage id="pages.lovView.table.lov.code" defaultMessage="Description" />,
      dataIndex: 'lovCode',
      valueType: 'textarea',
    },
    //值集名称
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.name"
          defaultMessage="Number of service calls"
        />
      ),
      dataIndex: 'lovName',
      valueType: 'textarea',
    },
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
              setModalVisit(true);
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
          id="pages.lovView.table.lov.view.fieldName"
          defaultMessage="lov value"
        />
      ),
      dataIndex: 'fieldName',
      valueType: 'textarea',
      search: false,
    },
    //翻译
    {
      title: <FormattedMessage id="pages.lovView.table.lov.view.display" defaultMessage="Description" />,
      dataIndex: 'display',
      valueType: 'textarea',
      search: false,
    },
    //排序
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.view.orderSeq"
          defaultMessage="orderSeq"
        />
      ),
      dataIndex: 'orderSeq',
      valueType: 'textarea',
      search: false,
    },
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.view.queryFieldFlag"
          defaultMessage="queryFieldFlag"
        />
      ),
      dataIndex: 'queryFieldFlag',
      valueEnum: {
        1: { text: '启用', status: 'Success' },
        0: { text: '禁用', status: 'Error' },
      },
      search: false,
    },
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.view.tableFieldFlag"
          defaultMessage="tableFieldFlag"
        />
      ),
      dataIndex: 'tableFieldFlag',
      valueEnum: {
        1: { text: '启用', status: 'Success' },
        0: { text: '禁用', status: 'Error' },
      },
      search: false,
    },
    {
      title: (
        <FormattedMessage
          id="pages.lovView.table.lov.enabled_flag_name"
          defaultMessage="enabledFlag"
        />
      ),
      dataIndex: 'enabledFlag',
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
        request={dataRuleView}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      <ModalForm
        title="视图对比差异"
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
            rowKey="viewLineId"
            request={()=>{
              return dataDifferencesViewDev({viewHeaderId:currentRowValue==undefined?-1:currentRowValue.devViewHeaderId})
            }}
            pagination={{
              showQuickJumper: true,
            }}
          />
          <ProTable<DATA.LovValueList>
            headerTitle = 'PROD'
            columns={modelColumns}
            actionRef={actionRef}
            rowKey="viewLineId"
            request={()=>{
              return dataDifferencesViewProd({viewHeaderId:currentRowValue==undefined?-1:currentRowValue.prodViewHeaderId})
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
