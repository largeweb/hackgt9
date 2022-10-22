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

function SocialHolidaysManagerPage() {
 return (
  <div className='homediv'>
    <Navbar />
	  <Link to="/appadmin"><button className='menuButton'>Go Back Home</button></Link>
    <div className='childcareTopDiv'>
      This is not fully developed yet
      <hr></hr>
      This page could be used for adding and removing events
    </div>
	  <Link to="/appadmin"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default SocialHolidaysManagerPage;