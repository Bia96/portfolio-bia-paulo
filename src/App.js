import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BRLCS } from "./pages/ibm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projeto-1">
          <BRLCS />
        </Route>
        <Route path="/projeto-2">
          <BRLCS />
        </Route>
        <Route path="/projeto-3">
          <BRLCS />
        </Route>
        <Route path="/projeto-4">
          <BRLCS />
        </Route>
        <Route path="/projeto-5">
          <BRLCS />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
