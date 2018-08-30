import React, {Component} from 'react';
import {NetworkIcon} from "./NetworkIcon";

class Footer extends Component {
    render() {

        if (this.props.data) {
            var networks = this.props.data.social.map(network =>
                <NetworkIcon name={network.name} url={network.url} className={network.className}/>
            )
        }

        return (
            <footer>

                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
