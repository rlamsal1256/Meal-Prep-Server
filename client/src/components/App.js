import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import { Route, BrowserRouter } from "react-router-dom";
import CalculateCalories from "./CalculateCalories";
import Home from "./Home";
import SignInPage from "./SignInPage";

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/calculate" component={CalculateCalories} />
        <Route path="/sign_in" component={SignInPage} />
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
