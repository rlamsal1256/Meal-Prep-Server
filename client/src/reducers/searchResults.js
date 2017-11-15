const searchResults = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FOOD":
      console.log("5 ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default searchResults;
