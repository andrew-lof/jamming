import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Playlist from '../../components/Playlist/Playlist';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:[{name:''}, {artist:''},{album:''}],
      playlistName:'Jamming List',
      playlistTracks:[{name:'Test'}, {artist:'Testers'},{album:'The Test'}]
    };
    //this.searchResults = this.searchResults.bind(this);

  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
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