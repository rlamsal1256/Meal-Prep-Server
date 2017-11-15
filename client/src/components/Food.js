import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFood } from "../actions/removeFood";

// const Food = ({ item }, index) => (
//   <div className="selected-food-row">
//     <li key={index}>
//       <div>
//         <b>{item.value.item_name}</b>
//       </div>
//       <div>Brand: {item.value.brand_name}</div>
//       <div>Calories: {item.value.nf_calories}</div>
//       <div>Protein: {item.value.nf_protein}g</div>
//       <div>Carb: {item.value.nf_total_carbohydrate}g</div>
//       <div>Fat: {item.value.nf_total_fat}g</div>
//       <div>Sugar: {item.value.nf_sugars}g</div>
//     </li>
//   </div>
// );

class Food extends React.Component {
  onRemoveFood() {
    console.log("1", this.props.index);
    this.props.onRemoveFood(this.props.index);
  }

  render() {
    return (
      <div className="selected-food-row">
        <li key={this.props.index}>
          <h3>{this.props.item.value.item_name}</h3>
          <p> {this.props.item.value.nf_calories} calories </p>
          <div className="delete-food">
            <button
              className="btn-danger"
              onClick={this.onRemoveFood.bind(this)}
            >
              X
            </button>
          </div>
        </li>
      </div>
    );
  }
}
//   = ({ item }, index) => (
//   <div className="selected-food-row">
//     <li key={index}>
//       <h3>{item.value.item_name}</h3>
//       <p> {item.value.nf_calories} calories </p>
//       <div className="delete-food">
//         <button className="btn-danger" onClick={this.onRemoveFood.bind(this)}>
//           X
//         </button>
//       </div>
//     </li>
//   </div>
// );

const mapDispatchToProps = dispatch => {
  return {
    onRemoveFood: index => {
      console.log("2", index);
      dispatch(removeFood(index));
    }
  };
};

Food.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(Food);
