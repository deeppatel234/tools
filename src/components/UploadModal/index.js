import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

import Modal from "../Modal";
import Button from "../Button";
import KeyboardTrigger from "../KeyboardTrigger";

import "./index.scss";

const UploadModal = ({ onDataUpload, children }) => {
  const [isVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    "http://www.mocky.io/v2/5ec3e150300000f8c339c4f2"
  );
  const { addToast } = useToasts();

  const onCloseModal = () => {
    setModalVisible(false);
    setUrl('');
  };

  const onClickImport = () => {
    setModalVisible(true);
  };

  const onUpload = () => {
    if (!url) {
      return false;
    }

    setIsLoading(true);
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setIsLoading(false);
        onDataUpload(res);
        onCloseModal();
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        setIsLoading(false);
      });
  };

  return (
    <>
      <KeyboardTrigger
        triggerKey="i"
        tooltip="Import from URL"
        onClick={onClickImport}
      >
        {children}
      </KeyboardTrigger>
      <Modal visible={isVisible} onClose={onCloseModal} maskClosable={!isLoading}>
        <Modal.Body className="upload-modal-body">
          <div className="header">Import</div>
          <div className="body">
            <input
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isLoading} onClick={onUpload}>
            Upload
          </Button>
          <Button disabled={isLoading} outline onClick={onCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadModal;
