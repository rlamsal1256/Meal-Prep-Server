const selectedFood = (state = [], action) => {
  switch (action.type) {
    case "FOOD_SELECTED":
      // console.log("4 ", action.item);
      return [
        ...state,
        {
          item: action.item
        }
      ];
    default:
      return state;
  }
};

export default selectedFood;
