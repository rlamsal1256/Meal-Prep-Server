import { combineReducers } from "redux";
import searchResults from "./searchResults";
import selectedFood from "./selectedFood";
import calculatedCalories from "./calculatedCalories";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  searchResults,
  selectedFood,
  calculatedCalories
});
