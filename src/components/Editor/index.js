import React, { useState } from "react";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import { useToasts } from "react-toast-notifications";

import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/theme/material-ocean.css";
import "codemirror/addon/lint/lint.css";

import CopyToClipBoard from "../CopyToClipboard";
import DownloadFile from "../DownloadFile";
import Braces from "../Icons/Braces";
import JSONTree from "../JSONTree";
import JsonParser from "../JSONTree/JsonParser";

import "./index.scss";

const options = {
  theme: "material-ocean",
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  autoCloseBrackets: true,
};

const jsonOptions = {
  ...options,
  mode: "application/json",
};

const Editor = ({ title, value, onValueChange, jsonEditor, ...props }) => {
  const [jsonMode, setJsonMode] = useState(false);
  const [jsonTreeView, setJsonTreeView] = useState(false);

  const { addToast } = useToasts();

  const toggalJsonMode = () => {
    setJsonMode(!jsonMode);
  };

  const toggalTreeView = () => {
    setJsonTreeView(!jsonTreeView);
  };

  const onClickBeautify = () => {
    try {
      onValueChange(JSON.stringify(JSON.parse(value), null, 2));
    } catch (err) {
      addToast("Invalid JSON data", { appearance: "error" });
    }
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h3 className="title">{title}</h3>
        <div className="actions">
          {jsonEditor ? (
            <>
              {jsonMode ? (
                <>
                  <Tippy content="JSON Formate">
                    <span className="action-item" onClick={onClickBeautify}>
                      Beautify
                    </span>
                  </Tippy>
                  <Tippy content="JSON Tree View">
                    <Braces
                      className={classnames("action-item", {
                        active: jsonTreeView,
                      })}
                      onClick={toggalTreeView}
                    />
                  </Tippy>
                </>
              ) : null}
              <Tippy content="JSON Mode">
                <span
                  className={classnames("action-item", { active: jsonMode })}
                  onClick={toggalJsonMode}
                >
                  JSON
                </span>
              </Tippy>
            </>
          ) : null}
          <DownloadFile className="action-item" text={value} />
          <CopyToClipBoard text={value} />
        </div>
      </div>
      {jsonMode ? (
        <>
          {jsonTreeView ? (
            <JsonParser value={value}>
              {({ data }) => <JSONTree data={data} />}
            </JsonParser>
          ) : (
            <CodeMirror
              key="json-editor"
              {...props}
              options={jsonOptions}
              value={value}
              onBeforeChange={(editor, data, value) => {
                onValueChange(value);
              }}
            />
          )}
        </>
      ) : (
        <CodeMirror
          key="text-editor"
          {...props}
          options={options}
          value={value}
          onBeforeChange={(editor, data, value) => {
            onValueChange(value);
          }}
        />
      )}
    </div>
  );
};

Editor.defaultProps = {
  jsonEditor: false,
};

export default Editor;
