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
      <div className='midTitleText centeronly' style={{marginBottom:"100px"}}>Sign-in</div>
      <input
              type="text"
              placeholder="Username"
              value={username}
              className='loginInput'
              onChange={(e) => setUsername(e.target.value)} />
      <input
              type="text"
              placeholder="Password"
              value={password}
              className='loginInput'
              onChange={(e) => setPassword(e.target.value)} />
      <Link to="/dashboard"><button className='button-google centeronly' style={{marginBottom:"3%"}}>Login</button></Link>
      <brk></brk>
      <Link to="/" ><button className='button-google centeronly'>Back</button></Link>
    <Footer style={{bottom:"0"}}/>
  </div>
 )
}

export default LoginPage;