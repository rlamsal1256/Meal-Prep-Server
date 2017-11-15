import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculate">Calculate Daily Calories</Link>
            </li>
          </ul>
        </nav>
        <div className="jumbotron text-center">
          <h1>MealPrep</h1>
          <p>We make preparing meals fun</p>
        </div>
      </div>
    );
  }
}

export default Header;
