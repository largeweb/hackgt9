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

function AboutPage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This web app is a shell of the functionality that we would have liked to implement. This application is meant to be a hub for many of the new return-to-office protocols and services. Whether you are registering your child for on-campus childcare, signing up for a social event, or reserving a desk for the week, this web app is the place to go!
      <hr></hr>
While much of the functionality is hardcoded, we believe that with a bit more time this could be a quintessential part of the Infosys campus culture.<hr></hr>
For cubicle select, the administrator would have the ability to upload a labelled floor plan for each floor and each building, and then add available cubicles which can be selected by employees.<hr></hr>
For the childcare and social events registration, there is no functionality. However, the idea for the social events is that a person can see who is registered for which event.<hr></hr>
Desktop RDP was unimplemented, but mentioned in the slide show. It is meant to be an automated system which can request individuals who are near your desktop and in-office to power the computer on to enable remote desktop.
    </div>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default AboutPage;