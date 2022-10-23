import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import useLocalStorage from "use-local-storage"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import child1 from "../images/child1.jpeg"

// ratings page will just rating
// add note * this will improve your results in the future

function RatingPage() {
 return (
  <div className="mainTitleMenu" style={{right:"0",left:"0"}}>
    <Navbar />
    <div className="midTitleText centeronly">
      Add a Review
    </div>
    <hr></hr>
    <div className="smallTitleText centeronly">
      Rate your Experience
    </div>
    <div className='picture-frame' style={{fontWeight:"60px", fontSize:"40px", width:"80%",marginBottom:"3%", marginTop:"4%"}}>
      🌟  🌟  🌟  🌟  🌟
    </div>
    <hr></hr>
    <div className="smallTitleText centeronly">
      What did you like?
    </div>
    <br></br>
    <input
              type="text"
              placeholder=""
              className='loginInput'
    />
	  <Link to="/dashboard"><button className='button-google centeronly'>Submit</button></Link>
    <hr></hr>
	  <Link to="/dashboard"><button className='button-google centeronly'>Dashboard</button></Link>
    <Footer style={{bottom:"0px"}} />
  </div>
 )
}

export default RatingPage;