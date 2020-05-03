import React, {Component} from 'react';

import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="nav-item employment">
                    <a href="#">Employment</a>    
                </div>
                <div className="nav-item">
                    <a href="#">Education</a>    
                </div>
                <div className="nav-item">
                    <a href="#">Volunteering</a>    
                </div>
            </header>
        )
    }
}

export default Header;