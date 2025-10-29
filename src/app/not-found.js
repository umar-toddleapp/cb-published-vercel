"use client";

import React from "react";
import classes from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={classes.pageNotFound}>
      <h1 className="text-heading-2">404 - Page Not Found</h1>
    </div>
  );
}
