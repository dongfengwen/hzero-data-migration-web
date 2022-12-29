import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: String;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Hzero Data Migration Pro',
  pwa: false,
  logo: 'icons/数据探索（数据中心）—模型管理.png',
  //logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  //logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2F36kr.com%2Fp%2F1641916563457&psig=AOvVaw2L05a5c4W2LVfR3TpXawGe&ust=1669021092548000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMDbtpyyvPsCFQAAAAAdAAAAABAD',
  iconfontUrl: '',
};

export default Settings;
