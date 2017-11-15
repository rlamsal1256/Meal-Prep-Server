import React from "react";
import CircularProgressbar from "react-circular-progressbar";
import { connect } from "react-redux";

class Carbohydrates extends React.Component {
  render() {
    var h3Style = {
      textAlign: "center"
    };
    const CarbAmount = () => {
      var countCarbs = 0;
      var countProteins = 0;
      var countFats = 0;
      this.props.selectedFoodItems.map(food => {
        countCarbs += food.item.value.nf_total_carbohydrate * 4;
        countProteins += food.item.value.nf_protein * 4;
        countFats += food.item.value.nf_total_fat * 9;
      });
      // var percent = count / this.props.calculatedCalories * 100;
      var carbPercent = Math.round(countCarbs / 1700 * 100);
      var proteinPercent = Math.round(countProteins / 1700 * 100);
      var fatPercent = Math.round(countFats / 1700 * 100);
      return (
        <div>
          <div className="row">
            <div className="progressbar">
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={6}
                percentage={carbPercent}
              />
            </div>
            <h3 style={h3Style}>Carbohydrates 45 - 65 %</h3>
          </div>
          <div className="row">
            <div className="progressbar">
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={6}
                percentage={proteinPercent}
              />
            </div>
            <h3 style={h3Style}>Proteins 10 - 35 %</h3>
          </div>
          <div className="row">
            <div className="progressbar">
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={6}
                percentage={fatPercent}
              />
            </div>
            <h3 style={h3Style}>Fats 20 - 35 %</h3>
          </div>
        </div>
      );
    };
    return (
      <div className="progress-bars">
        <CarbAmount />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("5 ");
  return {
    selectedFoodItems: state.selectedFood,
    calculatedCalories: state.calculatedCalories
  };
};

export default connect(mapStateToProps)(Carbohydrates);
