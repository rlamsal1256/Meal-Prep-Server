import keys from "../config/keys";

export const foodSelected = text => {
  // console.log("3 ", text);
  return {
    type: "FOOD_SELECTED",
    text
  };
};

export const foodItemSelected = item => {
  // console.log("3 ", text);
  return {
    type: "FOOD_ITEM_SELECTED",
    item
  };
};

export const fetchResultsSuccess = results => {
  // console.log("4", "chicken");
  return {
    type: "FETCH_FOOD",
    payload: results
  };
};

export const fetchFood = query => {
  // console.log("3", query);
  return dispatch => {
    fetch("https://api.nutritionix.com/v1_1/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        appId: keys.APP_ID,
        appKey: keys.APP_KEY,
        query: query,
        fields: ["item_name", "brand_name", "nf_calories", "item_type"],
        filters: {
          not: {
            item_type: "1"
          }
        }
      })
    })
      .then(response => {
        // console.log(response.text());
        return response.json();
      })
      .then(results => dispatch(fetchResultsSuccess(results)));
  };
};
