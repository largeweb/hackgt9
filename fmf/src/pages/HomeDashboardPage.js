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

// this page has two buttons but also the pull out menu 3 bars
// this page will also have the filter options
// choose now button goes to directions page
// customize button goes to preference page
// pull out menu has profile, past history, and preferences, and all the other pages
// profile will be for google after if we have time
// fliter page using hooks, a submit button
// submit will bring you to dashboard page

function HomeDashboardPage() {

  const [priceLevel, setPriceLevel] = useLocalStorage('pricelevel', '2');
  const [distance, setDistance] = useLocalStorage('distance', '10');

 return (
  <div className='homediv'>
    <Navbar />
    <div>Menu 3 Bars</div>
    <div className='menuContainer aboutdiv'>
      Find my Food
    </div>
    <Link to="/preferences"><button className='menuButton'>Choose Random</button></Link>
    <div className='menuContainer aboutdiv'>
      Price
    </div>
    {pricelevel === "1"
      ? <div>
          <div className='selectedPriceLevel'>$</div>
          <div>$$</div>
          <div>$$$</div>
        </div>
      : <div />
    }
    {pricelevel === "2"
      ? <div>
          <div>$</div>
          <div className='selectedPriceLevel'>$$</div>
          <div>$$$</div>
        </div>
      : <div />
    }
    {pricelevel === "3"
      ? <div>
          <div>$</div>
          <div>$$</div>
          <div className='selectedPriceLevel'>$$$</div>
        </div>
      : <div />
    }
    <input
            type="text"
            placeholder="Password"
            value={distance}
            className=''
            onChange={(e) => setDistance(e.target.value)} />
    <Link to="/preferences"><button className='menuButton'>Go to Preferences</button></Link>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default HomeDashboardPage;