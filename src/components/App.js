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
        <ol key="relativeList.">
          {this.relative.map((rel, idx) => (
            <li key={`relativeListItem${1 + idx}`}>{rel}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
