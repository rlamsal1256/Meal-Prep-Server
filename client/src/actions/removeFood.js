export const removeFood = id => {
  console.log("3 ", id);
  return {
    type: "DELETE_FOOD_SELECTED",
    id
  };
};
