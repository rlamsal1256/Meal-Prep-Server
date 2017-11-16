import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <nav className="navbar">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        );
      case false:
        return (
          <nav className="navbar">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/sign_in">Sign In &nbsp;&nbsp;</Link>
              </li>
            </ul>
          </nav>
        );
      default:
        return (
          <nav className="navbar">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search_food">Search Food</Link>
              </li>
              <li>
                <Link to="/calculate">Calculate Daily Calories</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </nav>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <div className="jumbotron text-center">
          <Link
            to={this.props.auth ? "/search_food" : "/"}
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <h1>MealPrep</h1>
          </Link>
          <p>We make preparing meals fun</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
