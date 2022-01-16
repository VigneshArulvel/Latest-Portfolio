import './App.css';
import Tabs from './Components/Tabs/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Homepage from './Components/HomePage/Homepage';
import About from  './Components/About/About';
import AdditionalInfoAboutMe from './Components/AdditionalInfoAboutMe/AdditionalInfoAboutMe';
import { useRef } from 'react';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  // const [tabSelected, settabSelected] = React.useState("Home");
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const tabClicked = (data, pdpDataValue) => { // the callback. Use a better name
    if (typeof data != "undefined" && data != null){
      if (data === "About"){
        // const scrollToRef = (ref) => 
        window.scrollTo(0, aboutRef.current.offsetTop - 100);
      }
      else if(data === "Home"){
        window.scrollTo(0, homeRef.current.offsetTop);
      }
      else if(data === "Work"){ 
        window.scrollTo(0, workRef.current.offsetTop - 100);
      }
      else if(data === "Contact"){
        window.scrollTo(0, contactRef.current.offsetTop - 100);
      }
    }
    // settabSelected(data);
    // setIsActive(true);
    // setTimeout(setIsActive, 1000, false);
    // if(typeof pdpDataValue !== 'undefined' && pdpDataValue !== null && pdpDataValue !== ""){
      // setPdpData(pdpDataValue);
    // }
  };
  
  return (
    <div className="App">
      <Tabs tabClicked={tabClicked}></Tabs>
      <Homepage tabClicked={tabClicked} ref = {homeRef}></Homepage>
      <About ref = {aboutRef}></About>
      <AdditionalInfoAboutMe></AdditionalInfoAboutMe>
      <Work ref = {workRef}></Work>
      <Contact ref = {contactRef}></Contact>
      <Footer tabClicked={tabClicked}></Footer>
    </div>
  );
}

export default App;
