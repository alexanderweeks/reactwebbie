import React, { Component } from 'react';
import logo from './logo.svg';

import './css/Logo.css';
import './css/Resume.css';

import Nav from './js/Nav.js';
import Container from './js/Container.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
      </div>
    );
  }
}

export default App;
