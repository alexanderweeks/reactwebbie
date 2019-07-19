import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Content.css';
import Header from './js/Header.js';
import Content from './js/Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
