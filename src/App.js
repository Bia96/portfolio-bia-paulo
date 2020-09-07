import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BRLCS } from "./pages/ProjBRLCS";
import { Video } from "./pages/Video";
import { Mob } from "./pages/mob";
import { IBM } from "./pages/ibm";
import { Rex } from "./pages/Rex";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projeto-1">
          <Mob />
        </Route>
        <Route exact path="/projeto-2">
          <Video />
        </Route>
        <Route exact path="/projeto-3">
          <BRLCS />
        </Route>
        <Route exact path="/projeto-4">
          <IBM />
        </Route>
        <Route exact path="/projeto-5">
          <Rex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
