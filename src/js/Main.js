import React from 'react';

import '../css/Main.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="hero">
                    <div className="title">
                        <h1>Alex Weeks</h1>
                        <p className="subheading">it's just me being me</p>
                    </div>
                    <div className="footer">
                        {/* <i className="fas fa-chevron-down"></i> */}
                        <p className="scroll">scroll</p>
                    </div>
                </section>
                <section className="section1">

                </section>
                {/* <p>Test</p> */}
            </main>
        )
    }
}

export default Main;