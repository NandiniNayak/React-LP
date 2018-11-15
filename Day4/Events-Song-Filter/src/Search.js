import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      songs: ["Shape Of you", "You belong with me", "Despacito"]
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  filterSong = e => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    const songs = this.state.songs.filter(song =>
      song.includes(this.state.search)
    );
    console.log(songs);
    return (
      <div className="App">
        <h1>Songify</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.filterSong} />
        </form>
        {songs.map(song => <p>{song}</p>)}
      </div>
    );
  }
}
export default Search;
