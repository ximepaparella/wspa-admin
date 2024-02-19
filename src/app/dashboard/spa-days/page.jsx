"use client";
import React from "react";
import { Table, Breadcrumb, Typography } from "antd";
import styles from "../../page.module.scss";
import useSpaDays from "@/lib/hook/useSpaDays";
const { Title } = Typography;

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
        <Title level={2}>Tratamientos</Title>
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
