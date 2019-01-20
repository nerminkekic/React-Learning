import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3> Counter #{this.props.id}</h3>
        <span className={this.getButtonClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncriment()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  handleIncriment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  getButtonClasses() {
    let className = "btn m-2 btn-";
    const { value } = this.state;
    className += value === 0 ? "warning" : "primary";
    return className;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
