"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import _ from "lodash";
import Image from "next/image";

import { departmentMapData, courseData } from "../../../_modules/Constants";
import { CourseCard, Breadcrumb } from "@/common-components";
import TitleAndOverview from "@/components/TitleAndOverview";
import classes from "./page.module.scss";

const GradePage = () => {
  const params = useParams();
  const router = useRouter();
  const { departmentId, gradeId, websiteId } = params;

  // Find the department data
  const departmentData = _.find(departmentMapData, { id: departmentId });

  // Find the grade data within the department
  const gradeData = _.find(_.get(departmentData, "children", []), {
    id: gradeId,
  });

  const courses = _.get(gradeData, "courses", []);
  const departmentLabel = _.get(departmentData, "label", "");

  const handleViewCourse = courseId => {
    // Navigate to units page
    router.push(
      `/${websiteId}/department-map/${departmentId}/grades/${gradeId}/courses/${courseId}`
    );
  };

  const handleBreadcrumbClick = (item, index) => {
    if (index === 0) {
      // Navigate to department page
      router.push(`/${websiteId}/department-map/${departmentId}`);
    }
    // Grade is the last item, no navigation needed
  };

  const breadcrumbItems = [
    {
      id: departmentId,
      label: departmentLabel,
    },
    {
      id: gradeId,
      label: _.get(gradeData, "label", "Grade"),
    },
  ];

  if (_.isEmpty(gradeData)) {
    return (
      <div className={classes.container}>
        <p>Grade not found</p>
      </div>
    );
  }

  const title = _.get(gradeData, "label", "Grade");

  return (
    <div className={classes.container}>
      <Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />
      <TitleAndOverview
        title={title}
        overview={`Explore the ${departmentLabel} curriculum for ${title}. This comprehensive program is designed to engage students with age-appropriate content, hands-on learning experiences, and rigorous assessments that promote deeper understanding and skill mastery.`}
      />

      {!_.isEmpty(courses) ? (
        <div className={classes.coursesGrid}>
          {_.map(courses, course => {
            const courseDetails = _.get(courseData, course.id);
            return (
              <CourseCard
                key={course.id}
                title={_.get(course, "label")}
                description={_.get(courseDetails, "description", "")}
                units={_.get(courseDetails, "numberOfUnits", 0)}
                image={_.get(courseDetails, "image")}
                ImageComponent={Image}
                onViewClick={() => handleViewCourse(course.id)}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.emptyState}>
          <p>No courses available for this grade</p>
        </div>
      )}
    </div>
  );
};

export default GradePage;
