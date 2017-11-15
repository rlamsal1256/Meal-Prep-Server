export const calculateCalories = result => {
  console.log("3 ", result);
  return {
    type: "CALCULATE_CALORIES",
    payload: result
  };
};
