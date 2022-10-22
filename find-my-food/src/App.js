import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React FUCKER 🥲
        </a>
        <Link to={'/page2'}><button className='menubutton' >/page2 goes to second page</button></Link>
        <Link to={'/cool-page'}><button className='menubutton' >/cool-page goes to super cool page</button></Link>
      </header>
    </div>
  );
}

export default App;
