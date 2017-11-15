const calculatedCalories = (state = "___", action) => {
  switch (action.type) {
    case "CALCULATE_CALORIES":
      console.log("5 ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default calculatedCalories;
