import React from "react";
import classNames from "classnames";

import "./index.scss";

const Icon = ({ children, className, ...props }) => {
  return (
    <svg
      className={classNames("icon", className)}
      width="1em"
      height="1em"
      fill="currentColor"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
