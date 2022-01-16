import * as ReactBootstrap from "react-bootstrap";
import './Contact.css';
// import GoogleMapReact from "google-map-react";
// import MapContainer from './MapContainer';
// const  googleMapsApiKey = "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { GoDeviceMobile } from 'react-icons/go';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { VscPerson } from 'react-icons/vsc';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsContentPage = (props, ref) => {
    const notify = (text) => toast.success(text);
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_zfz7t2q', 'template_xs65jzu', e.target, 'user_m6ikvEdk57MNfTblrxW7I')
          .then((result) => {
              console.log(result.text);
              notify("Mail sent");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              notify("Error");
          });
      };
    
    return(
        <ReactBootstrap.Container ref={ref} id = "contactUsContentPageContainer">
            <div id = "CUCTitle">
            <VscPerson className = "bootstrapAboutIcon col"></VscPerson>Contact Me
            </div>
            {/* <MapContainer></MapContainer> */}
            <div className = "row">
             <div className = "col-lg-6 md-12" id = "formDivContainer">
              <Form onSubmit={sendEmail}>
                <div className = "row">
                  <div className = "col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicName">
                      {/* <Form.Label>Your name</Form.Label> */}
                      <Form.Control type="text" placeholder="Enter name" required name = "from_name"/>
                    </Form.Group>
                  </div>  
                  <div className = "col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Email address</Form.Label> */}
                      <Form.Control type="email" placeholder="Enter email" required name = "from_email"/>
                      {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  {/* <Form.Label>Subject</Form.Label> */}
                  <Form.Control type="text" placeholder="Subject" required name = "title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  {/* <Form.Label>Enter message</Form.Label> */}
                  <Form.Control as="textarea" rows={7} placeholder="Your message" required name = "message"/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit" id = "sendMessageButton">
                  Send message
                </Button>
              </Form>
             </div>
              <div id="contactDetailsDivContainer" className = "col-lg-6 md-12">
              <p id = "getInTouchDiv">Want to work with me, Get in touch.</p>
                <br></br>
                <div className = "row" id = "contactDataDiv">
                    <GoDeviceMobile className = "bootstrapAboutIcon col" id = "contactDataIcon"></GoDeviceMobile> 
                    <div className="col" id = "contactDataText"> Call me at
                        <p id ="contactDataTextValue" >+91 7418574136</p>
                    </div>
                </div>
                <div className = "row" id = "contactDataDiv">
                    <MdOutlineEmail className = "bootstrapAboutIcon col" id = "contactDataIcon"></MdOutlineEmail> 
                    <div className="col" id = "contactDataText"> Email me at
                        <p id ="contactDataTextValue">vignesh1466@gmail.com</p>
                    </div>
                </div>
                <div className = "row" id = "contactDataDiv">
                    <FaLocationArrow className = "bootstrapAboutIcon col" id = "contactDataIcon"></FaLocationArrow> 
                    <div className="col" id = "contactDataText"> Address
                        <p id ="contactDataTextValue">Tamilnadu, India</p>
                    </div>
                </div>
              </div>
            </div>
            <ToastContainer hideProgressBar autoClose={3000}></ToastContainer>
        </ReactBootstrap.Container>
    );
}

export default React.forwardRef(ContactUsContentPage);