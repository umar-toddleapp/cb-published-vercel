import React from "react";
import classes from "./TabsHeader.module.css";
import _ from "lodash";
import classNames from "classnames";
import CardPlaceholder from "../CardPlaceholder";

export default function TabsHeader({
  title,
  logo,
  tabs = [],
  activeTab,
  onTabChange,
  backgroundColor,
  ImageComponent,
}) {
  const handleTabClick = key => {
    if (onTabChange) {
      onTabChange(key);
    }
  };

  const Image = ImageComponent || "img";
  const shouldShowPlaceholder = !logo;
  return (
    <header
      className={classes.container}
      style={backgroundColor ? { backgroundColor } : {}}
    >
      <div className={classes.leftSection}>
        {shouldShowPlaceholder ? (
          <CardPlaceholder
            title={title}
            className={classes.placeholderImage}
            iconSize={"xxx-small"}
            iconBackground={"var(--tag-background-violet-default)"}
            iconColor={"var(--tag-foreground-violet)"}
          />
        ) : (
          <Image
            src={logo}
            alt="School Logo"
            className={classes.logo}
            width={32}
            height={32}
          />
        )}
        <h1 className={classNames(classes.title, "text-label-l")}>{title}</h1>
      </div>

      {_.size(tabs) > 1 && (
        <nav className={classes.tabsContainer}>
          {_.map(tabs, tab => {
            const { label, key } = tab;

            const isActive = activeTab === key;

            const tabClasses = classNames({
              [classes.tab]: true,
              [classes.activeTab]: isActive,
              ["text-label"]: isActive,
              ["text-body"]: !isActive,
            });

            return (
              <button
                key={key}
                className={tabClasses}
                onClick={() => handleTabClick(key)}
              >
                {label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
