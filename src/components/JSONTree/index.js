import React from "react";
import ReactJson from "react-json-view";

import "./index.scss";

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      <ReactJson
        name={null}
        theme={"railscasts"}
        indentWidth={2}
        collapsed={1}
        src={data}
        enableClipboard
      />
    </div>
  );
};

export default TreeView;
