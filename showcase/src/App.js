import React, { Component } from 'react';
import Navbar from './navbar';
import Main from './main/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
