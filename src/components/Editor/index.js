import React, { useState, memo } from "react";
import classnames from "classnames";
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
import EditableInput from "../EditableInput";
import Braces from "../Icons/Braces";
import JSONTree from "../JSONTree";
import JsonParser from "../JSONTree/JsonParser";
import KeyboardTrigger from "../KeyboardTrigger";
import UploadModal from '../UploadModal';

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
  id,
  title,
  value,
  onValueChange,
  jsonEditor,
  jsonModeEnabled,
  headerEditable,
  onChangeHeader,
  enableSortcuts,
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
      onValueChange(formated, id);
    } catch (err) {
      addToast("Invalid JSON data", { appearance: "error" });
    }
  };

  const onClickMinify = () => {
    try {
      const formated = minify(value);
      onValueChange(formated, id);
    } catch (err) {
      addToast("Invalid JSON data", { appearance: "error" });
    }
  };

  const onDataUpload = text => {
    onValueChange(text, id);
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h5 className="title">
          {
            headerEditable ? (
              <EditableInput value={title} onChange={onChangeHeader} />
            ) : title
          }
        </h5>
        <div className="actions">
          {jsonEditor ? (
            <>
              {jsonMode ? (
                <>
                  <KeyboardTrigger
                    triggerKey="b"
                    tooltip="JSON Formate"
                    onClick={onClickBeautify}
                  >
                    <span className="action-item">
                      Beautify
                    </span>
                  </KeyboardTrigger>
                  <KeyboardTrigger
                    triggerKey="m"
                    tooltip="JSON Minify"
                    onClick={onClickMinify}
                  >
                    <span className="action-item">
                      Minify
                    </span>
                  </KeyboardTrigger>
                  <KeyboardTrigger
                    triggerKey="t"
                    tooltip="JSON Tree View"
                    onClick={toggalTreeView}
                  >
                   <Braces
                      className={classnames("action-item", {
                        active: jsonTreeView,
                      })}
                    />
                  </KeyboardTrigger>
                </>
              ) : null}
              {!jsonModeEnabled ? (
                <KeyboardTrigger
                  triggerKey="j"
                  tooltip="JSON Mode"
                  onClick={toggalJsonMode}
                >
                  <span
                    className={classnames("action-item", { active: jsonMode })}
                  >
                    JSON
                  </span>
                </KeyboardTrigger>
              ) : null}
            </>
          ) : null}
          <UploadModal onDataUpload={onDataUpload}>
            <span className="action-item">
              Import
            </span>
          </UploadModal>
          <DownloadFile
            className="action-item"
            text={value}
            enableSortcuts={enableSortcuts}
          />
          <CopyToClipBoard
            enableSortcuts={enableSortcuts}
            className="action-item"
            text={value}
          />
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
                onValueChange(value, id);
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
            onValueChange(value, id);
          }}
        />
      )}
    </div>
  );
});

Editor.defaultProps = {
  jsonEditor: false,
  jsonModeEnabled: false,
  headerEditable: false,
  enableSortcuts: true,
};

export default Editor;
