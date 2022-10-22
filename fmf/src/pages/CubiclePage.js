import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react"
import { collection , onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { db } from "../firebase"
import Seat from "../components/Seat"
import DoubleSeat from "../components/DoubleSeat"
import floorPicture from "../images/floorPicture.png"

function CubiclePage() {

	const [seats, setSeats] = useState([''])
	const [doubleseats, setDoubleseats] = useState([''])
	const [input, setInput] = useState('')
	const [campus, setCampus] = useState('')
	const [building, setBuilding] = useState('')
	const [floor, setFloor] = useState('')
	const [count, setCount] = useState(0)

  useEffect(() => {
    onSnapshot(collection(db,'seats'),(snapshot)=>{
      setSeats(snapshot.docs.map(doc => doc.data()))
    })
    onSnapshot(collection(db,'doubleseats'),(snapshot)=>{
      setDoubleseats(snapshot.docs.map(doc => doc.data()))
    })
  },[input]);
  const addSeat=(e)=>{
	console.log("Adding seat")
	console.log(input)
    e.preventDefault();
	addDoc(collection(db,'seats'),{
	   seat:input,
	   timestamp: serverTimestamp()
	})
    // setSeats([...seats,input]);
    setInput('')
	console.log(input)
  };
  const addDouble=(e)=>{
	console.log("Adding double seat")
	console.log(input)
    e.preventDefault();
	addDoc(collection(db,'doubleseats'),{
	   id:count,
	   timestamp: serverTimestamp()
	})
	setCount(count+=1)
    // setSeats([...seats,input]);
    setInput('')
	console.log(input)
  };





 return (
  <div className='homediv'>
      <Navbar />
	  <p>Information about the Cubicle Page</p>
	  <Link to="/app"><button className='menuButton'>Go Back Home</button></Link>
	  <div className='infonotice'>This page is not fully developed, but illustrates our concept for Employee Cubicle Selection</div>
	  <div className='loginnotice'>Go to the Cubicle Manager (Login as Admin) to manage the floor assignments</div>
	  <br></br>
	  <div>Choose a Campus</div>
	  <button disabled>Bangalore</button>
	  {/* <p>{campus}</p> */}
	  {/* <button onClick={setCampus}>Campus 1</button> */}
	  <div>Choose a Building</div>
	  <button disabled>Infosys AHD Building</button>
	  {/* <p>{building}</p> */}
	  <div>Choose a Floor</div>
	  <button disabled>Floor 00</button>
	  <br></br>
	  <img src={floorPicture}></img>
	  <br></br>
	  {/* <p>{floor}</p> */}


	{/* <button variant="contained" className='menuButton' onClick={addSeat}>Add Single Seat</button>
	<button variant="contained" className='menuButton' onClick={addDouble}>Add Double Seat</button> */}
		<ul style={{display:"inline"}}>
		{seats.map(({seat})=> <Seat style={{display:"inline"}}/*seat={seat}*/key={"single"} className='menuButton' />)}
		</ul>
		<ul style={{display:"inline"}}>
		{doubleseats.map(({doubleseat})=> <DoubleSeat style={{display:"inline"}}/*seat={seat}*/className='menuButton' />)}
		</ul>


	  {/* PUT SEVERAL BUTTONS HERE, ONE FOR EACH CAMPUS */}
	  {/* PUT AN IMAGE HERE, GIVE IT A CLASS, SET DISPLAY TO NONE */}
	  {/* BUTTON ONCLICKS WILL SET THE SRC OF THE IMAGE TO BIRDS EYE VIEW & DISPLAY NEXT SET */}
	  {/* IE DISPLAY BUTTONS FOR EACH BUILDING */}
	  {/* ONCLICK OF BUILDING BUTTON, FLOOR DROPDOWN / BUTTONS APPEAR */}
	  {/* ONCLICK OF BUTTON BRINGS YOU TO FLOOR PLAN PAGE, SEPARATE PAGE */}


{/* THE SEPARATE PAGE, CALL IT FLOOR PLAN SELECT */}
{/* DISPLAY THE FLOOR PLAN IF AVAILABLE */}
{/* DISPLAY FOR USER ALL THE SINGLES OR DOUBLES IN THE FLOOR */}
{/* SINGLES AND DOUBLES ARE THEIR OWN COMPONENTS */}
{/* DOUBLES HAVE THE FUNCTIONALITY THAT ONLY ONE MAX CAN BE GREEN */}
{/* THEY ALL APPEAR ON THE SCREEN AS COMPONENTS, THE ADMIN SEES REMOVABLE */}
{/* THE ADMIN WILL SEE WHETHER THEY CAN BE REMOVED OR NOT (THRU PROPS) */}

      <Footer />
  </div>
 )
}

export default CubiclePage;
