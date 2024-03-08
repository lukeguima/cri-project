import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {
  HomeOutlined,
  ContactsOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 1,
    icon: <HomeOutlined style={{ fontSize: 14 }} />,
    label: 'Consultar'
  },
  {
    key: 2,
    icon: <ContactsOutlined style={{ fontSize: 14 }} />,
    label: 'Cadastrar'
  }
]

const MenuSider: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={200} style={{ marginLeft: '24px', marginTop: '24px', padding: '4px', background: colorBgContainer }}>
      <h3>Protocolo</h3>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default MenuSider;