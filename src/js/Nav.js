import React, { Component } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import ThumbnailImage from '../img/personal.JPG';

function getHref(value) {
    return "#" + value.toLowerCase();
}

class MenuItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" activeClass="active" to={this.props.id} spy={true} smooth={true} offset={0} duration={500} >
                    {this.props.value}
                </Link>
                {/* <a class="nav-link" href={getHref(this.props.value)}>{this.props.value}</a> */}
            </li>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <MenuItem value="About" id="about"/>
                    <MenuItem value="Experience" />
                    <MenuItem value="Education" />
                    <MenuItem value="Skills" />
                    <MenuItem value="Interests" />
                    <MenuItem value="Awards" />
                </ul>
            </div>

        )
    }
}

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Alex Weeks</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ThumbnailImage} alt="" />
                </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Menu />
            </nav>
        )
    }
}

export default Nav;