import React, { useState, memo } from "react";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import { useToasts } from "react-toast-notifications";
import jsonlint from "jsonlint-mod";
import { Controlled as CodeMirror } from "react-codemirror2";
import beautify from 'js-beautify/js/lib/beautify';
import minify from 'jsonminify';

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

window.jsonlint = jsonlint;

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
  lint: true,
  gutters: ["CodeMirror-lint-markers"],
  styleActiveLine: true,
};

const Editor = memo(({
  title,
  value,
  onValueChange,
  jsonEditor,
  jsonModeEnabled,
  ...props
}) => {
  const [jsonMode, setJsonMode] = useState(jsonModeEnabled);
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
      const formated = beautify.js_beautify(value, {
        indent_with_tabs: true
      });
      onValueChange(formated);
    } catch (err) {
      addToast("Invalid JSON data", { appearance: "error" });
    }
  };

  const onClickMinify = () => {
    try {
      const formated = minify(value);
      onValueChange(formated);
    } catch (err) {
      addToast("Invalid JSON data", { appearance: "error" });
    }
  }

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h5 className="title">{title}</h5>
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
                  <Tippy content="JSON Minify">
                    <span className="action-item" onClick={onClickMinify}>
                      Minify
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
              {!jsonModeEnabled ? (
                <Tippy content="JSON Mode">
                  <span
                    className={classnames("action-item", { active: jsonMode })}
                    onClick={toggalJsonMode}
                  >
                    JSON
                  </span>
                </Tippy>
              ) : null}
            </>
          ) : null}
          <DownloadFile className="action-item" text={value} />
          <CopyToClipBoard className="action-item" text={value} />
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
});

Editor.defaultProps = {
  jsonEditor: false,
  jsonModeEnabled: false,
};

export default Editor;
