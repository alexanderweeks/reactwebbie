import React, { Component } from 'react';
import logo from './logo.svg';

// import './css/Logo.css';
// import './css/Resume.css';

// import Nav from './js/Nav.js';
// import Container from './js/Container.js';

import './css/App.css';

import Header from './js/Header.js';
import Main from './js/Main.js';
import BackgroundImage from './js/BackgroundImage.js';

class App extends Component {
  render() {
    return (
      <>
        <BackgroundImage />
        <div id="content">
          <Header />
          <Main />
        </div>
      </>
    );
  }
}

export default App;
