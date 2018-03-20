import React, { Component } from 'react';
import './App.css';
import {Map} from './map/Map.js';
import {Nav} from './nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="router-container">
          <Map name="Demo" />
        </div>
      </div>
    );
  }
}

export default App;
