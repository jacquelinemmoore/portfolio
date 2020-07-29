import React, {Component} from 'react';

class Portfolio extends Component {
    render() {

        if (this.props.data) {

            var columnClassName = (this.props.data.length < 7 ||
                this.props.data.length === 9)
                    ? "bgrid-thirds"
                    : "bgrid-quarters";

            var projects = this.props.data.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;
                return <div key={projects.title} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title}>
                            <img alt={projects.title} src={projectImage}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            })
        }

        return (
            <div className="portfolio row">
                <div className="twelve columns collapsed">
                    <h1>{this.props.title}</h1>
                    <div id="portfolio-wrapper" className={`${columnClassName} s-bgrid-thirds cf`}>
                        {projects}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
