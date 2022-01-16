import * as ReactBootstrap from "react-bootstrap";
import './Homepage.css';
import ReactTextRotator from "react-text-rotator";
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/Resume.pdf';
import React from 'react';

const content = [
    {
      text: "Web developer.",
      className: "classA",
      animation: "fade",
    },
    {
      text: "Roku tv app developer.",
      className: "classC",
      animation: "fade",
    },
  ];

  const Homepage = (props, ref) => {
    return(
        <ReactBootstrap.Container id = "HomepageInitTag" ref = {ref}>
            <div id = "textDiv">
                <p id = "welcomeDiv">Hello</p>
                <p id = "myNameDiv">I'M VIGNESH ARULVEL.</p>
                <p id = "myRoleDiv">And i'm a <span id = "textRotatorDiv"><ReactTextRotator content={content} time={4000} startDelay={0} /></span>
                </p>
                <p id = "myDescDiv">The guy who focuses on writing clean, elegant and efficient code.</p>
            </div>
            <div>
                <Button id = "myResumeButton" variant="outline-secondary"><a id = "resumeAnchor" href = {Resume} download>Download CV</a></Button>{' '}
            </div>
            <div className = "scrollDownDiv" onClick={() => {props.tabClicked("About");}}>
                
            </div>
        </ReactBootstrap.Container>
    )
}

export default React.forwardRef(Homepage);