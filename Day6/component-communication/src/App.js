import React, { Component } from "react";
import Parent from "./components/parentToChild/Parent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "parent"
    };
  }
  changeTitle(newTitle) {
    console.log(this);
    this.setState({
      title: newTitle
    });
  }
  render() {
    // changeTitle is a method in parent and it is passed to the child as a doSomething method
    return (
      <div className="App">
        <Parent
          changeTitle={this.changeTitle.bind(this, "child")}
          keepTitle={this.changeTitle.bind(this, "parent")}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
