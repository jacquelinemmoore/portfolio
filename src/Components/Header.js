import React, {Component} from 'react';
import {NetworkIcon} from "./NetworkIcon";

class Header extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var occupation2 = this.props.data.occupation2;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(network =>
                <NetworkIcon key={network.name} name={network.name} url={network.url} className={network.className}/>
            )
        }

        return (
            <header id="home">

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3>I'm a <span>{occupation} </span> from {city}, California.</h3>
                        <h3>I'm also {description}</h3>
                        <h3>(That's me in the picture.)</h3>
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
