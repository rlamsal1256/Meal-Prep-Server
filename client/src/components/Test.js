import React from "react";
import CircularProgressbar from "react-circular-progressbar";

const Example = ({ description, children }) => (
  <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="row mb-1">
      <div className="col-xs-6 offset-xs-3">{children}</div>
    </div>
    <p className="text-xs-center">{description}</p>
  </div>
);

class Test extends React.Component {
  render() {
    return (
      <div className="container">
        <Example description="Add a background color for that inverted look.">
          <CircularProgressbar
            className="CircularProgressbar-inverted"
            background
            backgroundPadding={5}
            strokeWidth={6}
            percentage={66}
          />
        </Example>
      </div>
    );
  }
}

export default Test;

// class ChangingProgressbar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentPercentageIndex: 0
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         currentPercentageIndex:
//           (this.state.currentPercentageIndex + 1) %
//           this.props.percentages.length
//       });
//     }, this.props.interval);
//   }

//   render() {
//     return (
//       <CircularProgressbar
//         {...this.props}
//         percentage={this.props.percentages[this.state.currentPercentageIndex]}
//       />
//     );
//   }
// }
// ChangingProgressbar.defaultProps = {
//   interval: 1000
// };
