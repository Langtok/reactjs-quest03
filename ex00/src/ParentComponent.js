import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

export class ParentComponent extends Component {  
  render() {
    return (
      <h1>
        <span className="title">I'm the parent component.</span>
        <ChildComponent text={"I'm the first child!"} />
        <ChildComponent text={"I'm the second child!"} />
        <ChildComponent text={"I'm the third child!"} />
      </h1>
    );
  }
}

export default ParentComponent;
