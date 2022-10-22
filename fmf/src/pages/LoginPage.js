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
import useLocalStorage from "react-use-localstorage"

// login page is just user pass fields and a button that brings to dashboard page

function LoginPage() {

  const [username, setUsername] = useLocalStorage('localusername', 'username');
  const [password, setPassword] = useLocalStorage('localpassword', 'password');

 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      This is the Login Page
    </div>

    <input
            type="text"
            placeholder="Username"
            value={username}
            className=''
            onChange={(e) => setUsername(e.target.value)} />
    <input
            type="text"
            placeholder="Password"
            value={password}
            className=''
            onChange={(e) => setPassword(e.target.value)} />
	  <Link to="/dashboard"><button className='menuButton'>Login</button></Link>

    <div>
      <p>{username}</p>
    </div>

    <hr></hr>
    <hr></hr>
    <hr></hr>
    <p>Dev Stuff</p>
    <hr></hr>
    <hr></hr>
    <hr></hr>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default LoginPage;