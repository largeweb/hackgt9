import { Button } from 'bootstrap';
import React, {useEffect} from 'react';
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

  useEffect(() => {
    console.log("locationDict for price level 2, distance of 10000, chinese")
    getLocation(2,1500,"chinese")
    console.log("set location dict")
    // setTimeout(console.log(locationDict.name), 2000);
  });

  var locationDict;

  function refreshPage() {
    window.location.reload(false);
  }

  const getLocation = async (maxPrice, radius, keyWord) => {
      try {
        console.log("RUNNING FETCH");
        const response = await fetch('http://findmyfood.xyz:3000/getnearby/2/1500/chinese' {
          method: 'GET'
          // mode: 'cors',
        });
        console.log("FINISHED FETCH, AWAITING RESPONSE");
        const data = await response.json();
        console.log("FINISHED AWAITING");
        console.log(data);
        // locationDict = data.results[0];
        // setRestaurantChoice(locationDict.name)
        // console.log(locationDict.name)
        // console.log(restaurantChoice)
        // return data;
      } catch (err) {
        console.log("error");
        console.log(err);
      }
      console.log("outside try catch")
    }

  // const fetchLocations = async (latitude, longitude, openNow, type, accessKey, minPrice, maxPrice, radius, keyWord) => {
  //   const expressApi = 'localhost:3000/getnearby/2/1500/chinese';
  //     console.log("about to run response fetch with expressapi as " + expressApi)
  //   const response = await fetch(expressApi).then((response) => response.json()).then((data) => console.log(data));
  //     console.log("about to set data")
  //   const data = await response.json();
  //     console.log("about to return await results")
  //   return data;
  //   // return data.results;
  // }

  // const fetchLocationsOld = async (latitude, longitude, openNow, type, accessKey, minPrice, maxPrice, radius, keyWord) => {
  //   const apiString = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+'%2C'+longitude+'&opennow='+openNow+'&type='+type+'&key='+accessKey+'&minprice='+minPrice+'&maxprice='+maxPrice+'&radius='+radius+'&keyword='+keyWord;
  //   const apiString2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAV5PUv0wTnh1gla6gpr_9KmqR2ug_B2Ag';
  //     console.log("about to run response fetch with apistring2")
  //   const response = await fetch(apiString2, {
  //     method: 'GET'
  //     // headers: {'Content-Type': 'application/json'}
  //   });
  //     console.log("about to set data")
  //   const data = await response.json();
  //     console.log("about to return await results")
  //   return data.results;
  // }

  // const getLocationOld = async (maxPrice, radius, keyWord) => {
  //   if ("geolocation" in navigator) {
  //     console.log("inside if")
  //     console.log(maxPrice)
  //     console.log(radius)
  //     console.log(keyWord)
  //     try {
  //         console.log("beggining of function, setting vars")
  //         const latitude = 33.785061
  //         const longitude = -84.379936
  //         console.log("running fetch locations")
  //         const locations = await fetchLocations(latitude, longitude, true, 'restaurant', 'AIzaSyAV5PUv0wTnh1gla6gpr_9KmqR2ug_B2Ag', 0, maxPrice, radius, keyWord);
  //         console.log("setting index to location length floor")
  //         const index = Math.floor(Math.random() * await locations.length);
  //         console.log("setting loc to await locations at index")
  //         const loc = await locations[index];
  //         console.log("setting location dict")
  //         locationDict = {'name': loc.name, 'address': loc.vicinity, 'rating': loc.rating, 'total ratings': loc.user_ratings_total, 'price level': loc.price_level, 'latitude': loc.geometry.location.lat, 'longitude': loc.geometry.location.lng, 'photos': loc.photos}
  //         console.log("print location dict")
  //         console.log(locationDict);
  //       // navigator.geolocation.getCurrentPosition(async function() {
  //       // });
  //     } catch (err) {
  //       console.log("error");
  //       console.log(err);
  //     }
  //   }
  // }
    // else {
    //   console.log("Find My Food cannot access your location's coordinates from your browser. Please enable location sharing or try using a different browser.");
    // }

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
	  <Link to="/directions"><button className='menuButton centeronly' onClick={refreshPage}>Try Another Option?</button></Link>
    <br></br>
	  <Link to="/rating"><button className='menuButton'>Finished</button></Link>
	  <Link to="/preferences"><button className='menuButton'>Back</button></Link>
    <Footer />
  </div>
 )
}

export default DirectionPage;