import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import { db } from "./firebase"
import useLocalStorage from "use-local-storage"

function Login() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(false)
  const [input, setInput] = useState(false)
  const [userid, setUserid] = useLocalStorage([{'id':input}])

  useEffect(() => {

  },[user]);

  useEffect(() => {

  },[userid]);

  return (
    <div class="homediv">
      <Navbar />
      {/* {isAdmin
        ? <HomeMenuAdmin />
        : <HomeMenuUser />
      } */}
      {/* ⚠️ TRY TO ADMIN PROTECT THIS BUTTON ⚠️ */}
      {/* It makes sense to */}
      <div className="switchdiv">
          <div>
            <span className='biggerfont'>🔴 Logged Out</span>
            <br></br>
            <span className='biggerfont centeronly'>Log in:</span>
            <input className='inputfield' onChange={(e) => setInput(e.target.value)} type="text" placeholder='infosys ID'></input>
            {input==='0'
              ? <Link to={'/appadmin'}><button className={"switchButton loginbutton"} onClick={(e) => setUser(e.target.value)}>Login as ID 0 (admin 🔑)</button></Link>
              : <Link to={'/app'}><button className={"switchButton loginbutton"} onClick={(e) => setUser(e.target.value)}>Login as ID #{input}</button></Link>
            }
            <span className='loginnotice'>Use id of 0 to login to Admin</span>
            <br></br>
            <span className='loginnotice'>Leave blank and login as User<br></br></span>
            <span className='infonotice'>❕This app is not connected to a real user database, user functionality is the same amongst each user. <br></br>❕There is a firestore database setup for the instance of this app hosted on bizhacks.site. This database is for a couple functionalities within the app<br></br></span>
            <span className='infonotice'>❕View the live version of this site at: <br></br><a href="http://bizhacks.site">http://bizhacks.site/</a></span>
            {/* <Link to={input}><button className={"switchButton"} onClick={(e) => setUser(e.target.value)}>Login to ID #{input}</button></Link> */}
          </div>
          {/* <div>
            <p>🟢 Logged In</p>
            <button className={"switchButton"} onClick={(e) => setIsAdmin(true)}>Switch to Admin</button>
          </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Login;
