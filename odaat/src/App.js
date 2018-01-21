import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'moment';
import Date from './Date.js';
import Time from './Time.js';
import Weather from './Weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">O.D.A.A.T.</h1>
        </header>
        <Date time={Moment()} /> {/* TODO: dynamically respond to arrows */}
        <Time />
        <Weather city="Portland" state="OR" /> {/* TODO: pass in current location from IP/browser? */}
        {/* PhysEx */}
        {/* News/Social */}
        {/* TechXercise */}
        {/* Notes/Diary */}
      </div>
    );
  }

}

export default App;
