export const foodSelected = item => {
  // console.log("3 ", item);
  return {
    type: "FOOD_SELECTED",
    item
  };
};
