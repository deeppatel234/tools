import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import classnames from "classnames";
import { useToasts } from "react-toast-notifications";

import Editor from "../../components/Editor";
import JSONTab from "../../storage/JSONTab";

import Plus from "../../components/Icons/Plus";
import Cross from "../../components/Icons/Cross";
import KeyboardTrigger from "../../components/KeyboardTrigger";
import { keyBy } from "../../utils";
import { isIDBSupported } from "../../storage";

import "./index.scss";

const JSONView = () => {
  const [jsonValue, setJsonValue] = useState("");
  const [tabs, setTabs] = useState({});
  const [selectedTabId, setSelectedTabId] = useState(null);
  const [searchText, setSearch] = useState("");
  const [isSupported, setIsSupported] = useState(isIDBSupported);
  const { addToast } = useToasts();

  const fetchData = () => {
    return JSONTab.getAllTabs().then((data) => {
      if (Array.isArray(data) && data.length) {
        const keyByData = keyBy(data, "id");
        const keys = Object.keys(keyByData);
        setTabs(keyByData);

        if (!selectedTabId) {
          setSelectedTabId(parseInt(keys[0]));
        }
        return parseInt(keys[keys.length - 1]);
      } else {
        onClickAddTab();
      }
    }).catch(() => {
      setIsSupported(false);
    });
  };

  useEffect(() => {
    if (isIDBSupported) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (isIDBSupported && selectedTabId) {
      JSONTab.get(selectedTabId).then((jsonValue) => {
        setJsonValue(jsonValue ? jsonValue.data : "");
      });
    }
  }, [selectedTabId]);

  const onChangeJson = (value, id) => {
    setJsonValue(value);
    if (isIDBSupported) {
      JSONTab.putDebounce(id, { data: value });
    }
  };

  const onClickAddTab = () => {
    JSONTab.add(JSONTab.getInitialData())
      .then(() => {
        fetchData().then(keyAdded => {
          setSelectedTabId(keyAdded);
        });
      })
      .catch((err) => {
        addToast("Something went wrong", { appearance: "error" });
      });
  };

  const onChangeTitle = (newHeader) => {
    JSONTab.changeTitle(selectedTabId, newHeader)
      .then(() => {
        setTabs({
          ...tabs,
          [selectedTabId]: {
            ...tabs[selectedTabId],
            title: newHeader,
          },
        });
      })
      .catch((err) => {
        addToast("Something went wrong", { appearance: "error" });
      });
  };

  const onClickDeleteTab = (id, event) => {
    event.stopPropagation();
    const shouldReset = selectedTabId === id;
    JSONTab.delete(id)
      .then(() => {
        setTabs((oldTabs) => {
          const copyTabs = { ...oldTabs };
          delete copyTabs[id];
          if (shouldReset) {
            setSelectedTabId(parseInt(Object.keys(copyTabs)[0]));
          }
          return copyTabs;
        });
      })
      .catch((err) => {
        addToast("Something went wrong", { appearance: "error" });
      });
  };

  const onChangeTab = (id) => {
    setSelectedTabId(id);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  if (!isSupported) {
    return (
      <section className="app json-app">
        <div className="json-editor">
          <Editor
            key={"jsonEditor"}
            title="JSON Editor"
            value={jsonValue}
            jsonEditor
            jsonModeEnabled
            enableJSONLint
            onValueChange={onChangeJson}
          />
        </div>
      </section>
    );
  }

  const tabList = Object.values(tabs);

  return (
    <section className="app json-app">
      <div className="json-tabs">
        <div className="tab-header">
          <h4 className="title">Tabs</h4>
          <KeyboardTrigger
            triggerKey="n"
            tooltip="Add a new tab"
            onClick={onClickAddTab}
          >
            <Plus className="add-tab" />
          </KeyboardTrigger>
        </div>
        <div className="tab-search">
          <input
            value={searchText}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
            placeholder="Search..."
          />
        </div>
        <div className="tab-list">
          {tabList.map(({ id, title }) => {
            if (
              searchText &&
              !title.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return null;
            }

            return (
              <div
                key={id}
                className={classnames("tab", {
                  active: selectedTabId === id,
                })}
                onClick={() => onChangeTab(id)}
              >
                <span className="tab-name">{title}</span>
                {tabList.length > 1 ? (
                  <Tippy content="Delete tab">
                    <Cross
                      className="delete-tab"
                      onClick={(event) => onClickDeleteTab(id, event)}
                    />
                  </Tippy>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="json-editor">
        {selectedTabId && tabs[selectedTabId] ? (
          <Editor
            key={tabs[selectedTabId].id}
            id={tabs[selectedTabId].id}
            title={tabs[selectedTabId].title}
            value={jsonValue}
            jsonEditor
            jsonModeEnabled
            enableJSONLint
            headerEditable
            onValueChange={onChangeJson}
            onChangeHeader={onChangeTitle}
          />
        ) : null}
      </div>
    </section>
  );
};

export default JSONView;
