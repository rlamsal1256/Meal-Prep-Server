import React, { Component } from "react";
import Select from "react-select";
import keys from "../config/keys";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import { foodSelected } from "../actions/foodSelected";

const getOptions = query => {
  return fetch("https://api.nutritionix.com/v1_1/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: keys.APP_ID,
      appKey: keys.APP_KEY,
      query: query,
      fields: [
        "item_name",
        "brand_name",
        "nf_calories",
        "nf_total_fat",
        "nf_total_carbohydrate",
        "nf_protein",
        "nf_sugars"
      ],
      filters: {
        not: {
          item_type: "1"
        }
      }
    })
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      // console.log(json.hits);
      const obj = json.hits.map(item => {
        return {
          value: item.fields,
          label: `${item.fields.brand_name}  
              \xa0\xa0 ${item.fields.item_name}
              \xa0\xa0 [ ${item.fields.nf_calories} calories ]`
        };
      });
      // console.log(obj);
      return {
        options: obj
      };
    });
};

class TempSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  // addFood(value, event) {
  //   console.log("1", value);
  //   console.log("1", event);
  //   this.props.onFoodSelected(value);
  // }

  onChange(value) {
    // console.log("1", value);
    this.props.onFoodSelected(value);
  }

  render() {
    return (
      <div className="search-box">
        <Select.Async
          name="form-field-name"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          loadOptions={getOptions}
          onValueClick={this.addFood}
        />;
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFoodSelected: value => {
      // console.log("2", value);
      dispatch(foodSelected(value));
    }
  };
};

export default connect(null, mapDispatchToProps)(TempSearch);
