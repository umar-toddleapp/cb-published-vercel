"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import _ from "lodash";

import { gradeMapData } from "../../../../_modules/Constants";
import TitleAndOverview from "@/components/TitleAndOverview";
import EntityCardsWrapper from "@/components/EntityCardsWrapper";
import classes from "./page.module.scss";

export default function GradeIdPage() {
  const params = useParams();
  const router = useRouter();
  const { gradeId, websiteId } = params;

  // Find the grade data using lodash and get the title
  const gradeData = _.find(gradeMapData, { id: gradeId });
  const title = _.get(gradeData, "label", "Grade Map");
  const children = _.get(gradeData, "children", []);

  const handleCardClick = department => {
    const departmentId = _.get(department, "id");
    router.push(
      `/${websiteId}/grade-map/${gradeId}/departments/${departmentId}`
    );
  };

  return (
    <div className={classes.container}>
      <TitleAndOverview
        title={title}
        overview="Our Kindergarten curriculum respects each child's unique and changing needs by addressing skills to foster self-esteem, an open mind, and individuality. The learners are provided with both academics and a proper social environment full of the experiences necessary to develop both an enthusiasm for learning and the skills needed for students to reach their maximum potential in the world today. Students will learn to respect one another and work towards expanding their 21st Century Skills by asking questions, taking risks and challenging themselves."
      />
      <EntityCardsWrapper data={children} onCardClick={handleCardClick} />
    </div>
  );
}
