// import * as ReactBootstrap from "react-bootstrap";
import './AdditionalInfoAboutMe.css';
import React, { useEffect } from 'react'
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiBlackBook } from 'react-icons/gi';
import { GoPrimitiveDot } from 'react-icons/go';

function AdditionalInfoAboutMe(){
    useEffect(() => {
        document.addEventListener('scroll', () => {
            var initDiv = document.getElementById("skillsInitDiv");
            var position = initDiv.getBoundingClientRect();
            if(position.top < window.innerHeight && position.bottom >= 0) {
                document.getElementById("reactProgressBar").style.width = "90%";
                document.getElementById("htmlProgressBar").style.width = "80%";
                document.getElementById("cssProgressBar").style.width = "80%";
                document.getElementById("jsProgressBar").style.width = "90%";
                document.getElementById("reduxProgressBar").style.width = "70%";
                document.getElementById("brightscriptProgressBar").style.width = "80%";
            }
        });
    }, []);

    return(
        <>
            <div className = "row" id = "about2InitDiv">
                <div className = "col-lg-6 md-12 sm-8" id ="">
                    <p className = "additionalInfoTitle"><AiOutlineLaptop className = "bootstrapAboutIcon" ></AiOutlineLaptop> TECHNICAL COMPETENCIES : </p>
                    <p className = ""><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Development : </span>HTML5, CSS3, Javascript, ES6, Brightscript, XML, Component based UI, 
                    Responsive Web Design, JSON.</p>
                    <p><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Frameworks / Libraries : </span>React js, Bootstrap, Redux, JQuery.</p>
                    <p><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Version Control : </span>Github,Bitbucket.</p>
                    <p><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Tracking Software : </span>JIRA, Assembla.</p>
                    <p><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Other Tools : </span>Invision, Charles proxy, Pusher, Postman.</p>
                    <p><span className = "additionalInfoSubTitle"><GoPrimitiveDot className = "bootstrapAboutIcon2"></GoPrimitiveDot> Operating System : </span>Windows Family, Ubuntu, ROKU [Tv OS].</p>
                    <p className = "additionalInfoTitle"><MdWorkOutline className = "bootstrapAboutIcon"></MdWorkOutline> EXPERIENCE :</p>
                    <p className = ""><span className = "additionalInfoSubTitle">Verizon - </span>Web developer from Mar 2020 to present.</p>
                    <p className = ""><span className = "additionalInfoSubTitle">Tringapps research labs pvt ltd - </span>Web and Roku tv app developer from June 2017 to Mar 2020.</p>
                </div>
                <div className = "col-lg-6 md-12 sm-2" id = "skillsInitDiv">
                    <p className = "additionalInfoTitle">< GiBlackBook className = "bootstrapAboutIcon"></GiBlackBook> MY SKILLS : </p>
                    <div className = "skillsTextDiv">
                        <p>React JS</p>
                        <p>90%</p>
                    </div>
                    <div className="progress">
                        <div id = "reactProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                    <div className = "skillsTextDiv">
                        <p>HTML</p>
                        <p>80%</p>
                    </div>
                    <div className="progress">
                        <div id = "htmlProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                    <div className = "skillsTextDiv">
                        <p>CSS</p>
                        <p>80%</p>
                    </div>
                    <div className="progress">
                        <div id = "cssProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                    <div className = "skillsTextDiv">
                        <p>Javascript</p>
                        <p>90%</p>
                    </div>
                    <div className="progress">
                        <div id = "jsProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                    <div className = "skillsTextDiv">
                        <p>Redux</p>
                        <p>70%</p>
                    </div>
                    <div className="progress">
                        <div id = "reduxProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                    <div className = "skillsTextDiv">
                        <p>Brightscript</p>
                        <p>80%</p>
                    </div>
                    <div className="progress">
                        <div id = "brightscriptProgressBar" className="progress-bar" role="progressbar" style = {{width: "0%", transition: "width 3.4s ease-in-out"}}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdditionalInfoAboutMe;