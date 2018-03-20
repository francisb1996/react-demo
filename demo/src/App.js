import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map} from './map/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Interactive Map Demo</h1>
        </header>
        <div className="map-container">
          <Map name="Demo" />
        </div> 
      </div>
    );
  }
}

export default App;
