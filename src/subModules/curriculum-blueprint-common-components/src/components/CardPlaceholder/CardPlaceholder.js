import React from "react";
import _ from "lodash";
import { ImageSquareOutlined } from "@toddle-edu/ds-icons";

import classNames from "classnames";
import classes from "./CardPlaceholder.module.css";

const PLACEHOLDER_COLORS = [
  {
    background: "var(--tag-background-purple-default)",
    icon: "var(--tag-foreground-purple)",
  },
  {
    background: "var(--tag-background-pink-default)",
    icon: "var(--tag-foreground-pink)",
  },
  {
    background: "var(--tag-background-blue-default)",
    icon: "var(--tag-foreground-blue)",
  },
  {
    background: "var(--tag-background-green-default)",
    icon: "var(--tag-foreground-green)",
  },
  {
    background: "var(--tag-background-yellow-default)",
    icon: "var(--tag-foreground-yellow)",
  },
  {
    background: "var(--tag-background-teal-default)",
    icon: "var(--tag-foreground-teal)",
  },
];

const getColorIndex = title => {
  if (!title || typeof title !== "string") return 0;
  const chars = _.toArray(title);
  const sum = _.sumBy(chars, ch => ch.codePointAt(0) || 0);
  return sum % PLACEHOLDER_COLORS.length;
};

const CardPlaceholder = ({
  title = "",
  className,
  iconSize,
  iconColor,
  iconBackground,
}) => {
  const colorIndex = getColorIndex(title);
  const colors = PLACEHOLDER_COLORS[colorIndex];

  const placeholderStyle = {
    backgroundColor: iconBackground || colors.background,
    color: iconColor || colors.icon,
  };

  const containerClasses = classNames({
    [classes.container]: true,
    [className]: !!className,
  });

  return (
    <div className={containerClasses} style={placeholderStyle}>
      <ImageSquareOutlined
        size={iconSize || "small"}
        style={{
          color: colors.icon,
        }}
      />
    </div>
  );
};

export default CardPlaceholder;
