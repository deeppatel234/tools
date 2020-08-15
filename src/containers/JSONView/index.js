import React, { useContext, useEffect, useState } from "react";
import Tippy from "@tippyjs/react";

import Editor from "../../components/Editor";
import JSONTab from "../../storage/JSONTab";

import AppContext from "../../AppContext";
import Plus from "../../components/Icons/Plus";
import Cross from "../../components/Icons/Cross";
import { keyBy } from "../../utils";

import "./index.scss";

const JSONView = () => {
  const { appData, onChangeAppData } = useContext(AppContext);
  const [ tabs, setTabs ] = useState({});
  const [ selectedTabId, setSelectedTabId ] = useState(null);

  const jsonData = appData.json || {};

  const { text } = jsonData;

  const fetchData = () => {
    JSONTab.getAllTabs().then(data => {
      if (Array.isArray(data) && data.length) {
        setTabs(keyBy(data, "id"));
        setSelectedTabId(data[0].id);
      } else {
        onClickAddTab();
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (!tabs[selectedTabId]) {
      setSelectedTabId(Object.keys(tabs)[0]);
    }
  }, [tabs, selectedTabId])

  const onChangeJson = (value) => {
    onChangeAppData("json", {
      ...jsonData,
      text: value,
    });
  };

  const onClickAddTab = () => {
    JSONTab.add(JSONTab.getInitialData()).then(() => {
      fetchData();
    }).catch((err) => {
      console.log('error', err);
    });
  };

  const onChangeTitle = (newHeader) => {
    JSONTab.changeTitle(selectedTabId, newHeader).then(() => {
      setTabs({ ...tabs, [selectedTabId]: {
        ...tabs[selectedTabId],
        title: newHeader
      }});
    }).catch((err) => {
      console.log('error', err);
    });
  };

  const onClickDeleteTab = (id) => {
    JSONTab.delete(id).then(() => {
      setTabs(oldTabs => {
        const copyTabs = { ...oldTabs };
        delete copyTabs[id];
        return copyTabs;
      });
    }).catch((err) => {
      console.log('error', err);
    });
  };

  const tabList = Object.values(tabs);

  return (
    <section className="app json-app">
      <div className="json-tabs">
        <div className="tab-header">
          <h4 className="title">Tabs</h4>
          <Tippy content="Add a new tab">
            <Plus className="add-tab" onClick={onClickAddTab}/>
          </Tippy>
        </div>
        <div className="tab-list">
          {
            tabList.map(({ id, title }) => (
              <div key={id} className="tab">
                <span className="tab-name">{title}</span>
                {
                  tabList.length > 1 ? (
                    <Tippy content="Delete tab">
                      <Cross
                        className="delete-tab"
                        onClick={() => onClickDeleteTab(id)}
                      />
                    </Tippy>
                  ) : null
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="json-editor">
        {
          (selectedTabId && tabs[selectedTabId]) ? (
            <Editor
              key={tabs[selectedTabId].id}
              title={tabs[selectedTabId].title}
              value={text}
              jsonEditor
              jsonModeEnabled
              enableJSONLint
              headerEditable
              onValueChange={onChangeJson}
              onChangeHeader={onChangeTitle}
            />
          ) : null
        }
      </div>
    </section>
  );
};

export default JSONView;
