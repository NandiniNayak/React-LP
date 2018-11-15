import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Api extends Component {
  constructor(props) {
    console.log("first initialize method to be executed");
    super(props);
    // get a random message to start withs
    this.state = {
      data: ["Chuck Norris can see his shadow and catch it- at night."]
    };
  }
  randomText() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result.value);
        this.setState({
          data: result.value
        });
      });
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentWillMount() {
    console.log("runs before render");
    this.randomText();
    // note although componentWillMount runs before render, if you are expecting to receive a data from the api which is handled in promise at this stage we can't really be sure if the result has been retrieved from api call, hence the the data logged here is the default value in the constructor"
    console.log(this.state.data);
  }
  componentDidMount() {
    console.log("runs after render and every time state updates");
    setInterval(() => this.randomText(), 4000);
  }
  // class method
  render() {
    console.log("runs after componentWillMount");
    return <ul>{this.state.data}</ul>;
  }
}
export default Api;
