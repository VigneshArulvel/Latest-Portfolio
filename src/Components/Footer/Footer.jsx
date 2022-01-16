import * as ReactBootstrap from "react-bootstrap";
import './Footer.css';
// import Image from 'react-bootstrap/Image';
// import Icon from '../../images/pngwing.png';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer({tabClicked}) {
  return (
    <ReactBootstrap.Container fluid id = "">
        {/* <Image fluid src = {Icon} id = "FooterAppIcon">
        </Image> */}
        <div className = "">
            <ButtonGroup className="mb-2 row" id = "FooterTabs">
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("Home");}}>Home</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("About");}}>About</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("Work");}}>Work</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("Contact");}}>Contact</ReactBootstrap.Button>
            </ButtonGroup>
        </div>
        <div className = "">
            <ButtonGroup className="mb-2 row" id = "FooterIcons">
                <FontAwesomeIcon icon={faFacebook} onClick={() => {window.location = 'https://www.facebook.com/sam.vignesh.395';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faTwitter}  onClick={() => {window.location = 'https://twitter.com/';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faLinkedin} onClick={() => {window.location = 'https://www.linkedin.com/in/vignesh-arulvel-7bb152176';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faInstagram} onClick={() => {window.location = 'https://www.instagram.com/vignesh_arulvel/';}} className = "FooterIcon col-8 col-sm-8"/>
            </ButtonGroup>
        </div>
        <div id = "FooterCopyrightDiv">
            <p>Copyright © 2022 Vignesh Arulvel</p>
        </div>
    </ReactBootstrap.Container>
  );
}

export default Footer;
