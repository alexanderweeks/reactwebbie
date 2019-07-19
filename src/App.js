import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Content.css';

class NavItem extends Component  {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">{this.props.name}</a>
      </li>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Alex Weeks</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav">
            <NavItem name="Home" />
            <NavItem name="About" />
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
          <NavBar />
      </header>
    );
  }
}

class SlidingBox extends Component {
  render() {
    return (
      <div className="section" id={this.props.topic}>
        <div className="section-description">
          <p>Hello World</p>
        </div>
        {/* <div className="vl" ></div> */}
        <div className="section-picture">
          Testing RHS
        </div>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <SlidingBox topic="projects"/>
        <SlidingBox topic="volunteering" />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Content /> */}
      </div>
    );
  }
}

export default App;
