// components/DashboardLayout.js
import React from "react";
import "../../../app/globals.css";
import "../../../app/grid.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}