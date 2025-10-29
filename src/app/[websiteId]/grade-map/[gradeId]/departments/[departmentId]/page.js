"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import _ from "lodash";
import Image from "next/image";

import { gradeMapData, courseData } from "../../../../../../_modules/Constants";
import { CourseCard, Breadcrumb } from "@/common-components";
import TitleAndOverview from "@/components/TitleAndOverview";
import classes from "./page.module.scss";

const DepartmentPage = () => {
  const params = useParams();
  const router = useRouter();
  const { gradeId, departmentId, websiteId } = params;

  // Find the grade data
  const gradeData = _.find(gradeMapData, { id: gradeId });

  // Find the department data within the grade
  const departmentData = _.find(_.get(gradeData, "children", []), {
    id: departmentId,
  });

  const courses = _.get(departmentData, "courses", []);

  const handleViewCourse = courseId => {
    // Navigate to units page
    router.push(
      `/${websiteId}/grade-map/${gradeId}/departments/${departmentId}/courses/${courseId}`
    );
  };

  const handleBreadcrumbClick = (item, index) => {
    if (index === 0) {
      // Navigate to grade page
      router.push(`/${websiteId}/grade-map/${gradeId}`);
    }
    // Department is the last item, no navigation needed
  };

  const breadcrumbItems = [
    {
      id: gradeId,
      label: _.get(gradeData, "label", "Grade"),
    },
    {
      id: departmentId,
      label: _.get(departmentData, "label", "Department"),
    },
  ];

  if (_.isEmpty(departmentData)) {
    return (
      <div className={classes.container}>
        <p>Department not found</p>
      </div>
    );
  }

  const title = _.get(departmentData, "label", "Department");

  return (
    <div className={classes.container}>
      <Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />
      <TitleAndOverview
        title={title}
        overview="In Kindergarten Balanced Literacy works towards independence and self-direction  to develop passionate, lovers of reading and writing.  The balanced literacy components are as follows: read aloud, guided reading, shared reading, interactive writing, shared writing, Reading Workshop, Writing Workshop and Word study."
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
          <p>No courses available for this department</p>
        </div>
      )}
    </div>
  );
};

export default DepartmentPage;
