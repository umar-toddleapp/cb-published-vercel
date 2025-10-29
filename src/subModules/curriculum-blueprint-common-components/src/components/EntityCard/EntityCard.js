import React from "react";

import classNames from "classnames";
import classes from "./EntityCard.module.css";

import CardPlaceholder from "../CardPlaceholder";

import { Tooltip } from "@toddle-edu/ds-web";

const EntityCard = ({ cardImage, title, subtitle, ImageComponent }) => {
  const Image = ImageComponent || "img";

  const shouldShowPlaceholder = !cardImage;

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        {shouldShowPlaceholder ? (
          <CardPlaceholder title={title} className={classes.placeholderImage} />
        ) : (
          <Image
            src={cardImage}
            alt={title}
            className={classes.image}
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className={classes.contentContainer}>
        <Tooltip tooltip={title}>
          <div
            className={classNames("text-label-l", "truncate", classes.title)}
          >
            {title}
          </div>
        </Tooltip>
        <div className={classNames("text-body", classes.subtitle)}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default EntityCard;
