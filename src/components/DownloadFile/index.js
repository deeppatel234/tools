import React from "react";
import Tippy from "@tippyjs/react";

import Download from "../Icons/Download";

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

const DownloadFile = ({ text, className }) => {

  const onClickDownload = async (event) => {
    event.stopPropagation();
    createAndDownloadFile(text);
  };

  return (
    <Tippy content="Download">
      <Download className={className} onClick={onClickDownload} />
    </Tippy>
  );
};

export default DownloadFile;
