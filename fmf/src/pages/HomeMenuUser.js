import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";

function HomeMenuUser() {
  return (
    <div className="menuContainer">
      <h1 className='menuHeader'>User Menu</h1>
        <div>
          <Link to="/cubicle"><button className={"menuButton"}>Cubicle Select</button></Link>
          <Link to="/childcare"><button className={"menuButton"}>Child Care</button></Link>
          {/* INCLUDE CHECK IN IN CHILD CARE PAGE */}
        </div>
        <div>
          {/* Scroll down list */}
          {/* Social cultural events, view flyers */}
          {/* Add a view participants */}
          <Link to="/social"><button className={"menuButton"}>Social Holidays</button></Link>
          <Link to="/rdp"><button className={"menuButton"}>Desktop RDP</button></Link>
          {/* Check Biz Hacks Notes */}
        </div>
        <div>
          {/* <button className={"menuButton"}>View Participants</button> */}
          <Link to="/about"><button className={"menuButton"}>About this Web App</button></Link>
        </div>
    </div>
  );
}

export default HomeMenuUser;