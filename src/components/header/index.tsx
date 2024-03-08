import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  ContactsOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    key: 1,
    icon: <HomeOutlined style={{ fontSize: 14 }} />,
    label: (
      <a href="/home" style={{ fontSize: 14 }}>
        home
      </a>
    ),
  },
  {
    key: 2,
    icon: <ContactsOutlined style={{ fontSize: 14 }} />,
    label: (
      <a href="/contato" style={{ fontSize: 14 }}>
        contato
      </a>
    ),
  }
];

const AppHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', background: '#00695c' }}>
      <div className="demo-logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        theme='dark'
        style={{ flex: 1, minWidth: 0, background: 'transparent' }}
      />
    </Header>
  );
};

export default AppHeader;
