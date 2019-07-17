import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <NavBar />
        </div>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
