"use client";

import React from "react";
import classes from "./page.module.scss";

export default function NotFound() {
  return (
    <div
      className={classes.pageNotFound}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f8f8f8",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#e74c3c" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#555" }}>Page Not Found</p>
    </div>
  );
}
