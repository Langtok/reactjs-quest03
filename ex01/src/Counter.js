import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0 // State property to track the counter value
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1 // Increment the counter by 1
    }));
  };

  render() {
    return (
      <button id="button" onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
