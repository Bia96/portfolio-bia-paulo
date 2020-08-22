import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ibm } from "./pages/ibm";
import { BRLCS } from "./pages/ProjBRLCS";
import { Eixo } from "./pages/Eixo";
import { mob } from "./pages/mob";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projeto-1">
          <mob />
        </Route>
        <Route path="/projeto-2">
          <Eixo />
        </Route>
        <Route path="/projeto-3">
          <BRLCS />
        </Route>
        <Route path="/projeto-4">
          <ibm />
        </Route>
        <Route path="/projeto-5">
          <BRLCS />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
