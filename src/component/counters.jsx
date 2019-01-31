import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counteres - rendered");
    const {
      onReset,
      onIncrement,
      onDelete,
      counters,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
