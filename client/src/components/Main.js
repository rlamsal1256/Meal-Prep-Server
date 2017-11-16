import React from "react";
import { Switch, Route } from "react-router-dom";
import CalculateCalories from "./CalculateCalories";
import Home from "./Home";
import SignInPage from "./SignInPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculate" component={CalculateCalories} />
      <Route path="/sign_in" component={SignInPage} />
    </Switch>
  </main>
);

export default Main;
