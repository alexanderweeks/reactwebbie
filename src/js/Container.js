import React, { Component } from 'react';
// import Icons from './Icons.js';
import {GithubIcon, FacebookIcon, TwitterIcon} from './Icons.js';
import Carousel from 'react-bootstrap/Carousel';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "alexandertweeks@gmail.com" 
    }
  }

  render() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
          <div className="w-100">
            <h1 className="mb-0">Alex
              <span className="text-primary">Weeks</span>
            </h1>
            <div className="subheading mb-5">Farnham,&nbsp;Surrey,&nbsp;UK · linkedin.com/in/alexander-t-weeks · (+44)&nbsp;7780&nbsp;332641<br/>
              <a href="mailto:name@email.com">{this.state.email}</a>
            </div>
            <p className="lead mb-5 super-aesthetic" >
              it just me being me
            </p>
            <div>
              <GithubIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>
        </section>
    )
  }
}

class Experience extends Component {

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">December 2011 - March 2013</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div>

          </div>

        </section>
    )
  }
}

class InformationItem extends Component {
  render() {
    return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{this.props.title}</h3>
          <div className="subheading mb-3">{this.props.subheading}</div>
          <div>{this.props.content}</div>
          {/* <p>GPA: 3.23</p> */}
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{this.props.date}</span>
        </div>
      </div>

    )
  }
}

class Education extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <InformationItem title="University of Bath" subheading="Computer Science and Mathematics" 
                content="First Class BSc with Honours" date="September 2015 - May 2019"/>

            <InformationItem title="Alton Sixth Form College" subheading="A Levels" 
                content="A* Further Maths · A* Maths · A Physics" date="September 2013 - May 2015" />

            <InformationItem title="All Hallows Secondary School" subheading="GCSEs"
                content="13 GCSEs A* to A incl. A*s in Maths, English Lit. &amp; English Lang." date="September 2006 - May 2013"/>

            {/* <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel> */}

          </div>
        </section>
    )
  }
}

class Skills extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gulp"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-grunt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
          </div>
        </section>
    )
  }
}

class Interests extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>
    )
  }
}

class Awards extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
          <div className="w-100">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Google Analytics Certified Developer</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Mobile Web Specialist - Google Certification</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005</li>
            </ul>
          </div>
        </section>
    )
  }
}

class HR extends Component {
  render() {
    return (
      <hr className="m-0" />
    )
  }
}

class Container extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <About />

        <HR />

        <Experience />

        <HR />

        <Education />

        <HR />

        <Skills />

        <HR />

        <Interests />

        <HR />

        <Awards />

      </div>
    )
  }
}

export default Container;