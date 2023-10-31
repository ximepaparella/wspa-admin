// components/DashboardLayout.js
import React from "react";
import "../../../app/globals.css";
import "../../../app/grid.css";
import Menu from "@/components/Dashboard/Menu/Menu";
import { Col, Row } from "antd";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <main>
          <Row>
            <Col span={4}>
              <Menu />
            </Col>
            <Col span={12}> {children}</Col>
          </Row>
        </main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
