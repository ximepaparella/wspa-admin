'use client';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import styles from './menu.module.scss'
import Link from 'next/link';

const { SubMenu } = Menu;

function getItem(label, key, icon, items, to) {
  return {
    key,
    icon,
    items,
    label,
    to, // Add the 'to' prop for the URL
  };
}

const items = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Tratamientos',
    items: [
      { key: '1', label: 'Ver todos', to: '/dashboard/treatments' },
      { key: '2', label: 'Añadir nuevo', to: '/dashboard/treatments/create' },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Días de spa',
    items: [
      { key: '3', label: 'Ver todos', to: '/dashboard/spa-days' },
      { key: '4', label: 'Añadir nuevo', to: '/dashboard/spa-days/create' },
    ],
  },
  {
    key: 'sub3',
    icon: <SettingOutlined />,
    label: 'Membresias',
    items: [
      { key: '5', label: 'Ver todas', to: '/dashboard/memberships' },
      { key: '6', label: 'Añadir nueva', to: '/dashboard/memberships/create' },
    ],
  },
  {
    key: 'sub4',
    icon: <SettingOutlined />,
    label: 'Circuitos de Spa',
    items: [
      { key: '7', label: 'Ver todas', to: '/dashboard/watter-circuits' },
      { key: '8', label: 'Añadir nueva', to: '/dashboard/watter-circuits/create' },
    ],
  },
  {
    key: 'sub5',
    icon: <SettingOutlined />,
    label: 'Usuarios',
    items: [
      { key: '9', label: 'Ver todos', to: '/dashboard/users' },
      { key: '10', label: 'Añadir nuevo', to: '/dashboard/users/create' },
    ],
  },
  {
    key: 'sub6',
    icon: <SettingOutlined />,
    label: 'Configuraciones',
    items: [
      { key: '11', label: 'Información General', to: '/dashboard/settings/' },
      { key: '12', label: 'Politicas', to: '/dashboard/policies' },
    ],
  },
];

const rootSubmenuKeys = items.map((item) => item.key); // Collect all root submenu keys

const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      className={styles.menu}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      {items.map((item) => (
        item.items ? (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.items.map((subItem) => ( // Use subItem instead of item for subitems
              <Menu.Item key={subItem.key}>
                <Link href={subItem.to}>{subItem.label}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key}>
            <Link href={item.to}>{item.label}</Link>
          </Menu.Item>
        )
      ))}
    </Menu>
  );
};

export default App;