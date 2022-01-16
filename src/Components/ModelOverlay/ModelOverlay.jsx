import './ModelOverlay.css';
import React from 'react';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
// import workImg1 from '../../Images/VerizonGridwall.PNG';
import workImg1 from '../../Images/VerizonGridwall.PNG';
import workImg2 from '../../Images/VerizonLiveChatImage.PNG';
import workImg3 from '../../Images/Augury.png';
import workImg4 from '../../Images/DeviceTracker.png';
import workImg5 from '../../Images/Cspire.png';
import { Markup } from 'interweave';

function ModelOverlay(props) {
    const [show, setShow] = useState(false);
    const [isclickHandled, setisclickHandled] = useState(false);
    
    const handleClose = () => {
        setShow(false);
        setisclickHandled(false);
        props.setworkDivClicked();
    }
    const getImage = (type) => {
        if(type === "workImg1"){
            return workImg1;
        }
        else if(type === "workImg2"){
            return workImg2;
        }
        else if(type === "workImg3"){
            return workImg3;
        }
        else if(type === "workImg4"){
            return workImg4;
        }
        else if(type === "workImg5"){
            return workImg5;
        } 
    }
    const handleShow = () => setShow(true);
    if (props){
        if (props.clicked === true && isclickHandled === false){
            handleShow();
            setisclickHandled(true);
        }
    }
    return (
      <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}
        >
        {/* </Modal>
        <Modal show={show} onHide={handleClose}> */}
          <Modal.Header closeButton>
            <Modal.Title>
                <Markup content={props.workDataSelected.title}/> 
            </Modal.Title>
          </Modal.Header>
          <img id = "workImg1" src={getImage(props.workDataSelected.image)} className="img-fluid" alt="Responsive"></img>
          <Modal.Body>
            <Markup content={props.workDataSelected.desc}/>          
          </Modal.Body>
          {/* <Modal.Footer>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
  
 export default ModelOverlay;