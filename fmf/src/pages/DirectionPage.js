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
  const [atag, setAtag] = useLocalStorage('atag','')

  const index = Math.floor(Math.random()*15)

  useEffect(() => {
    console.log("locationDict for price level 2, distance of 10000, chinese")
    getLocation(3,2000,"indian")
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
        const fetchUrl = 'http://findmyfood.xyz:3000/getnearby/' + maxPrice + '/' + radius + '/' + keyWord;
        const response = await fetch(fetchUrl, {
          method: 'GET',
          mode: 'cors'
        });
        console.log("TRYING TO GET LATITUDE");
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude + "%2C" + position.coords.longitude);
          });
        } else {
          console.log("NOT EXISTING GEOLOCATION STUFF")
        }
        console.log("FINISHED FETCH, AWAITING RESPONSE");
        const data = await response.json();
        console.log("FINISHED AWAITING");
        console.log(data);
        console.log(index)
        const restaurantName = data.results[index].name;
        const restaurantPriceLevel = data.results[index].price_level;
        const restaurantRating = data.results[index].rating;
        console.log("restaurant name: " + restaurantName);
        console.log("restaurant price level: " + restaurantPriceLevel);
        console.log("restaurant rating: " + restaurantRating);
        const atagret = (data.results[index].photos[0]["html_attributions"][0]);
        setAtag("<div className=\"midTitleText centeronly\">" + atagret + "</div>");
        setRestaurantChoice(restaurantName);
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
  <div className='homediv mainTitleMenu'>
    <navbar />
    <div className="centeronly">
      <img src='https://owi.ucdavis.edu/sites/g/files/dgvnsk8926/files/styles/sf_landscape_16x9/public/media/images/google-maps-satellite.png?h=83823e20&itok=G9S9rzyI' alt='google map' />
    </div>
    <h1 className="midTitleSize">
      {restaurantChoice}
    </h1>
    <div className='menuContainer aboutdiv'>
      <span>Start Your Journey</span>
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: atag }} />
    </div>
	  <Link to="/directions"><button className='button-google centeronly' onClick={refreshPage}>Try Another Option?</button></Link>
    <br></br>
	  <Link to="/rating"><button className='button-google'>Finished</button></Link>
    <br></br>
	  <Link to="/preferences"><button className='button-google'>Back</button></Link>
    <Footer />
  </div>
 )
}

export default DirectionPage;