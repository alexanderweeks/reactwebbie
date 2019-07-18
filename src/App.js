import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Content.css';

class NavItem extends Component  {
  render() {
    return (
      <li className="nav-item active">
        <a className="nav-link" href="#">{this.props.name}<span className="sr-only">(current)</span></a>
      </li>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <a className="navbar-brand" href="#">Testing</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem name="Home" />
            <NavItem name="Title" />
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
        <Content />
      </div>
    );
  }
}

export default App;
