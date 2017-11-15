import React from "react";
import { Switch, Route } from "react-router-dom";
import CalculateCalories from "./CalculateCalories";
import Home from "./Home";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculate" component={CalculateCalories} />
    </Switch>
  </main>
);

export default Main;
