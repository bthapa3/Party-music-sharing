import React, { component } from "react";

import { render } from "react-dom";
import { Component } from "react";

import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
