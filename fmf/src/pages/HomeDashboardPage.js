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

// this page has two buttons but also the pull out menu 3 bars
// choose now button goes to directions page
// customize button goes to preference page
// pull out menu has profile, past history, and preferences, and all the other pages
// profile will be for google after if we have time

function HomeDashboardPage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This is the Home Dashboard Page
    </div>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default HomeDashboardPage;