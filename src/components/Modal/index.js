import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ModalComponent from "./ModalComponent";

import "./index.scss";

const modalRoot = document.body;

const Modal = ({ visible, component: Component, destroyOnClose, ...rest }) => {
  const [unMounted, setUnMounted] = useState(true);

  useEffect(() => {
    if (visible) {
      setUnMounted(false);
    }
  }, [visible]);

  if (destroyOnClose && unMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <Component setUnMounted={setUnMounted} visible={visible} {...rest} />,
    modalRoot
  );
};

Modal.Body = ({ children, className, ...props }) => (
  <div className={`modal-body ${className || ""}`} {...props}>
    {children}
  </div>
);
Modal.Footer = ({ children, ...props }) => (
  <div className="modal-footer" {...props}>
    {children}
  </div>
);

Modal.defaultProps = {
  component: ModalComponent,
  destroyOnClose: true,
};

export default Modal;
