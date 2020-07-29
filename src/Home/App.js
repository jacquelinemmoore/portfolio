import React, {Component} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Portfolio from '../Components/Portfolio';
import {ImageGallery} from "../Components/ImageGallery";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);

    }

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        console.log(this.state.resumeData.main);

        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <section id="portfolio">
                    {this.state.resumeData.portfolio ?
                        <div className="row">
                            <Portfolio title={"Writing Samples"} data={this.state.resumeData.portfolio.writing}/>
                            <Portfolio title={"Projects"} data={this.state.resumeData.portfolio.projectmgmt}/>
                            <Portfolio title={"Designs"} data={this.state.resumeData.portfolio.designs}/>
                        </div>
                    : null }
                    {/*<ImageGallery/>*/}
                </section>
                <About data={this.state.resumeData.main}/>

                {/*<Testimonials data={this.state.resumeData.testimonials}/>*/}
                {/*<Contact data={this.state.resumeData.main}/>*/}
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;