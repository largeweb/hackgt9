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

// loading page can just be at the beginning for one second

function LoadingPage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This is the Loading Page
    </div>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default LoadingPage;