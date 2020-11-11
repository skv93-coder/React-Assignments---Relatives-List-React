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
        {this.relative.map((rel) => (
          <p key={rel}>{rel}</p>
        ))}
        fjdishjsfio
      </div>
    );
  }
}

export default App;
