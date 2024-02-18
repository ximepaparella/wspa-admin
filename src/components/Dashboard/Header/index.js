import React from "react";
import styles from "./header.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const DashboardHeader = () => {

  return (
    <header className={styles.header}>
      WSPA
      <Avatar
      style={{
        color: '#000',
        backgroundColor: '#fff',
      }}
      icon={<UserOutlined  />}
    />
    </header>
  );
};

export default DashboardHeader;
