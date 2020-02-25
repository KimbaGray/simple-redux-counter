import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "MORE_MONEY" });
  };

  decrement = () => {
    this.props.dispatch({ type: "LESS" });
  };

  render() {
    return (
      <div className="money">
        <div className="emoji">
          <button onClick={this.increment}>
            {" "}
            &#x1F4B0; &#x1F4B0; &#x1F4B0; &#x1F4B0;{" "}
          </button>{" "}
        </div>
        <div className="initialMoney">£{this.props.count}</div>
        <div className="emoji">
          <button onClick={this.decrement}> &#x1F4B8; &#x1F4B8; </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
