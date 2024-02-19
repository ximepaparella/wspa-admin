"use client";
import React from "react";
import { Table, Breadcrumb , Typography} from "antd";
import styles from "../../page.module.scss";  
import useWatterCircuits from "@/lib/hook/useWatterCircuits";
const { Title } = Typography


const WatterCircuits = () => {
  const { watterCircuits, columns, loading } = useWatterCircuits(); // Use the custom hook to fetch data
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
        <Title level={2}>Circuitos de Agua</Title>
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
