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

// directions page will have a google map with directions to the building
// using the google api
// show google map and provide address

function DirectionPage() {

  const [restaurantChoice, setRestaurantChoice] = useLocalStorage('restaurantChoice','Joes Pizza')

  function refreshPage() {
    window.location.reload(false);
  }

 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      Directions to {restaurantChoice}
    </div>
    <img src='https://owi.ucdavis.edu/sites/g/files/dgvnsk8926/files/styles/sf_landscape_16x9/public/media/images/google-maps-satellite.png?h=83823e20&itok=G9S9rzyI' alt='google map' />
    <div className='menuContainer aboutdiv'>
      Start Journey
    </div>
	  <Link to="/rating"><button className='menuButton'>Finished</button></Link>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <br></br>
	  <Link to="/directions"><button className='menuButton centeronly' onClick={refreshPage}>Select New Option</button></Link>
    <Footer />
  </div>
 )
}

export default DirectionPage;