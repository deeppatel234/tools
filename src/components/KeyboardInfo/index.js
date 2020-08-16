import React, { useState } from "react";
import Tippy from "@tippyjs/react";

import Keyboard from "../Icons/Keyboard";
import Modal from "../Modal";
import Button from "../Button";
import keyboardImage from "./keyboard.png";

import "./index.scss";

const KeyboardInfo = () => {
  const [isVisible, setModalVisible] = useState(true);

  const toggalModal = () => {
    setModalVisible(!isVisible);
  };

  return (
    <>
      <Tippy content="Keyboard Shortcuts">
        <Keyboard onClick={toggalModal} />
      </Tippy>
      <Modal visible={isVisible} onClose={toggalModal}>
        <Modal.Body className="keyboard-modal-body">
          <div className="header">Keyboard Shortcuts</div>
          <div className="body">
            <p>
              Press and hold <span className="key">Alt</span> key for see available shortcuts
            </p>
            <img className="demo-image" alt="demo" src={keyboardImage} />
          </div >
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggalModal}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KeyboardInfo;
