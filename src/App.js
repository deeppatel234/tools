import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppContext from "./AppContext";

import URI from "./containers/uri";
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
        <SideBar />
        <Switch>
          <Route path="/uri">
            <URI />
          </Route>
          <Redirect to="/uri" />
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
