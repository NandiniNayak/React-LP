import React, { Component } from "react";
import logo from "./logo.svg";
import Api from "./Api";
import Song from "./Song";
import Search from "./Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Api />
        <Song />
      </div>
    );
  }
}
export default App;
