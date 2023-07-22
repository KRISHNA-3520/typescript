import React, { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default CounterClass;
