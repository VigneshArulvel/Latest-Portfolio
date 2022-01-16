import * as ReactBootstrap from "react-bootstrap";
import './Tabs.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect } from 'react';

function Tabs({tabClicked}) {
  const [header, setHeader] = useState("navbarHeader");
  const [navTitleDiv, setNavTitleDiv] = useState("navTitleDiv");
  const [navLink, setNavLink] = useState("navLinkTag");
;
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      setNavTitleDiv("navTitleDiv");
      setNavLink("navLinkTag");
      return setHeader("navbarHeader")
    } else if (window.scrollY > 70) {
      setNavTitleDiv("navTitleDiv2");
      setNavLink("navLinkTag2");
      return setHeader("navbarHeader2")
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <ReactBootstrap.Container fluid id = "navBarTabs">
        <>
          <Navbar collapseOnSelect id = {header} expand = "lg" bg="primary" variant="dark">
          <div id = "initDiv">  
            <div id = {navTitleDiv} className = "navTitleClass" onClick={() => {tabClicked("Home");}} >VIGNESH ARULVEL</div>
            <ReactBootstrap.Container id = "baseNavBar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link id = {navLink} href="#home" onClick={() => {tabClicked("Home");}}>HOME</Nav.Link>
                <Nav.Link id = {navLink} href="#about" onClick={() => {tabClicked("About");}}>ABOUT</Nav.Link>
                <Nav.Link id = {navLink} href="#work" onClick={() => {tabClicked("Work");}}>WORK</Nav.Link>
                <Nav.Link id = {navLink} href="#contact" onClick={() => {tabClicked("Contact");}}>CONTACT</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </ReactBootstrap.Container>
          </div>
          </Navbar>
        </>
    </ReactBootstrap.Container>
  );
}

export default Tabs;
