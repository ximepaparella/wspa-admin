"use client";
import React from "react";
import { Table, Breadcrumb, Typography } from "antd";
import styles from "../../page.module.scss";
import useUsers from "@/lib/hook/useUsers";
const  { Title } = Typography

const Users = () => {
  const { users, columns, loading } = useUsers(); // Use the custom hook to fetch data
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/users">Usuarios</a>,
          },
          {
            title: <a href="/">Ver todos</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
        <Title level={2}>Usuarios</Title>
        </div>
        <div className={styles["dashboard-content"]}>
          <Table
            columns={columns} // Use your existing columns
            dataSource={users} // Use the fetched treatments data
            loading={loading} // Display loading state while data is being fetched
          />
        </div>
      </section>
    </>
  );
};

export default Users;
