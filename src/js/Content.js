import React, { Component } from 'react';


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

class Intro extends Component {
    render() {
        return (
            <header id="intro" className="jumbotron bg-success text-white text-uppercase">
                <h1 className="display-2">Alex Weeks</h1>
                <hr className="my-4"/>
                <p>Welcome to my personal website!</p>
                {/* <div className="row">
                    <div className="col-lg-12 text-center">
                        <div class="section-title">
                        </div>
                    </div>
                </div> */}
            </header>

        )
    }
}

class Content extends Component {
    render() {
        return (
            <Intro />
        )
    }
}

export default Content;