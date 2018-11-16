import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Allen"
    };
    // all callback method must use bind to pass the this variable value
    this.changeName = this.changeName.bind(this);
    // this.changeNamefromInput = this.changeNamefromInput.bind(this);
  }
  changeName(newName) {
    console.log(this);
    this.setState({
      name: newName
    });
  }
  changeNamefromInput = event => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.changeName("Mariam");
          }}
        >
          Change Name by anonymous fun
        </button>
        <button onClick={this.changeName.bind(this, "Long")}>
          Change Name by bind func
        </button>
        <br />
        <br />
        <input value={this.state.name} onChange={this.changeNamefromInput} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
