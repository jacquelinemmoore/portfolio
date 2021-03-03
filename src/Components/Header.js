import React, {Component} from 'react';
import {NetworkIcon} from "./NetworkIcon";

class Header extends Component {
    render() {

        if (this.props.data) {
            //var name = this.props.data.name;
            //var occupation = this.props.data.occupation;
            // var occupation2 = this.props.data.occupation2;
            //var description = this.props.data.description;
            //var city = this.props.data.address.city;
            var networks = this.props.data.social.map(network =>
                <NetworkIcon key={network.name} name={network.name} url={network.url} className={network.className}/>
            )
        }

        return (
            <header id="home">

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Jacqueline Moore</h1>
                        <h3><b>Biomedical engineering</b> student at UC Davis.</h3>
                        <h3>Incoming <b>technical writer</b> at Salesforce.</h3>
                        <h3>Dabbling in <b>project management</b>, <b>UX design</b>, and <b>ice climbing</b>.</h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
