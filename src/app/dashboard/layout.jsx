// components/DashboardLayout.js
import React from "react";
import Menu from "@/components/Dashboard/Menu/Menu";
import { Col, Row } from "antd";
import DashboardFooter from "@/components/Dashboard/Footer";
import DashboardHeader from "@/components/Dashboard/Header";
import styles from "./dashboard-layout.module.scss";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.dashboard}>
        <DashboardHeader />
        <main>
          <Row>
            <Col span={4}>
              <Menu />
            </Col>
            <Col span={18} className={styles.container}> {children}</Col>
          </Row>
        </main>
        <DashboardFooter />
      </body>
    </html>
  );
}
