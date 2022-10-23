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
import { BadgeMark } from '@mui/material';

// login page is just user pass fields and a button that brings to dashboard page

function LoginPage() {

  const [username, setUsername] = useLocalStorage('localusername', 'username');
  const [password, setPassword] = useLocalStorage('localpassword', 'password');

 return (
  <div className='mainTitleMenu'>
    <Navbar />
      <div className='bigTitleText centeronly' style={{marginBottom:"100px"}}>Please Login</div>
      <input
              type="text"
              placeholder="Username"
              value={username}
              className='loginInput'
              width="200px"
              onChange={(e) => setUsername(e.target.value)} />
      <input
              type="text"
              placeholder="Password"
              value={password}
              className='loginInput'
              width="200px"
              onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <Link to="/dashboard"><button className='button-google centeronly'>Login</button></Link>
      <brk></brk>
      <Link to="/"><button className='button-google centeronly'>Back</button></Link>

    <Footer />
  </div>
 )
}

export default LoginPage;