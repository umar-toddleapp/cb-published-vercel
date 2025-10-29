"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import _ from "lodash";

import { Sidebar } from "@/common-components";
import { departmentMapData } from "./_modules/Constants";

import classes from "./layout.module.scss";

export default function DepartmentMapLayout({ children }) {
  const router = useRouter();
  const params = useParams();
  const { websiteId, departmentId, gradeId } = params;

  const [activeItemId, setActiveItemId] = useState(() => {
    // If we have a gradeId, use it; otherwise use departmentId or default
    return gradeId || departmentId || _.get(departmentMapData, "[0].id");
  });

  // Update activeItemId when URL params change
  useEffect(() => {
    const newActiveId =
      gradeId || departmentId || _.get(departmentMapData, "[0].id");
    setActiveItemId(newActiveId);
  }, [gradeId, departmentId]);

  const onItemClick = ({ id, isNested }) => {
    if (isNested) {
      // Find the parent department and the grade using lodash
      const departmentData = _.find(departmentMapData, department =>
        _.some(department.children, { id })
      );
      const gradeData = _.find(_.get(departmentData, "children", []), { id });
      const deptId = _.get(departmentData, "id");
      const gradeId = id;

      if (deptId && gradeId) {
        console.log("Navigating to grade:", {
          departmentId: deptId,
          gradeId,
          departmentData,
          gradeData,
        });
        router.push(`/${websiteId}/department-map/${deptId}/grades/${gradeId}`);
      }
      setActiveItemId(id);
    } else {
      // Find the department data using lodash
      const deptData = _.find(departmentMapData, { id });

      if (deptData) {
        console.log("Navigating to department:", {
          departmentId: id,
          deptData,
        });
        router.push(`/${websiteId}/department-map/${id}`);
      }

      setActiveItemId(id);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebarWrapper}>
        <Sidebar
          items={departmentMapData}
          activeItemId={activeItemId}
          onItemClick={onItemClick}
        />
      </div>
      <div className={classes.contentWrapper}>{children}</div>
    </div>
  );
}
