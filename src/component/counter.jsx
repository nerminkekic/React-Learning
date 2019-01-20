import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    product: ["eggs", "chocolate", "cheese", "juice"]
  };

  render() {
    return (
      <div>
        <span className={this.getButtonClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncriment(this.state.product[2])}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  handleIncriment = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  getButtonClasses() {
    let className = "btn m-2 btn-";
    const { count } = this.state;
    className += count === 0 ? "warning" : "primary";
    return className;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
