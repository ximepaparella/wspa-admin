"use client";
import React from "react";
import { Table, Breadcrumb } from "antd";
import styles from "../../page.module.scss";
import useMemberships from "@/lib/hook/useMemberships";

const Memberships = () => {
  const { memberships, columns, loading } = useMemberships(); // Use the custom hook to fetch data
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/treatments">Membresías</a>,
          },
          {
            title: <a href="/">Ver todos</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <h1>Membresías</h1>
        </div>
        <div className={styles["dashboard-content"]}>
          <Table
            columns={columns} // Use your existing columns
            dataSource={memberships} // Use the fetched treatments data
            loading={loading} // Display loading state while data is being fetched
          />
        </div>
      </section>
    </>
  );
};

export default Memberships;
