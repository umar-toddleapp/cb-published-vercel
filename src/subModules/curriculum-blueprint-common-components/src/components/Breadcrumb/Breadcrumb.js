import React from "react";
import _ from "lodash";
import { ChevronRightOutlined } from "@toddle-edu/ds-icons";
import classNames from "classnames";
import classes from "./Breadcrumb.module.css";

const Breadcrumb = ({ items = [], onItemClick = () => {} }) => {
  const handleClick = (item, index) => {
    if (item.onClick) {
      item.onClick(item, index);
    } else {
      onItemClick(item, index);
    }
  };

  return (
    <nav>
      <div className={classes.breadcrumbList}>
        {_.map(items, (item, index) => {
          const isLast = index === _.size(items) - 1;
          const textClass = classNames("text-body", {
            [classes.activeItem]: isLast,
            [classes.clickableItem]: !isLast,
          });

          return (
            <React.Fragment key={item.id || index}>
              <span
                className={textClass}
                onClick={() => !isLast && handleClick(item, index)}
                role={!isLast ? "button" : "text"}
                tabIndex={!isLast ? 0 : undefined}
                onKeyDown={
                  !isLast
                    ? e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleClick(item, index);
                        }
                      }
                    : undefined
                }
              >
                {item.label}
              </span>
              {!isLast && (
                <ChevronRightOutlined
                  className={classes.separator}
                  size="xxx-small"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
