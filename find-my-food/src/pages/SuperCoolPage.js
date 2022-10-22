import React from 'react';
import {useState, useEffect} from "react"
import logo from '../logo.svg';
import '../App.css';
import {Link} from "react-router-dom";
import useLocalStorage from "react-use-localstorage"

function SuperCoolPage() {

//   const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  return (
    <div className="App">
      <div className='mainmenu'>
        <h1>⭕ SUPER COOL PAGE 🤟 ⭕</h1>
        <Link to={'/'}><button className='menubutton' >Back To App (/)</button></Link>
        {/* <div>{userInput}</div> */}
        <Link to={'/page2'}><button className='menubutton' >page 2 ?</button></Link>
      </div>
    </div>
  );
}

export default SuperCoolPage;