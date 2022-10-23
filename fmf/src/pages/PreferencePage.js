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

// preferences, and submit to google directions (google api)

function PreferencePage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='midTitleText centeronly' style={{color:"#5838b4"}}>
      Preference
    </div>
    <hr></hr>
    <h1 className='smallTitleText' style={{marginLeft:"5%"}}>Category</h1>
    <div class="grid-container">
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' />
          {/* <span style={{width:"30%"}}>Texan</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' />
          {/* <span style={{width:"30%"}}>American</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>Texan</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>American</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail-500x500.jpg' alt='stirfry' />
          {/* <span style={{width:"30%"}}>Chinese</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://sharpaspirant.com/wp-content/uploads/2021/02/Breakfast-Sandwich-22-500x500.jpg' alt='sandwich' />
          {/* <span style={{width:"30%"}}>European</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>Chinese</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>European</span>
        {/* </div> */}
      </div>
    </div>
    <br></br>
    <hr></hr>
    <h1 className='smallTitleText' style={{marginLeft:"5%"}}>Restrictions</h1>
    <div class="grid-container">
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' />
          {/* <span style={{width:"30%"}}>Paleo</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' />
          {/* <span style={{width:"30%"}}>HotDog</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>Paleo</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>HotDog</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail-500x500.jpg' alt='stirfry' />
          {/* <span style={{width:"30%"}}>Vegetarian</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          <img style={{width:"30%"}} src='https://sharpaspirant.com/wp-content/uploads/2021/02/Breakfast-Sandwich-22-500x500.jpg' alt='sandwich' />
          {/* <span style={{width:"30%"}}>Kosher</span> */}
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://tipbuzz.com/wp-content/uploads/Grilled-Steak-11-500x500.jpg' alt='steak' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>Vegetarian</span>
        {/* </div> */}
      </div>
      <div class="grid-item">
        {/* <div className="picture-frame"> */}
          {/* <img style={{width:"30%"}} src='https://www.karissasvegankitchen.com/wp-content/uploads/2020/06/vegan-carrot-dogs-ft-500x500.jpg' alt='vegan' /> */}
          <span style={{width:"30%", marginLeft:"20%", textAlign:"center"}}>Kosher</span>
        {/* </div> */}
      </div>
    </div>
    <hr></hr>
    <br></br>
	  <Link to="/directions"><button className='button-google'>Submit</button></Link>
    <br></br>
	  <Link to="/dashboard"><button className='button-google'>Back</button></Link>
    <Footer />
  </div>
 )
}

export default PreferencePage;