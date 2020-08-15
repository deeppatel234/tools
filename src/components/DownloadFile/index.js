import React from "react";

import Download from "../Icons/Download";
import KeyboardTrigger from "../KeyboardTrigger";

const createAndDownloadFile = (text) => {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );

  element.setAttribute("download", "download");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const DownloadFile = ({ text, className, enableSortcuts }) => {
  const onClickDownload = async (event) => {
    if (event) {
      event.stopPropagation();
    }
    createAndDownloadFile(text);
  };

  return (
    <KeyboardTrigger
      enable={enableSortcuts}
      triggerKey="d"
      tooltip="Download"
      onClick={onClickDownload}
    >
      <Download className={className} />
    </KeyboardTrigger>
  );
};

DownloadFile.defaultProps = {
  enableSortcuts: true,
}

export default DownloadFile;
