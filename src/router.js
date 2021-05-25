import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/portfolio" component={Portfolio} />

        <Route>
          <NoMatch />
        </Route>
      </Switch>

      <Card />
    </Router>
  );
}

export default AppRouter;
