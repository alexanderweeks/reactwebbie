import React, { Component } from 'react';
import ThumbnailImage from '../img/personal.JPG';

function getHref(value) {
    return "#" + value.toLowerCase();
}

class MenuItem extends Component {
    render() {
        return (
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href={getHref(this.props.value)}>{this.props.value}</a>
            </li>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <MenuItem value="About" />
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
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Alex Weeks</span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={ThumbnailImage} alt="" />
                </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Menu />
            </nav>
        )
    }
}

export default Nav;