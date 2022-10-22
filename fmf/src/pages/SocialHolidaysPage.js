import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import child1 from "../images/child1.jpeg"
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"

function SocialHolidaysPage() {
 return (
  <div className='homediv'>
    <Navbar />
	  <Link to="/app"><button className='menuButton'>Go Back Home</button></Link>
    <div className='childcareTopDiv'>
      View Our Social Holidays!
    </div>
    <img className='childcareimage' src={img1}></img>
    <img className='childcareimage' src={img2}></img>
    <img className='childcareimage' src={img3}></img>
    <img className='childcareimage' src={img4}></img>
    <img className='childcareimage' src={img5}></img>
    <img className='childcareimage' src={img6}></img>
	  <Link to="/app"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default SocialHolidaysPage;