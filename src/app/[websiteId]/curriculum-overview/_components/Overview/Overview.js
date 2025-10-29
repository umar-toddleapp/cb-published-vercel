import React from "react";

import { CardPlaceholder } from "@/common-components";

import classes from "./Overview.module.scss";
import classNames from "classnames";

const Overview = props => {
  const { banner } = props;

  return (
    <div className={classes.container}>
      {banner ? (
        <Image />
      ) : (
        <CardPlaceholder className={classes.bannerPlaceholder} />
      )}

      <h2 className={classNames("text-heading-2", classes.title)}>
        Curriculum Overview
      </h2>

      <div className="text-body-l">
        The Ramsey School District is committed to providing all K–12 students
        with a high-quality education that builds strong foundational skills in
        the early years, deepens subject knowledge through middle and high
        school, and equips learners to apply their understanding in meaningful,
        real-world contexts. We aim to nurture habits of mind and lifelong
        learning by ensuring that every student has access to excellent
        curriculum and instruction at every stage of their academic journey.
        Below, you’ll find curriculum overviews for our core academic subjects:
        Literacy, Mathematics, Science, and Social Studies. For more specific
        subject-wise or grade-level overviews, please use the navigation on the
        top.
      </div>
    </div>
  );
};

export default Overview;
