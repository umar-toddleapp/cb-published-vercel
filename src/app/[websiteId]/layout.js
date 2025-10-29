"use client";

import React, { useState, useEffect } from "react";

import _ from "lodash";

import Image from "next/image";

import { useRouter, usePathname } from "next/navigation";

import { TabsHeader } from "@/common-components";

import classes from "./layout.module.scss";

export default function SchoolLayout({ children, params }) {
  const router = useRouter();
  const pathname = usePathname();

  const { websiteId } = params;

  const [activeTab, setActiveTab] = useState(() => {
    // Calculate initial state based on current pathname
    // Look for the main route segment after websiteId
    const segments = _.compact(_.split(pathname, "/"));
    const mainRouteIndex = _.indexOf(segments, websiteId) + 1;
    const mainRoute = segments[mainRouteIndex];

    if (mainRoute) {
      const tabKey = _.join(_.split(mainRoute, "-"), "_");
      return tabKey;
    }
    return "curriculum_overview";
  });

  useEffect(() => {
    // Redirect to curriculum-overview on mount if on the base websiteId route
    if (pathname === `/${websiteId}`) {
      router.push(`/${websiteId}/curriculum-overview`);
    }
  }, [pathname, websiteId, router]);

  // Update active tab when pathname changes
  useEffect(() => {
    const segments = _.compact(_.split(pathname, "/"));
    const mainRouteIndex = _.indexOf(segments, websiteId) + 1;
    const mainRoute = segments[mainRouteIndex];

    if (mainRoute) {
      const tabKey = _.join(_.split(mainRoute, "-"), "_");
      setActiveTab(tabKey);
    }
  }, [pathname, websiteId]);

  const onTabChange = key => {
    setActiveTab(key);

    const route = _.join(_.split(key, "_"), "-");
    router.push(`/${websiteId}/${route}`);
  };

  return (
    <div className={classes.container}>
      <TabsHeader
        onTabChange={onTabChange}
        title="Ramsey School District"
        tabs={[
          {
            key: "curriculum_overview",
            label: "Curriculum overview",
          },
          {
            key: "grade_map",
            label: "Grade map",
          },
          {
            key: "department_map",
            label: "Department map",
          },
          {
            key: "course_map",
            label: "Course map",
          },
        ]}
        activeTab={activeTab}
        backgroundColor="#0F1131"
        ImageComponent={Image}
      />
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
}
