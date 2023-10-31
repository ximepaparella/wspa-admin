// components/DashboardLayout.js
import "../../../app/globals.css";
import "../../../app/grid.css";
import React from "react";

export default function Loginlayout({ children }) {
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