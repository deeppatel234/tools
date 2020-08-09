import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/theme/material-ocean.css";
import "codemirror/addon/lint/lint.css";

import CopyToClipBoard from "../CopyToClipboard";

import "./index.scss";

const Editor = ({ title, value, onValueChange, ...props }) => {
  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h3 className="title">{title}</h3>
        <div className="actions">
          <CopyToClipBoard text={value} />
        </div>
      </div>
      <CodeMirror
        {...props}
        options={{
          theme: "material-ocean",
          lineNumbers: true,
          lineWrapping: true,
          matchBrackets: true,
          autoCloseBrackets: true,
        }}
        value={value}
        onBeforeChange={(editor, data, value) => {
          onValueChange(value);
        }}
      />
    </div>
  );
};

export default Editor;
