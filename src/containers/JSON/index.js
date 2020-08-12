import React, { useContext } from "react";

import Editor from "../../components/Editor";
import Tippy from "@tippyjs/react";

import AppContext from "../../AppContext";
import Plus from "../../components/Icons/Plus";
import Cross from "../../components/Icons/Cross";

import "./index.scss";

const JSON = () => {
  const { appData, onChangeAppData } = useContext(AppContext);

  const jsonData = appData.json || {};

  const { text } = jsonData;

  const onChangeJson = (value) => {
    onChangeAppData("json", {
      ...jsonData,
      text: value,
    });
  };

  return (
    <section className="app json-app">
      <div className="json-tabs">
        <div className="tab-header">
          <h4 className="title">Tabs</h4>
          <Tippy content="Add a new tab">
            <Plus className="add-tab"/>
          </Tippy>
        </div>
        <div className="tab-list">
          <div className="tab">
            <span className="tab-name">Abcd cxz</span>
            <Tippy content="Delete tab">
              <Cross className="delete-tab"/>
            </Tippy>
          </div>
        </div>
      </div>
      <div className="json-editor">
        <Editor
          title="JSON Editor"
          value={text}
          onValueChange={onChangeJson}
          jsonEditor
          jsonModeEnabled
          enableJSONLint
          headerEditable
        />
      </div>
    </section>
  );
};

export default JSON;
