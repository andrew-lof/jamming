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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track){
    for (let i = 0; i < this.state.playlistTracks.length; i++) {
      let currTrack = this.state.playlistTracks[i];
      if(currTrack.id !== track.id){
      //add song
        this.state.playlistTracks.push(track);
        this.setState({playlistTracks: this.state.playlistTracks});
        return;
      }
    }
  }
  removeTrack(track){
    for (let i = 0; i < this.state.playlistTracks.length; i++) {
      let currTrack = this.state.playlistTracks[i];
      if(currTrack.id === track.id){
      //remove song
        this.state.playlistTracks.splice(i,1);
        this.setState({playlistTracks: this.state.playlistTracks});
        return;
      }
    }
  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;