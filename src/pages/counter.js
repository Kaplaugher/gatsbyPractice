import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }
  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }
  handleSubtract() {
    this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
      </div>
    );
  }
}

export default Counter;
