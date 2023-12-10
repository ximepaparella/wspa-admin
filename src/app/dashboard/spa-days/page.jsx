"use client";
import React from "react";
import { Table, Breadcrumb } from "antd";
import styles from "../../page.module.scss";
import useSpaDays from "@/lib/hook/useSpaDays";

const SpaDays = () => {
  const { spaDays, columns, loading } = useSpaDays(); // Use the custom hook to fetch data
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/treatments">Días de Spa</a>,
          },
          {
            title: <a href="/">Ver todos</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <h1>Días de Spa</h1>
        </div>
        <div className={styles["dashboard-content"]}>
          <Table
            columns={columns} // Use your existing columns
            dataSource={spaDays} // Use the fetched treatments data
            loading={loading} // Display loading state while data is being fetched
          />
        </div>
      </section>
    </>
  );
};

export default SpaDays;
