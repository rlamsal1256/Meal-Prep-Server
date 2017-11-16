import { combineReducers } from "redux";
import searchResults from "./searchResults";
import selectedFood from "./selectedFood";
import calculatedCalories from "./calculatedCalories";

export default combineReducers({
  //auth: authReducer
  searchResults,
  selectedFood,
  calculatedCalories
});
