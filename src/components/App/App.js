import React, { Component } from 'react';
// import logo from './logo.svg';
import './components/App/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:[name, artist, album],
      playlistName:'Jamming List',
      playlistTracks:[{name:''}, {artist:''},{album:''}]
    };
    this.searchResults = this.searchResults.bind(this);

  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <!-- Add a SearchBar component -->
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;