import React from "react";
import classes from "./CourseMapTable.module.css";
import { Table } from "@toddle-edu/ds-web";

export default function CourseMapTable({ headers, feedData, onRowClick }) {
  return (
    <div className={classes.container}>
      <Table
        dsVersion="2.0"
        headers={headers}
        data={feedData}
        headerTheme="subtle"
        showBorder={true}
        onRowClick={onRowClick}
      />
    </div>
  );
}
