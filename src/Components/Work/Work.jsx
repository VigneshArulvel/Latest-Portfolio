import './Work.css';
import React from 'react';
import ModelOverlay from '../ModelOverlay/ModelOverlay';
import workImg1 from '../../Images/VerizonGridwall.PNG';
import workImg2 from '../../Images/VerizonLiveChatImage.PNG';
import workImg3 from '../../Images/Augury.png';
import workImg4 from '../../Images/DeviceTracker.png';
import workImg5 from '../../Images/Cspire.png';
import {useState, useEffect} from 'react';
import workJson from '../HomePage/WorkJson';
import { MdWorkOutline } from 'react-icons/md';


const Work = (props, ref) => {
    const [workDivClicked, setworkDivClicked] = useState(false);
    const [workDataSelected, setWorkDataSelected] = useState({image : { workImg1 : ""}});
    
    const workSelected = (props) => {
        setworkDivClicked(true);
        setWorkDataSelected(workJson[props]);
    }
    const closeModel = () => {
        console.log("in closeModel");
        setworkDivClicked(false);
    }
    useEffect(() => {
        
        }    , []);

    return(
        <>
            <div ref={ref} id = "workTitleDiv"><MdWorkOutline className = "bootstrapAboutIcon"></MdWorkOutline> Work </div>
            <div id = "workTitleDescDiv">I have worked on few amazing projects which I picked up for you.</div>
            <div className = "row" id = "WorkImgRow1">
                <div className = "col-lg-3 col-md-4 sm-8 border" id = "workI1" onClick={() => {workSelected("work1")} }>
                    <img id = "workImg1" src={workImg1} className="img-fluid" alt="Responsive"></img>
                    <div id = "workOverlay">
                        <div id = "hoverText">Verizon.com website pages</div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-4 sm-8 border" id = "workI1" onClick={() => {workSelected("work2")} }>
                    <img id = "workImg1" src={workImg2} className="img-fluid" alt="Responsive"></img>
                    <div id = "workOverlay">
                        <div id = "hoverText">Live chat library integration</div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-4 sm-8 border" id = "workI1" onClick={() => {workSelected("work3")} }>
                    <img id = "workImg1" src={workImg3} className="img-fluid" alt="Responsive"></img>
                    <div id = "workOverlay">
                        <div id = "hoverText">Augury</div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-4 sm-8 border" id = "workI1" onClick={() => {workSelected("work4")} }>
                    <img id = "workImg1" src={workImg4} className="img-fluid" alt="Responsive"></img>
                    <div id = "workOverlay">
                        <div id = "hoverText">Device tracker</div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-4 sm-8 border" id = "workI1" onClick={() => {workSelected("work5")} }>
                    <img id = "workImg1" src={workImg5} className="img-fluid" alt="Responsive"></img>
                    <div id = "workOverlay">
                        <div id = "hoverText">Cspire</div>
                    </div>
                </div>
            </div>
            <ModelOverlay clicked = {workDivClicked} setworkDivClicked = {closeModel} workDataSelected = {workDataSelected} ></ModelOverlay>
        </>
    )
}

export default React.forwardRef(Work);