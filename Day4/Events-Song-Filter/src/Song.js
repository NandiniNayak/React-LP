import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      songs: ["Shape of you", "Let me love you", "You belong with me"]
    };
    // show how the update filter fails to work without binding this, unless a arrow function is used
    // this.updateFilter = this.updateFilter.bind(this);
  }
  // note since a arrow function is used you dont have to bind the function that uses teh variable this
  updateFilter = event => {
    console.log(this);
    this.setState({
      // when a change in the search bar is detected updateFilter is called, which captures the value entered in the sercah field and sets the state object filter
      filter: event.target.value
    });
  };
  handleSubmit(event) {
    // prevent default has to be incuded in onClick function to avoid default selection
    event.preventDefault();
  }
  render() {
    // Filter songs
    const songs = this.state.songs.filter(song =>
      song.includes(this.state.filter)
    );
    return (
      <div className="App">
        <h1>Songify</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter} />
        </form>
        {songs.map(song => <p>{song}</p>)}
      </div>
    );
  }
}
export default Song;
