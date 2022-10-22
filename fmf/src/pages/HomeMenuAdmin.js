import { Button } from 'bootstrap';
import {Link} from "react-router-dom";
import React from 'react';
import "react-bootstrap"
import '../App.css';

function HomeMenuAdmin() {
  return (
    <div className="menuContainer" >
      <h1 className='menuHeader'>Admin Menu</h1>
      <h1 className='infonotice biggerfont'>This Page is Not Fully Developed Yet</h1>
      <h1 className='loginnotice biggerfont'>Due to time constraints, we have not configured some features with the firestore database, some features have been hardcoded for now</h1>
      <div>
          <Link to="/cubiclemanager"><button className={"menuButton"}>Cubicle Manager</button></Link>
          <Link to="/childcaremanager"><button className={"menuButton"}>Child Care Manager</button></Link>
      </div>
      <div>
          <Link to="/socialmanager"><button className={"menuButton"}>Social Holidays Manager</button></Link>
          <Link to="/rdpmanager"><button className={"menuButton"}>RDP Manager</button></Link>
      </div>
    </div>
  );
}

export default HomeMenuAdmin;