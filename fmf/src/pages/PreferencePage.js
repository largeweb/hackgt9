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

// preferences, and submit to google directions (google api)

function PreferencePage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This is the Preference Page
    </div>
    <img src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' />
    <img src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' />
    <img src='https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail-500x500.jpg' alt='stirfry' />
    <img src='https://sharpaspirant.com/wp-content/uploads/2021/02/Breakfast-Sandwich-22-500x500.jpg' alt='sandwich' />
	  <Link to="/directions"><button className='menuButton'>Go</button></Link>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default PreferencePage;