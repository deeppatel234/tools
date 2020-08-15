import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";

import Edit from "../Icons/Edit";
import Cross from "../Icons/Cross";
import Check from "../Icons/Check";

import "./index.scss";

const EditableInput = ({ value, onChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const onDone = () => {
    if (inputValue) {
      onChange(inputValue);
      toggleEditMode();
    }
  }

  if (editMode) {
    return (
      <span className="editable-input">
        <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <Check onClick={onDone} />
        <Cross onClick={toggleEditMode} />
      </span>
    );
  }

  return (
    <span className="editable-input-title">
      {value}
      <Tippy content="Edit">
        <Edit className="edit" onClick={toggleEditMode} />
      </Tippy>
    </span>
  );
};

export default EditableInput;
