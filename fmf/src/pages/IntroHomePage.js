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
// import { signInWithGoogle } from "../firebase";
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";


const provider = new GoogleAuthProvider();

// this page has continue with facebook/google OR continue as guest
// continue as guest will link straight to dashboard page
// continue with facebook/google will link to login page

function IntroHomePage() {

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

  // signInWithRedirect(auth, provider);

 return (
  <div className='mainTitleMenu'>
    <div className='centeronly' style={{marginBottom:"10%"}}>
      <h1 className='bigTitleText centeronly' style={{marginTop:"5%", marginBottom:"0"}}>FIND</h1>
      <h2 className='smallTitleText centeronly' style={{marginBottom: "0", marginTop:"0"}}>my</h2>
      <h3 className='bigTitleText centeronly' style={{marginTop:"0"}}>FOOD</h3>
    </div>
    {/* This is the Intro Home Page */}
    <div className='centeronly' style={{marginBottom:"2%", color:"orange"}}>Search Now!</div>
    <Link to="/login"><button className='button-google' style={{backgroundcolor:"#4267B2"}} onClick={{}}>Continue with Facebook</button></Link>
    <br></br>
    <button className='button-google' onClick={signInWithRedirect(auth, provider)}>Continue with Google</button>
    <br></br>
    <Link to="/dashboard"><button className='smallLinkButton astext'><u>Continue as Guest</u></button></Link>
    <div style={{marginBottom:"200px"}}></div>

    {/* <hr></hr>
    <hr></hr>
    <hr></hr>
    <p>Dev Stuff</p>
    <hr></hr>
    <hr></hr>
    <hr></hr>
	  <Link to="/login"><button className='menuButton'>Login Page /login</button></Link>
	  <Link to="/dashboard"><button className='menuButton'>Home Dashboard /dashboard</button></Link>
	  <Link to="/preferences"><button className='menuButton'>Preference Page /preferences</button></Link>
	  <Link to="/directions"><button className='menuButton'>Direction Page /directions</button></Link>
	  <Link to="/review"><button className='menuButton'>Review Page /review</button></Link> */}
    <Footer />
  </div>
 )
}

export default IntroHomePage;