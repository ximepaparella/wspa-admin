"use client";
import React from "react";
import { Table, Breadcrumb } from "antd";
import styles from "../../page.module.scss";  
import useManageWatterCircuits from "@/lib/hook/useManageWatterCircuits";

const WatterCircuits = () => {
  const { watterCircuits, columns, loading } = useManageWatterCircuits(); // Use the custom hook to fetch data
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/watter-circuits">Circuitos de Agua</a>,
          },
          {
            title: <a href="/">Ver todos</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <h1>Circuitos de Agua</h1>
        </div>
        <div className={styles["dashboard-content"]}>
          <Table
            columns={columns} // Use your existing columns
            dataSource={watterCircuits} // Use the fetched treatments data
            loading={loading} // Display loading state while data is being fetched
          />
        </div>
      </section>
    </>
  );
};

export default WatterCircuits;
