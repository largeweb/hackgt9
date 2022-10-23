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
  <div>
    <Navbar />
    <div>
      Add a Review
    </div>
    <div>
      Rate your Experience
    </div>
    <div className='menuContainer aboutdiv'>
      🌟🌟🌟🌟🌟
    </div>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default RatingPage;