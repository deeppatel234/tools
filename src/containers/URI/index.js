import React, { useState } from "react";

import Editor from "../../components/Editor";
import Button from "../../components/Button";
import ChevronLeft from "../../components/Icons/ChevronLeft";
import ChevronRight from "../../components/Icons/ChevronRight";
import { saveLSAsync, getLS } from "../../storage/localStoarage.js";

import "./index.scss";

const URI = () => {
  const [decodedData, setDecodedData] = useState(
    () => getLS("decodedData") || ""
  );
  const [encodedData, setEncodedData] = useState(
    () => getLS("encodedData") || ""
  );

  const onChangeEncoded = (value) => {
    setEncodedData(value);
    saveLSAsync("encodedData", value);
  };

  const onChangeDecoded = (value) => {
    setDecodedData(value);
    saveLSAsync("decodedData", value);
  };

  const onClickEncode = () => {
    onChangeEncoded(
      encodeURIComponent(decodedData).replace(/'/g, "%27").replace(/"/g, "%22")
    );
  };

  const onClickDecode = () => {
    onChangeDecoded(decodeURIComponent(encodedData).replace(/\+/g, " "));
  };

  return (
    <section className="app uri-app">
      <div className="uri-section">
        <Editor
          title="Encoded"
          value={encodedData}
          onValueChange={onChangeEncoded}
          enableSortcuts={false}
        />
      </div>
      <div className="action-section">
        <Button onClick={onClickEncode}>
          <ChevronLeft className="button-icon-left" /> Encode
        </Button>
        <Button onClick={onClickDecode}>
          Decode <ChevronRight className="button-icon-right" />
        </Button>
      </div>
      <div className="uri-section">
        <Editor
          title="Decoded"
          value={decodedData}
          onValueChange={onChangeDecoded}
          jsonEditor
        />
      </div>
    </section>
  );
};

export default URI;
