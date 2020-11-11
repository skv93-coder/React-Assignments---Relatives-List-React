import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.relative = ["ajay", "booby", "camy", "dank"];
  }
  render() {
    return (
      <div id="main">
        {this.relative.map((rel, idx) => (
          <p key={`relativeListItem1${idx}`}>{rel}</p>
        ))}
        fjdishjsfio
      </div>
    );
  }
}

export default App;
