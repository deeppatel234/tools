import React from "react";
import classnames from "classnames";

import "./index.scss";

const Button = ({ children, outline, className, disabled, ...props }) => {
  return (
    <button
      className={classnames(
        {
          button: true,
          outline,
          disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  outline: false,
  disabled: false,
};

export default Button;
