import React from "react";
import { useToasts } from "react-toast-notifications";

import Clipboard from "../Icons/Clipboard";
import KeyboardTrigger from "../KeyboardTrigger";

const copyFallback = (text) => {
  return new Promise((resove, reject) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "-100px";
    textArea.style.left = "-100px";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let commandExecuted = false;

    try {
      commandExecuted = document.execCommand("copy");
    } catch (err) {}

    document.body.removeChild(textArea);

    if (commandExecuted) {
      resove();
    } else {
      reject();
    }
  });
};

export const copyToClipboardText = async (text) => {
  let copied = false;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (err) {}

  try {
    if (!copied) {
      await copyFallback(text);
      copied = true;
    }
  } catch (err) {}

  return copied;
};

const CopyToClipBoard = ({ text, className, enableSortcuts }) => {
  const { addToast } = useToasts();

  const onClickCopy = async (event) => {
    if (event) {
      event.stopPropagation();
    }

    const copied = await copyToClipboardText(text);

    if (copied) {
      addToast("Text successfully copied to clipboard", {
        appearance: "success",
      });
    } else {
      addToast("Error in copy text to clipboard", { appearance: "error" });
    }
  };

  return (
    <KeyboardTrigger
      enable={enableSortcuts}
      triggerKey="c"
      tooltip="Copy"
      onClick={onClickCopy}
    >
      <Clipboard className={className} />
    </KeyboardTrigger>
  );
};

CopyToClipBoard.defaultProps = {
  enableSortcuts: true,
}

export default CopyToClipBoard;
