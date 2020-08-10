import React, { useContext } from "react";

import Editor from "../../components/Editor";

import AppContext from "../../AppContext";

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
      {/* <div className="json-tabs">
        <h3>Tabs</h3>
        <div>
          <div>
            Abcd cxz
          </div>
        </div>
      </div> */}
      <div className="json-editor">
        <Editor
          title="JSON Editor"
          value={text}
          onValueChange={onChangeJson}
          jsonEditor
          jsonModeEnabled
          enableJSONLint
        />
      </div>
    </section>
  );
};

export default JSON;
