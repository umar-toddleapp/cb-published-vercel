"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import _ from "lodash";

import { gradeMapData } from "../../../_modules/Constants";

export default function GradeMap() {
  const router = useRouter();
  const params = useParams();
  const { websiteId } = params;

  useEffect(() => {
    // Redirect to first grade on page load
    const firstGradeId = _.get(gradeMapData, "[0].id");
    if (firstGradeId) {
      router.push(`/${websiteId}/grade-map/${firstGradeId}`);
    }
  }, [router, websiteId]);

  return null;
}
