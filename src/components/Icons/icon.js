import React, { forwardRef } from "react";
import classNames from "classnames";

import "./index.scss";

const Icon = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <svg
      className={classNames("icon", className)}
      width="1em"
      height="1em"
      fill="currentColor"
      focusable="false"
      {...props}
      ref={ref}
    >
      {children}
    </svg>
  );
});

export default Icon;
