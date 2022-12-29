import { PageContainer } from '@ant-design/pro-components';
import {Card, Typography} from 'antd';
import React from 'react';
import {HeartTwoTone, SmileTwoTone} from "@ant-design/icons";
import { Progress } from 'antd';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 4px 0 rgba(35,49,128,0.02), 0 4px 8px 0 rgba(49,69,179,0.02)',
        borderRadius: '8px',
        fontSize: '14px',
        color: 'rgba(0,0,0,0.65)',
        textAlign: 'justify',
        lineHeight: ' 22px',
        padding: '16px 19px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: 'rgba(0, 0, 0, 0.85)',
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: 'rgba(0,0,0,0.65)',
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};


const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            <SmileTwoTone /> Hzero Data Migration Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
          </Typography.Title>
          <div
            style={{
              fontSize: '20px',
              color: '#1A1A1A',
            }}
          >
            欢迎使用 Hzero Data Migration Pro
          </div>

          <p
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.65)',
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Hzero Data Migration Pro 是一个为项目所需而产生的一个数据处理系统工具。
            致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，
            进一步提升项目中『用户』和『开发者』对后台数据处理的体验。
          </p>
          <p>
            还在继续努力开发中.....   <Progress type="circle" percent={60} width={30}style={{ marginRight: 8 }} />
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >

            <InfoCard
              index={1}
              href="/sync-records-list"
              title="了解 同步记录"
              desc="会记录用户所有的操作，所以谨慎操作哦！"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
