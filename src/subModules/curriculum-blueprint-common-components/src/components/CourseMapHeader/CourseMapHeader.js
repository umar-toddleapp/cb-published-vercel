import React from "react";
import classes from "./CourseMapHeader.module.css";

export default function CourseMapHeader({ title, children }) {
  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
