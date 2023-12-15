import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    // Initialize the state initial value
    this.state = {
      count: this.props.initialValue || 0,
    };

    // Binding of event handlers to the instance
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, `Counter Value: ${this.state.count}`),
      React.createElement('button', { onClick: this.increment }, 'Increment'),
      React.createElement('button', { onClick: this.decrement }, 'Decrement')

    );
  }
}

export default Counter;
