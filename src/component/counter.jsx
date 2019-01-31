import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  render() {
    return (
      <div>
        <h3> Counter #{this.props.counter.id}</h3>
        <span className={this.getButtonClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getButtonClasses() {
    let className = "btn m-2 btn-";
    const { value } = this.props.counter;
    className += value === 0 ? "warning" : "primary";
    return className;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
