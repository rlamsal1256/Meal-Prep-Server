import React from "react";
import { connect } from "react-redux";
import Food from "../components/Food";

const SelectedFoodList = ({ selectedFoodItems }) => (
  <ul>
    {selectedFoodItems.map((food, index) => (
      <Food key={index} index={index} item={food.item} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  // console.log("5 ");
  return {
    selectedFoodItems: state.selectedFood
  };
};

export default connect(mapStateToProps)(SelectedFoodList);
