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
  <div className='mainTitleMenu'>
    <div className='centeronly' style={{marginTop:"5%", marginBottom:"10%"}}>
      <div className='bigTitleText centeronly' style={{marginBottom:"0"}}>FIND</div>
      <div className='smallTitleText centeronly'>my</div>
      <div className='bigTitleText centeronly'>FOOD</div>
    </div>
    {/* This is the Intro Home Page */}
    <div className='centeronly' style={{marginBottom:"2%"}}>Search Now!</div>
    <Link to="/login"><button className='button-google'>Continue with Facebook</button></Link>
    <br></br>
    <Link to="/login"><button className='button-google'>Continue with Google</button></Link>
    <br></br>
    <Link to="/dashboard"><button className='smallLinkButton astext'><u>Continue as Guest</u></button></Link>
    <div style={{marginBottom:"200px"}}></div>

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