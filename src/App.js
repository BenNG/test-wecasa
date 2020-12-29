import { Switch, Route, Redirect } from "react-router-dom";

import React from "react";
import Prestation from "./pages/prestation";
import Address from "./pages/address";
import Appointment from "./pages/appointment";
import Confirmation from "./pages/confirmation";
import Error404 from "./pages/404";

function App() {
  return (
    <div className="h-full">
      <Switch>
        <Route path="/prestation">
          <Prestation />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <Redirect to="/prestation" />
    </div>
  );
}

export default App;
