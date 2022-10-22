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

// this page has two buttons but also the pull out menu 3 bars
// this page will also have the filter options
// choose now button goes to directions page
// customize button goes to preference page
// pull out menu has profile, past history, and preferences, and all the other pages
// profile will be for google after if we have time
// fliter page using hooks, a submit button
// submit will bring you to dashboard page

function HomeDashboardPage() {

  const [pricelevel, setPriceLevel] = useLocalStorage('pricelevel', '2');
  const [distance, setDistance] = useLocalStorage('distance', '10');

 return (
  <div className='homediv'>
    <Navbar />
    {/* <div>Menu 3 Bars</div> */}
    {/* <div className='menuContainer aboutdiv'>
      Find my Food
    </div> */}
    <Link to="/preferences"><button className='randomChooseButton'>Choose Random</button></Link>
    <div className='menuContainer aboutdiv'>
      <div>Price</div>
      {pricelevel === "1"
        ? <div>
            <div className='selectedPriceLevel'>$</div>
            <div onClick={(e) => setPriceLevel('2')}>$$</div>
            <div onClick={(e) => setPriceLevel('3')}>$$$</div>
          </div>
        : <div />
      }
      {pricelevel === "2"
        ? <div>
            <div onClick={(e) => setPriceLevel('1')}>$</div>
            <div className='selectedPriceLevel'>$$</div>
            <div onClick={(e) => setPriceLevel('3')}>$$$</div>
          </div>
        : <div />
      }
      {pricelevel === "3"
        ? <div>
            <div onClick={(e) => setPriceLevel('1')}>$</div>
            <div onClick={(e) => setPriceLevel('2')}>$$</div>
            <div className='selectedPriceLevel'>$$$</div>
          </div>
        : <div />
      }
    </div>
    <div className='menuContainer aboutdiv' style={{marginBottom:"10px"}}>
      <div>Distance</div>
      <input
              type="text"
              placeholder="Distance (miles)"
              value={distance}
              className='centeronly'
              onChange={(e) => setDistance(e.target.value)} />
    </div>
    <Link to="/preferences"><button className='menuButton centeronly'>Continue</button></Link>
    <br></br>
	  <Link to="/"><button className='menuButton centeronly'>Log Out</button></Link>
    <Footer />
  </div>
 )
}

export default HomeDashboardPage;