"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import _ from "lodash";
import Image from "next/image";

import {
  courseData,
  departmentMapData,
} from "../../../../../_modules/Constants";
import { UnitCard, Breadcrumb } from "@/common-components";
import TitleAndOverview from "@/components/TitleAndOverview";
import classes from "./page.module.scss";

const UnitsPage = () => {
  const params = useParams();
  const router = useRouter();
  const { courseId, departmentId, gradeId, websiteId } = params;

  // Get the course data
  const course = _.get(courseData, courseId);

  // Find the department and grade data for breadcrumbs
  const departmentData = _.find(departmentMapData, { id: departmentId });
  const gradeData = _.find(_.get(departmentData, "children", []), {
    id: gradeId,
  });

  const handleBreadcrumbClick = (item, index) => {
    if (index === 0) {
      // Navigate to department page
      router.push(`/${websiteId}/department-map/${departmentId}`);
    } else if (index === 1) {
      // Navigate to grade page
      router.push(
        `/${websiteId}/department-map/${departmentId}/grades/${gradeId}`
      );
    }
    // Course is the last item, no navigation needed
  };

  const breadcrumbItems = [
    {
      id: departmentId,
      label: _.get(departmentData, "label", "Department"),
    },
    {
      id: gradeId,
      label: _.get(gradeData, "label", "Grade"),
    },
    {
      id: courseId,
      label: _.get(course, "label", "Course"),
    },
  ];

  if (_.isEmpty(course)) {
    return (
      <div className={classes.container}>
        <p>Course not found</p>
      </div>
    );
  }

  const title = _.get(course, "label", "Course");
  const units = _.get(course, "units", []);

  return (
    <div className={classes.container}>
      <Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />
      <TitleAndOverview
        title={title}
        overview="Explore the comprehensive units designed to guide students through progressive learning experiences. Each unit is carefully structured with engaging activities, assessments, and resources to support deep understanding and skill development."
      />

      {!_.isEmpty(units) ? (
        <div className={classes.unitsWrapper}>
          {_.map(units, unit => {
            return (
              <UnitCard
                key={unit.id}
                label={_.get(unit, "label")}
                name={_.get(unit, "name")}
                duration={_.get(unit, "duration")}
                weeks={_.get(unit, "weeks")}
                learningExperiences={_.get(unit, "learningExperiences")}
                assessments={_.get(unit, "assessments")}
                image={_.get(unit, "image")}
                ImageComponent={Image}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.emptyState}>
          <p>No units available for this course</p>
        </div>
      )}
    </div>
  );
};

export default UnitsPage;
