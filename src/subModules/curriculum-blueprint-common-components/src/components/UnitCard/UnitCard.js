import React from "react";
import classes from "./UnitCard.module.css";
import CardPlaceholder from "../CardPlaceholder";
import classNames from "classnames";
import { IconButton } from "@toddle-edu/ds-web";
import { ChevronRightOutlined } from "@toddle-edu/ds-icons";

export default function UnitCard({
  label,
  name,
  duration,
  weeks,
  learningExperiences,
  assessments,
  image,
  ImageComponent,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        {image && ImageComponent ? (
          <ImageComponent
            src={image}
            alt={name}
            fill
            className={classes.image}
          />
        ) : (
          <CardPlaceholder title={label} className={classes.placeholder} />
        )}
      </div>
      <div className={classes.rightSection}>
        <div className={classes.contentContainer}>
          <div className={classes.header}>
            <div className={classes.labelContainer}>
              <span className={classNames(classes.label, "text-body-s")}>
                {label}
              </span>
            </div>
            <h5 className="text-heading-5">{name}</h5>
          </div>
          <div className={classes.metadata}>
            <div className={classes.metadataValue}>{duration}</div>
            <div className={classes.dot} />
            <div className={classes.metadataValue}>{weeks}</div>
            <div className={classes.dot} />
            <div className={classes.metadataValue}>
              {learningExperiences} LEs
            </div>
            <div className={classes.dot} />
            <div className={classes.metadataValue}>
              {assessments} Assessments
            </div>
          </div>
        </div>
        <div>
          <IconButton
            dsVersion="2.0"
            icon={<ChevronRightOutlined />}
            variant="neutral"
            type="outlined"
          />
        </div>
      </div>
    </div>
  );
}
