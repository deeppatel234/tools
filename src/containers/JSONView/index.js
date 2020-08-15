import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import classnames from "classnames";

import Editor from "../../components/Editor";
import JSONTab from "../../storage/JSONTab";

import Plus from "../../components/Icons/Plus";
import Cross from "../../components/Icons/Cross";
import { keyBy } from "../../utils";

import "./index.scss";

const JSONView = () => {
  const [jsonValue, setJsonValue] = useState("");
  const [tabs, setTabs] = useState({});
  const [selectedTabId, setSelectedTabId] = useState(null);
  const [searchText, setSearch] = useState("");

  const fetchData = () => {
    JSONTab.getAllTabs().then((data) => {
      if (Array.isArray(data) && data.length) {
        setTabs(keyBy(data, "id"));
      } else {
        onClickAddTab();
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!tabs[selectedTabId]) {
      setSelectedTabId(parseInt(Object.keys(tabs)[0]));
    }
  }, [tabs, selectedTabId]);

  useEffect(() => {
    if (selectedTabId) {
      JSONTab.get(selectedTabId).then((jsonValue) => {
        setJsonValue(jsonValue.data);
      });
    }
  }, [selectedTabId]);

  const onChangeJson = (value, id) => {
    setJsonValue(value);
    JSONTab.putDebounce(id, { data: value });
  };

  const onClickAddTab = () => {
    JSONTab.add(JSONTab.getInitialData())
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log("error", err);
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
        console.log("error", err);
      });
  };

  const onClickDeleteTab = (id) => {
    JSONTab.delete(id)
      .then(() => {
        setTabs((oldTabs) => {
          const copyTabs = { ...oldTabs };
          delete copyTabs[id];
          return copyTabs;
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onChangeTab = (id) => {
    setSelectedTabId(id);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const tabList = Object.values(tabs);

  return (
    <section className="app json-app">
      <div className="json-tabs">
        <div className="tab-header">
          <h4 className="title">Tabs</h4>
          <Tippy content="Add a new tab">
            <Plus className="add-tab" onClick={onClickAddTab} />
          </Tippy>
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
            if (searchText && !title.toLowerCase().includes(searchText.toLowerCase())) {
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
                      onClick={() => onClickDeleteTab(id)}
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