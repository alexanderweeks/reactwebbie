import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GithubSVG extends React.Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width ? this.props.width : "60"} height={this.props.height ? this.props.height : "60"} viewBox="0 0 24 24" >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                    fill={this.props.fill}/>
                {/* <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm" 
                    fill="red" /> */}
            </svg>
        )
    }
}
class FacebookSVG extends React.Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width ? this.props.width : "60"} height={this.props.height ? this.props.height : "60"} viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"
                    fill={this.props.fill}/>
            </svg>
        )
    }
}
class TwitterSVG extends React.Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width ? this.props.width : "60"} height={this.props.height ? this.props.height : "60"} viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                    fill={this.props.fill}/>
            </svg>
        )
    }
}

export class GithubIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fill: "black",
            classes: ["icons"]
        }
    }

    changeState = () => {
        //this.state.fill === "black" ? "red" : "black";
        var _fill = "black"; 
        var _classes = this.state.classes;
        this.state.classes.includes("mouse_enter") ? _classes.pop() : _classes.push("mouse_enter");
        this.setState({
            fill: _fill,
            classes: _classes
        })
    }

    render() {
        return (
            <a className={this.state.classes.join(' ')} onClick={() => window.open("https://github.com/alexanderweeks", "_blank")} onMouseEnter={this.changeState} onMouseLeave={this.changeState}>
                <GithubSVG width={this.state.width} height={this.state.height} fill={this.state.fill} />
                {/* <FontAwesomeIcon icon="github"/> */}
            </a>
        )
    }
}
export class FacebookIcon extends React.Component {
    render() {
        return (
            <a className="icons" onClick={() => window.open("#", "_blank")}>
                <FacebookSVG width={this.props.width} height={this.props.height} />
              </a>
        )
    }
}
export class TwitterIcon extends React.Component {
    render() {
        return (
            <a className="icons" onClick={() => window.open("#", "_blank")}>
                <TwitterSVG width={this.props.width} height={this.props.height} />
              </a>
        )
    }
}

// export default GithubIcon;
// export default FacebookIcon;
// export default TwitterIcon;
