import React from "react";
import {useState, useEffect} from "react"
import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../App.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [open, setopen] = useState(false)

  const toggleOpen = () => {
    setopen(!open)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navcolor">
      <a className="navbar-brand navbarLabel" href="/">
        Find My Food
      </a>
      {open
        ? <div>
            <div className='navmenu'>
              <button className='navMenuButton' onClick={toggleOpen}>
                {open?<KeyboardDoubleArrowLeftIcon />:KeyboardDoubleArrowRightIcon}
              </button>
              {navData.map(item =>{
                return <NavLink key={item.id} className='navItem' to={item.link}>
                  {item.icon}
                  <span className='linkText'>{item.text}</span>
                </NavLink>
              })}
            </div>
          </div>
        : <div>
          <div>
            <div className='navmenuClosed'>
              <button className='navMenuButton' onClick={toggleOpen}>
                {KeyboardDoubleArrowRightIcon}
              </button>
              {navData.map(item =>{
                return <NavLink key={item.id} className='navItem' to={item.link}>
                  {item.icon}
                  <span className='linkTextClosed'>{item.text}</span>
                </NavLink>
              })}
            </div>
          </div>
        </div>
      }

      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;