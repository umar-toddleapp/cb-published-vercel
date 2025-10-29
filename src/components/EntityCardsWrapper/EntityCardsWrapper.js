import React from "react";
import Image from "next/image";
import _ from "lodash";
import { EntityCard } from "@/subModules/curriculum-blueprint-common-components/src";
import classes from "./EntityCardsWrapper.module.scss";

const EntityCardsWrapper = ({ data, onCardClick }) => {
  return (
    <div className={classes.wrapper}>
      {_.map(data, (item) => {
        const coursesCount = _.get(item, "courses.length", 0);
        const subtitle =
          coursesCount === 1 ? "1 course" : `${coursesCount} courses`;

        return (
          <div
            key={item.id}
            onClick={() => onCardClick?.(item)}
            style={{ cursor: "pointer" }}
          >
            <EntityCard
              title={item.label}
              subtitle={subtitle}
              ImageComponent={Image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EntityCardsWrapper;
