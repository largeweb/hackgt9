import React from 'react';
import {useState, useEffect} from "react"
import logo from '../logo.svg';
import '../App.css';
import {Link} from "react-router-dom";
import useLocalStorage from "react-use-localstorage"

function SecondPage() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  return (
    <div className="App">
      <div className='mainmenu'>
        <h1>⭕ SECOND PAGE 🤟 ⭕</h1>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <div>{userInput}</div>
        <Link to={'/cool-page'}><button className='menubutton' >SUPER COOL PAGE 📪</button></Link>
      </div>
    </div>
  );
}

export default SecondPage;