import React, { Component } from 'react';
import '../css/Header.css';

class NavItem extends Component {
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
            <nav className="navbar navbar-expand-lg navbar-light text-uppercase fixed-top" id="mainNav">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a className="navbar-brand" href="#">Alex Weeks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown" >
                        <ul className="navbar-nav navbar-right">
                            <NavItem name="Home" />
                            <NavItem name="About" />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

class NavBar2 extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light bg-light" id="mainNav">
                <a class="navbar-brand" href="#">Alex Weeks</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    {/* <ul class="navbar-nav">
                    </ul> */}
                    <ul class="navbar-nav d-flex ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="//codeply.com">Codeply</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#myAlert" data-toggle="collapse">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
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
                <NavBar2 />
            </header>
            // <nav class="navbar navbar-default">
            //     <div class="container">
            //         <div class="navbar-header page-scroll">
            //             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            //                 {/* <span class="sr-only">Toggle navigation</span>  */}
            //                 <span class="navbar-toggler-icon"></span> 
            //             </button>
            //             <a class="navbar-brand page-scroll" href="#page-top"><img src="assets/images/logo.png" alt="website template image" /></a>
            //         </div>
            //         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            //             <ul class="nav navbar-nav navbar-right">
            //                 <li class="hidden"><a href="#page-top"></a></li>
            //                 <li><a class="page-scroll" href="#about">About</a></li>
            //                 <li><a class="page-scroll" href="#portfolio">Portfolio</a></li>
            //                 <li><a class="page-scroll" href="#team">Team</a></li>
            //                 <li><a class="page-scroll" href="#contact">Contact</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}

export default Header;