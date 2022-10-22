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
import useLocalStorage from "use-local-storage"

// this page has continue with facebook/google OR continue as guest
// continue as guest will link straight to dashboard page
// continue with facebook/google will link to login page

function IntroHomePage() {
 return (
  <div className='menuContainer'>
    <div className='mainTitle'><span className='bigTitleText centeronly'>FIND</span><br></br><span className='smallTitleText centeronly'>my</span><br></br><span className='bigTitleText centeronly'>FOOD</span></div>
    {/* This is the Intro Home Page */}
    <Link to="/login"><button className='menuButton'>Continue with Facebook</button></Link>
    <Link to="/login"><button className='menuButton'>Continue with Google</button></Link>
    <Link to="/dashboard"><button className='smallLinkButton'><u>Continue as Guest</u></button></Link>

    {/* <hr></hr>
    <hr></hr>
    <hr></hr>
    <p>Dev Stuff</p>
    <hr></hr>
    <hr></hr>
    <hr></hr>
	  <Link to="/login"><button className='menuButton'>Login Page /login</button></Link>
	  <Link to="/dashboard"><button className='menuButton'>Home Dashboard /dashboard</button></Link>
	  <Link to="/preferences"><button className='menuButton'>Preference Page /preferences</button></Link>
	  <Link to="/directions"><button className='menuButton'>Direction Page /directions</button></Link>
	  <Link to="/review"><button className='menuButton'>Review Page /review</button></Link> */}
    <Footer />
  </div>
 )
}

export default IntroHomePage;