"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import _ from "lodash";

import { departmentMapData } from "./_modules/Constants";

export default function DepartmentMap() {
  const router = useRouter();
  const params = useParams();
  const { websiteId } = params;

  useEffect(() => {
    // Redirect to first department on page load
    const firstDepartmentId = _.get(departmentMapData, "[0].id");
    if (firstDepartmentId) {
      router.push(`/${websiteId}/department-map/${firstDepartmentId}`);
    }
  }, [router, websiteId]);

  return null;
}
