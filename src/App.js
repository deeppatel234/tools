import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';

import AppContext from "./AppContext";

import URI from "./containers/URI";
import JSON from "./containers/JSON";
import SideBar from "./containers/SideBar";

function App() {
  const [appData, setAppData] = useState({});

  const onChangeAppData = (id, data) => {
    setAppData({
      ...appData,
      [id]: data,
    });
  };

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
              <JSON />
            </Route>
            <Redirect to="/uri" />
          </Switch>
        </ToastProvider>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
