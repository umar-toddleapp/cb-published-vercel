"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import _ from "lodash";

import { Sidebar } from "@/common-components";
import { gradeMapData } from "../../../_modules/Constants";

import classes from "./layout.module.scss";

export default function GradeMapLayout({ children }) {
  const router = useRouter();
  const params = useParams();
  const { websiteId, gradeId, departmentId } = params;

  const [activeItemId, setActiveItemId] = useState(() => {
    // If we have a departmentId, use it; otherwise use gradeId or default
    return departmentId || gradeId || _.get(gradeMapData, "[0].id");
  });

  // Update activeItemId when URL params change
  useEffect(() => {
    const newActiveId =
      departmentId || gradeId || _.get(gradeMapData, "[0].id");
    setActiveItemId(newActiveId);
  }, [departmentId, gradeId]);

  const onItemClick = ({ id, isNested }) => {
    if (isNested) {
      // Find the parent grade and the department using lodash
      const gradeData = _.find(gradeMapData, grade =>
        _.some(grade.children, { id })
      );
      const departmentData = _.find(_.get(gradeData, "children", []), { id });
      const gradeId = _.get(gradeData, "id");
      const departmentId = id;

      if (gradeId && departmentId) {
        console.log("Navigating to department:", {
          gradeId,
          departmentId,
          gradeData,
          departmentData,
        });
        router.push(
          `/${websiteId}/grade-map/${gradeId}/departments/${departmentId}`
        );
      }
      setActiveItemId(id);
    } else {
      // Find the grade data using lodash
      const gradeData = _.find(gradeMapData, { id });

      if (gradeData) {
        console.log("Navigating to grade:", {
          gradeId: id,
          gradeData,
        });
        router.push(`/${websiteId}/grade-map/${id}`);
      }

      setActiveItemId(id);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebarWrapper}>
        <Sidebar
          items={gradeMapData}
          activeItemId={activeItemId}
          onItemClick={onItemClick}
        />
      </div>
      <div className={classes.contentWrapper}>{children}</div>
    </div>
  );
}
