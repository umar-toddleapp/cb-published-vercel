import React from "react";

import classes from "./TitleAndOverview.module.scss";

const TitleAndOverview = props => {
  const { title, overview } = props;

  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      {overview ? <div className="text-body-l">{overview}</div> : null}
    </div>
  );
};

export default TitleAndOverview;
