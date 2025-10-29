"use client";

import React from "react";

import classes from "./page.module.scss";

import Overview from "./_components/Overview/Overview";

export default function CurriculumOverview() {
  return (
    <div className={classes.container}>
      <Overview />
    </div>
  );
}
