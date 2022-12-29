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
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <>
              还在继续努力开发中.....<Progress type="circle" percent={60} width={30}style={{ marginRight: 8 }} />
            </>
            {/*<InfoCard*/}
            {/*  index={1}*/}
            {/*  href="https://umijs.org/docs/introduce/introduce"*/}
            {/*  title="了解 umi"*/}
            {/*  desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"*/}
            {/*/>*/}
            {/*<InfoCard*/}
            {/*  index={2}*/}
            {/*  title="了解 ant design"*/}
            {/*  href="https://ant.design"*/}
            {/*  desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"*/}
            {/*/>*/}
            {/*<InfoCard*/}
            {/*  index={3}*/}
            {/*  title="了解 Pro Components"*/}
            {/*  href="https://procomponents.ant.design"*/}
            {/*  desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"*/}
            {/*/>*/}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
