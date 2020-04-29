import React from 'react';

import hakuba_wide from '../img/hakuba_wide.jpg';

import '../css/Image.css';

var style = {
    // background: "url(" + hakuba_wide + ") no-repeat center center fixed" 
}

class Image extends React.Component {
    render() {
        return (
            <div className="fill-screen">
                <img className="back_img" src={hakuba_wide} height="100%" alt="Hakuba, Japan">
                </img>
            </div>
            // <div className="background-image"></div>
        )
    }
}

export default Image;