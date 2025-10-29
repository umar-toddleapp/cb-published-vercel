import React, { useRef, useEffect, useCallback } from "react";

import _ from "lodash";

// import { CaretDownFilled, CaretRightFilled } from "@toddle-edu/ds-icons";
// import { Tooltip } from "@toddle-edu/ds-web";

import classNames from "classnames";
import classes from "./Sidebar.module.css";

const Sidebar = ({ items, activeItemId, onItemClick = () => {} }) => {
  const sidebarRef = useRef(null);
  const activeItemRef = useRef(null);

  // Scroll to active item if not in viewport
  useEffect(() => {
    if (activeItemRef.current && sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const activeItemRect = activeItemRef.current.getBoundingClientRect();

      const isInViewport =
        activeItemRect.top >= sidebarRect.top &&
        activeItemRect.bottom <= sidebarRect.bottom;

      if (!isInViewport) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [activeItemId]);

  const handleItemClick = useCallback(
    ({ id, isNested }) => {
      onItemClick({ id, isNested });
    },
    [onItemClick]
  );

  const getIsItemSelected = itemId => activeItemId === itemId;

  const getIParentOfSelected = item => {
    if (!item.children || !activeItemId) return false;
    return _.some(item.children, child => child.id === activeItemId);
  };

  const getShouldShowChildren = item =>
    getIsItemSelected(item.id) || getIParentOfSelected(item);

  const getIcon = item => {
    if (!item.children || _.isEmpty(item.children)) return null;

    const isExpanded = getShouldShowChildren(item);
    const IconComponent = isExpanded ? (
      <span style="font-size:24px; color:black;">&#9660;</span>
    ) : (
      <span style="font-size:24px; color:black;">&#9654;</span>
    );
    return <IconComponent />;
  };

  const renderItem = ({ item = {}, isNested = false }) => {
    const { id, label, children } = item;

    const isSelected = getIsItemSelected(id);
    const showChildren = getShouldShowChildren(item);

    const itemClasses = classNames({
      [classes.sidebarItem]: true,
      [classes.nestedItem]: isNested,
      [classes.rootItem]: !isNested,
      [classes.selectedItem]: isSelected,
      [classes.unselectedItem]: !isSelected,
      ["text-body"]: !isSelected,
      ["text-label"]: isSelected,
      "[truncate]": true,
    });

    return (
      <React.Fragment key={id}>
        <div
          ref={isSelected ? activeItemRef : null}
          className={itemClasses}
          onClick={() => handleItemClick({ id, isNested })}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleItemClick({ id, isNested });
            }
          }}
        >
          <span className="truncate">{label}</span>
          {!isNested && <div className={classes.icon}>{getIcon(item)}</div>}
        </div>
        \
        {!_.isEmpty(children) && showChildren && (
          <div>
            {_.map(children, childItem =>
              renderItem({ item: childItem, isNested: true })
            )}
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div ref={sidebarRef} className={classes.sidebarContainer}>
      {_.map(items, item => renderItem({ item }))}
    </div>
  );
};

export default Sidebar;
