import React, { PureComponent } from "react";
import "./App.css";

//React.createElement
//       &&
//Functional component
function Element1() {
  return React.createElement(
    "h1",
    null,
    "Hello World created with createElement method"
  );
}

//React Class component
//      &&
//React.Component
class Element2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World created with React.Component method</h1>
      </div>
    );
  }
}

//React.PureComponent
class Element3 extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World created with React.PureComponent method</h1>
        <span>(I only work right if my props and state are immutable) </span>
      </React.Fragment>
    );
  }
}

//Functional Component
function Element4() {
  return <h1>Hello World created with a functional component</h1>;
}

export { Element1, Element2, Element3, Element4 };
