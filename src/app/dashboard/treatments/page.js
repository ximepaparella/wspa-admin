"use client";

import React from "react";
import { Table, Breadcrumb } from "antd";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import styles from "../../page.module.scss";
import useTreatmentData from "@/lib/hook/useTreatments";


const Treatments = () => {
  const { treatments, columns, loading } = useTreatmentData(); // Use the custom hook to fetch data
  return (
    <DashboardLayout>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/treatments">Tratamientos</a>,
          },
          {
            title: <a href="/">Ver todos</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <h1>Tratamientos</h1>
        </div>
        <div className={styles["dashboard-content"]}>
          <Table
            columns={columns} // Use your existing columns
            dataSource={treatments} // Use the fetched treatments data
            loading={loading} // Display loading state while data is being fetched
          />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Treatments;
