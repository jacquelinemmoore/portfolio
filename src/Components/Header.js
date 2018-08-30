import React, {Component} from 'react';
import {NetworkIcon} from "./NetworkIcon";

class Header extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(network =>
                <NetworkIcon name={network.name} url={network.url} className={network.className}/>
            )
        }

        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="nav-item smoothscroll" href="#home">Home</a></li>
                        <li><a className="nav-item smoothscroll" href="#about">About</a></li>
                        <li><a className="nav-item smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="nav-item smoothscroll" href="#portfolio">Works</a></li>
                        {/*<li><a className="nav-item smoothscroll" href="#testimonials">Testimonials</a></li>*/}
                        {/*<li><a className="nav-item smoothscroll" href="#contact">Contact</a></li>*/}
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
