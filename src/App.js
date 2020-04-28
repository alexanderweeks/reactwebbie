import React, { Component } from 'react';
import logo from './logo.svg';

import './css/Logo.css';
import './css/Resume.css';

import Nav from './js/Nav.js';
import Container from './js/Container.js';

import Header from './js/Header.js';
import Main from './js/Main.js';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
