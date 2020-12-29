import { Switch, Route, Redirect } from "react-router-dom";

import React from "react";
import Prestation from "./pages/prestation";
import Address from "./pages/address";
import Appointment from "./pages/appointment";
import Confirmation from "./pages/confirmation";

function App() {
  return (
    <div>
      <header className="bg-orange py-3 text-white">
        <div className="container mx-auto font-semibold uppercase">
          Welcome to test-wecasa
        </div>
      </header>
      <div className="h-3"></div>
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
      </Switch>
      <Redirect to="/prestation" />
    </div>
  );
}

export default App;
