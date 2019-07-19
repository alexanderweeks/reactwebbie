import React, { Component } from 'react';
import cabin from '../img/portfolio/cabin.png';

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
                <hr className="my-4" />
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

class PortfolioItem extends Component {
    render() {
        return(
            <div className="col-md-6">
                <div className="portfolio-item mx-auto">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src={cabin} alt="" />
                </div>
            </div>

        )
    }
}

class Portfolio extends Component {
    render() {
        return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div class="row">
                    <div class="col-12">
                        <h2 className="display-4 text-cetner text-uppercase text-secondary mb-0">
                            Portfolio
                        </h2>
                    </div>
                    <hr className="col-6" />
                    {/* <div class="col-3"></div>
                    <div class="col-6"><hr /></div>
                    <div class="col-3"></div> */}
                </div>
                <div className="row">
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </div>
        </section>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <Intro />
    
                <Portfolio />
            </div>

        )
    }
}

export default Content;