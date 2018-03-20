import React, { Component } from 'react';
import './App.css';
import {Nav} from './nav/Nav.js';
import {Router} from './router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="router-container">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
