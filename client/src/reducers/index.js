import { combineReducers } from "redux";
import searchResults from "./searchResults";
import selectedFood from "./selectedFood";
import calculatedCalories from "./calculatedCalories";

const todoApp = combineReducers({
  searchResults,
  selectedFood,
  calculatedCalories
});

export default todoApp;
