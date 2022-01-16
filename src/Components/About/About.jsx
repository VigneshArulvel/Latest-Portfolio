// import * as ReactBootstrap from "react-bootstrap";
import './About.css';
import profileImage from '../../Images/profileImage.jpg';
import { IoIosPerson } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import React from 'react';

const About = (props, ref) => {
    return(
    <>
        <div ref={ref} id = "aboutMeTitleDiv"><IoIosPerson className = "bootstrapAboutIcon1" ></IoIosPerson>About Me</div>
        <div className = "row" id = "aboutInitDiv">
            <div className = "col-lg-6 md-12 sm-8" id ="profileImageDiv">
                <img id = "profileImage" src={profileImage} className="img-fluid" alt="Responsive"></img>
            </div>
            <div className = "col-lg-6 md-12 sm-2" id = "aboutSecondDiv">
                <p id = "aboutSecondDivTitle"><b>Hello! </b> I'M Vignesh Arulvel.</p>
                <p className = "aboutContext"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Software developer with 4+ years of professional experience in creating an application in multiple 
                technologies like Javascript, Brightscript.</p>
                <br></br>
                <p className = "aboutContext"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Having experience in Javascript frameworks such as React JS and state management library like 
                Redux.</p>
                <br></br> 
                <p className = "aboutContext"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Created roku smart tv application, having hands on
                experience on the Brightscript.</p>
                <br></br>
                <p className = "aboutContext"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Followed coding guidelines, naming convention to ensure code readability and reusability.
                </p> 
                <br></br>
                <p className = "aboutContext"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Worked on software for distributed version control environment such as github or bitbucket as 
                part of software development.</p>
            </div>
        </div>
    </>
    );
}

export default React.forwardRef(About);