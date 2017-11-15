import React, { Component } from "react";
import UnitsConversion from "../utilities/UnitsConversion";
import { connect } from "react-redux";
import { calculateCalories } from "../actions/calculateCalories";

class CalculateCalories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUnit: "imperial",
      selectedGender: "female",
      weight: "",
      height: "",
      heightInch: "",
      age: "",
      activityLevel: "sedentary"
      //   calculatedCalories: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  clear() {
    this.setState({
      selectedUnit: "imperial",
      selectedGender: "female",
      weight: "",
      height: "",
      heightInch: "",
      age: "",
      activityLevel: "sedentary"
      //   calculatedCalories: 0
    });
    let result = "___";
    // console.log("7", result);
    this.props.onCalculateDailyRecommendedCalories(result);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  getValueForActivityLevel(level) {
    switch (level) {
      case "sedentary":
        return 1.2;

      case "light":
        return 1.375;

      case "moderate":
        return 1.55;

      case "very":
        return 1.725;

      default:
        return 1.2;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    var unitsConversion = new UnitsConversion();

    let units = this.state.selectedUnit;
    let w =
      units === "imperial"
        ? unitsConversion.convertLbsToKg(this.state.weight)
        : this.state.weight; //in kg
    let h =
      units === "imperial"
        ? unitsConversion.convertFtPlusInchToCm(
            this.state.height,
            this.state.heightInch
          )
        : this.state.height; // in cm
    let a = this.state.age; //in yrs
    let activityLevelValue = this.getValueForActivityLevel(
      this.state.activityLevel
    );
    let maleResult = (10 * w + 6.25 * h - 5 * a + 5) * activityLevelValue;
    let femaleResult = (10 * w + 6.25 * h - 5 * a - 161) * activityLevelValue;

    let result =
      this.state.selectedGender === "female" ? femaleResult : maleResult;

    if (w !== "" && h !== "" && a !== "") {
      //   this.setState({
      //     calculatedCalories: result
      //   });
      // console.log("1", result);
      this.props.onCalculateDailyRecommendedCalories(result);
    }
  }

  render() {
    const WeightUnits = () => {
      return this.state.selectedUnit === "imperial" ? (
        <label className="form-unit">&nbsp;&nbsp;lb</label>
      ) : (
        <label className="form-unit">&nbsp;&nbsp;kg</label>
      );
    };

    const HeightUnits = () => {
      return this.state.selectedUnit === "imperial" ? (
        <span>
          <label className="form-unit">&nbsp;&nbsp;ft</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="form-control"
            type="text"
            name="heightInch"
            value={this.state.heightInch}
            onChange={this.handleChange}
          />
          <label className="form-unit">&nbsp;&nbsp;inch</label>
        </span>
      ) : (
        <label className="form-unit">&nbsp;&nbsp;cm</label>
      );
    };
    return (
      <div className="calculateCalories">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <h2>Calculate Daily Calories</h2>
          <div className="daily-calories-form">
            <div className="form-check">
              <label className="form-title">Units:</label>
              <label className="radio-inline">
                <input
                  className="form-check-input"
                  name="selectedUnit"
                  value="imperial"
                  type="radio"
                  checked={this.state.selectedUnit === "imperial"}
                  onChange={this.handleChange}
                />
                <label className="form-unit">Imperial (US)</label>
              </label>
              <label className="radio-inline">
                <input
                  className="form-check-input"
                  name="selectedUnit"
                  value="metric"
                  type="radio"
                  checked={this.state.selectedUnit === "metric"}
                  onChange={this.handleChange}
                />
                <label className="form-unit">Metric</label>
              </label>
            </div>
            <div className="form-check">
              <label className="form-title">Gender: </label>
              <label className="radio-inline">
                <input
                  name="selectedGender"
                  value="female"
                  type="radio"
                  checked={this.state.selectedGender === "female"}
                  onChange={this.handleChange}
                />{" "}
                <label className="form-unit">Female</label>
              </label>
              <label className="radio-inline">
                <input
                  name="selectedGender"
                  value="male"
                  type="radio"
                  checked={this.state.selectedGender === "male"}
                  onChange={this.handleChange}
                />{" "}
                <label className="form-unit">Male</label>
              </label>
            </div>
            <div className="form-group">
              <label className="form-title">Weight:</label>
              <input
                className="form-control"
                name="weight"
                type="text"
                value={this.state.weight}
                onChange={this.handleChange}
              />
              <WeightUnits />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label className="form-title">Height:</label>
              <input
                className="form-control"
                name="height"
                type="text"
                value={this.state.height}
                onChange={this.handleChange}
              />
              <HeightUnits />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label className="form-title">Age:</label>
              <input
                className="form-control"
                name="age"
                type="text"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label className="form-title">Activity:</label>
              <select
                className="form-control"
                name="activityLevel"
                value={this.state.activityLevel}
                onChange={this.handleChange}
              >
                <option value="sedentary">Sedentary</option>
                <option value="light">Light Activity</option>
                <option value="moderate">Moderate Activity</option>
                <option value="very">Very Active</option>
              </select>
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-default">
              Caculate
            </button>
            {"\xa0\xa0\xa0"}
            <button className="btn btn-default" onClick={this.clear}>
              Clear
            </button>
          </div>
        </form>
        <br />
        <br />
        <div className="calculated-calories-result">
          <h2>Recommended calories:</h2>
          <h2>{this.props.calculatedCalories}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("6", state.calculatedCalories);
  return {
    calculatedCalories: state.calculatedCalories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCalculateDailyRecommendedCalories: result => {
      // console.log("2", result);
      dispatch(calculateCalories(result));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculateCalories);
