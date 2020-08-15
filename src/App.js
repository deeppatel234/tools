import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import { initStorage } from "./storage";
import AppContext from "./AppContext";

import URI from "./containers/URI";
import JSONView from "./containers/JSONView";
import SideBar from "./containers/SideBar";

function App() {
  const [appData, setAppData] = useState({});
  const [dbLoading, setDbLoading] = useState(true);

  useEffect(() => {
    initStorage().then(() => {
      setDbLoading(false);
    });
  }, [])

  const onChangeAppData = (id, data) => {
    setAppData({
      ...appData,
      [id]: data,
    });
  };

  if (dbLoading) {
    return null;
  }

  return (
    <Router>
      <AppContext.Provider value={{ appData, onChangeAppData }}>
        <ToastProvider placement="bottom-right" autoDismiss autoDismissTimeout={4000}>
          <SideBar />
          <Switch>
            <Route path="/uri">
              <URI />
            </Route>
            <Route path="/json">
              <JSONView />
            </Route>
            <Redirect to="/uri" />
          </Switch>
        </ToastProvider>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
