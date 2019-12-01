import * as React from 'react';

export class Navigator extends React.Component {

    render() {
        return <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li className="current"><a className="nav-item smoothscroll" href="#home">Home</a></li>
                <li><a className="nav-item smoothscroll" href="#about">About</a></li>
                <li><a className="nav-item smoothscroll" href="#resume">Resume</a></li>
                <li><a className="nav-item smoothscroll" href="#portfolio">Portfolio</a></li>
                {/*<li><a className="nav-item smoothscroll" href="#testimonials">Testimonials</a></li>*/}
                {/*<li><a className="nav-item smoothscroll" href="#contact">Contact</a></li>*/}
            </ul>

        </nav>
    }
}



