import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "../components/Header";
import Footer from "./Footer";
import CalculateCalories from "./CalculateCalories";
import Home from "./Home";
import SignInPage from "./SignInPage";
import SearchFood from "./SearchFood";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/search_food" component={SearchFood} />
            <Route path="/calculate" component={CalculateCalories} />
            <Route path="/sign_in" component={SignInPage} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
