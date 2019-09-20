import React, {Component} from 'react';
import {isNullOrUndefined} from "util";
// import resumeURL from "../assets/Jacqueline Moore Resume.pdf"

class About extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var listIntro = this.props.data.listIntro;
            var bioList = this.props.data.bioList;
            

            
            var email = this.props.data.email;
        }



        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Jacqueline Moore Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <p>{listIntro}</p>
                        <ol>
                                {!isNullOrUndefined(bioList)
                                    ? bioList.map(item => <li key={item}>{item}</li>)
                                    : null}
                        </ol>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    
                                    
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="Jacqueline Moore Resume.pdf" className="button" download>
                                        <i className="fa fa-download"/>Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
