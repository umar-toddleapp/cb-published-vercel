"use client";

import { useParams, useRouter } from "next/navigation";
import { CourseMapTable } from "@/common-components";

import classes from "./page.module.css";

import {
  coursesTableHeaders,
  coursesTableData,
} from "../../../_modules/Constants";

export default function CourseMap() {
  const params = useParams();
  const router = useRouter();
  const { websiteId } = params;

  const onRowClick = id => {
    router.push(`/${websiteId}/course-map/${id}`);
  };

  return (
    <div className={classes.container}>
      <CourseMapTable
        headers={coursesTableHeaders}
        feedData={coursesTableData}
        onRowClick={onRowClick}
      />
    </div>
  );
}
