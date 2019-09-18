import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Content.css';
import './css/Resume.css';
// import Header from './js/Header.js';
import Nav from './js/Nav.js';
import Container from './js/Container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container />
      </div>
    );
  }
}

export default App;
