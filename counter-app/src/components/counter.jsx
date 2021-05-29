import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    classes: "badge m-2 badge-",
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <span>
          <button>Increment</button>
        </span>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    return (
      this.state.classes + (this.state.count === 0 ? "warning" : "primary")
    );
  }
}

export default Counter;
