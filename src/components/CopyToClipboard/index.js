import React from "react";
import { useToasts } from "react-toast-notifications";
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import Clipboard from "../Icons/Clipboard";

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

const CopyToClipBoard = ({ text }) => {
  const { addToast } = useToasts();

  const onClickCopy = async (event) => {
    event.stopPropagation();
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
    <Tippy content="Copy">
      <Clipboard onClick={onClickCopy} />
    </Tippy>
  );
};

export default CopyToClipBoard;
