import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BRLCS } from "./pages/ProjBRLCS";
import { Eixo } from "./pages/Eixo";
import { Mob } from "./pages/mob";
import { IBM } from "./pages/ibm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/projeto-1">
          <Mob />
        </Route>
        <Route exact path="/projeto-2">
          <Eixo />
        </Route>
        <Route exact path="/projeto-3">
          <BRLCS />
        </Route>
        <Route exact path="/projeto-4">
          <IBM />
        </Route>
        <Route exact path="/projeto-5">
          <BRLCS />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
