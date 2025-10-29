"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import _ from "lodash";

import { departmentMapData } from "../_modules/Constants";
import TitleAndOverview from "@/components/TitleAndOverview";
import EntityCardsWrapper from "@/components/EntityCardsWrapper";
import classes from "./page.module.scss";

export default function DepartmentIdPage() {
  const params = useParams();
  const router = useRouter();
  const { departmentId, websiteId } = params;

  // Find the department data using lodash and get the title
  const departmentData = _.find(departmentMapData, { id: departmentId });
  const title = _.get(departmentData, "label", "Department Map");
  const children = _.get(departmentData, "children", []);

  const handleCardClick = grade => {
    const gradeId = _.get(grade, "id");
    router.push(
      `/${websiteId}/department-map/${departmentId}/grades/${gradeId}`
    );
  };

  return (
    <div className={classes.container}>
      <TitleAndOverview
        title={title}
        overview="Our curriculum is designed to provide a comprehensive and engaging learning experience across all grade levels. Students develop critical thinking skills, creativity, and a deep understanding of subject matter through carefully structured courses and units. The program fosters both academic excellence and personal growth, preparing students for success in their educational journey."
      />
      <EntityCardsWrapper data={children} onCardClick={handleCardClick} />
    </div>
  );
}
