import React from "react";
import classes from "./CourseCard.module.css";
import CardPlaceholder from "../CardPlaceholder";
import classNames from "classnames";
import { Button } from "@toddle-edu/ds-web";
import { RightArrowOutlined } from "@toddle-edu/ds-icons";

export default function CourseCard({
  title,
  description,
  units,
  image,
  ImageComponent,
  onViewClick,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        {image && ImageComponent ? (
          <ImageComponent
            src={image}
            alt={title}
            fill
            className={classes.image}
          />
        ) : (
          <CardPlaceholder title={title} className={classes.placeholder} />
        )}
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.internalContentContainer}>
          <div className={classes.titleAndDescription}>
            <h6 className="text-heading-6">{title}</h6>
            {description && (
              <div
                className={classNames(
                  classes.textSecondary,
                  classes.truncate,
                  "text-body"
                )}
              >
                {description}
              </div>
            )}
          </div>
          <div className={classes.footer}>
            {units && (
              <span
                className={classNames(classes.textSecondary, "text-body-s")}
              >
                {units} units
              </span>
            )}
            {units > 0 && (
              <Button
                rightIcon={<RightArrowOutlined />}
                dsVersion="2.0"
                variant="neutral"
                type="inline"
                size="small"
                onClick={onViewClick}
              >
                View
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
