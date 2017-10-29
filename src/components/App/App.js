import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Playlist from '../../components/Playlist/Playlist';
import Spotify from '../../util/Spotify';


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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
  updatePlaylistName(name){
        this.setState({playlistName: name});
  }
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }
  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;