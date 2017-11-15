import React from "react";
import Search from "../containers/Search";
import SelectedFoodList from "../containers/SelectedFoodList";
import Carbohydrates from "../components/Carbohydrates";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home_page">
    <Search />
    <div className="selectedFoodList">
      <SelectedFoodList className="selectedFoodList" />
    </div>
    <Carbohydrates />
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default Home;
