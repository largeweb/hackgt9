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

// directions page will have a google map with directions to the building
// using the google api
// show google map and provide address

function DirectionPage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This is the Direction Page
    </div>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default DirectionPage;