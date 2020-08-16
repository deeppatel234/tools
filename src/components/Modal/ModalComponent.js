import React, { useCallback } from "react";
import { CSSTransition } from "react-transition-group";

const ModalComponent = ({
  visible,
  children,
  onClose,
  maskClosable,
  setUnMounted,
  ...restProps
}) => {

  const onCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onClickBody = useCallback(() => {
    if (maskClosable) {
      onCloseModal();
    }
  }, [maskClosable, onCloseModal]);

  const onClickModalWrapper = useCallback((event) => {
    event.stopPropagation();
  }, []);

  return (
    <CSSTransition in={visible} timeout={300} classNames="modal-body-animation">
      <div className="modal-body-wrapper" onClick={onClickBody}>
        <CSSTransition
          in={visible}
          timeout={300}
          classNames="modal-animation"
          onExited={() => setUnMounted(true)}
        >
          <div className="modal-wrapper" onClick={onClickModalWrapper} {...restProps}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

ModalComponent.defaultProps = {
  visible: false,
  onClose: false,
  maskClosable: true,
};

export default ModalComponent;
