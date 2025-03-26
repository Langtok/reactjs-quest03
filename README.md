# Welcome to Reactjs Quest03
***

## Task
Understanding Props and State in React

React has a unique approach to data flow and manipulation compared to other frameworks. This quest focuses on two core concepts:

Props (Properties): Used for passing data from a parent component to a child component in a unidirectional (one-way) manner.

State: A built-in object within components that stores property values that belong to the component. Changes in the state trigger a component re-render.

This exercise aims to solidify the understanding of both concepts by implementing them in a React application.

## Description
Create a new ReactJS project.

Replace src/App.js with:

import ParentComponent from './ParentComponent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;

Create a ParentComponent.js:

import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

export class ParentComponent extends Component {  
    render() {
      return (
        <h1>
          <span className="title">I'm the parent component.</span>
          <ChildComponent text={"Child 1"} />
          <ChildComponent text={"Child 2"} />
          <ChildComponent text={"Child 3"} />
        </h1>
      );
    }
}

export default ParentComponent;

Create a ChildComponent.js:

const ChildComponent = (props) => {  
  return <p className="children">{props.text}</p>;
};

export default ChildComponent;

This demonstrates how props allow data to be passed from a parent to a child component in React.

Exercise 2: Managing State

Replace src/App.js with:

import Counter from './Counter.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

Create a Counter.js component:

import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return <button id="button" onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default Counter;

Each time the user clicks the button, the counter increments by 1. This exercise highlights how state is used to manage dynamic data in React.

## Installation
To install and run this project:

$> npx create-react-app my-app
$> cd my-app
$> npm install

Modify the default port in package.json:

"start": "PORT=8080 react-scripts start"

Then start the application:

$> npm start

## Usage
TODO - How does it work?
```
./my_project argument1 argument2
```

### The Core Team
Matthew Prince Emmanuel

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
