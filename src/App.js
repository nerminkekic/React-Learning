import React, { Component } from "react";
import NavBar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    name: "Nermin"
  };
  //Constructor
  constructor() {
    super();
    console.log("App - constructor");
  }
  componentDidMount() {
    console.log("App - mounted");
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    //check if value is less then zero
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters: counters });
    }
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  render() {
    console.log("App - rendered");
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="Container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
