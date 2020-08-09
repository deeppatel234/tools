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
      <Editor
        title="JSON Editor"
        value={text}
        onValueChange={onChangeJson}
        jsonEditor
        jsonModeEnabled
        enableJSONLint
      />
    </section>
  );
};

export default JSON;
