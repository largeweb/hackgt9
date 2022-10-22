import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import HomeMenuAdmin from "./pages/HomeMenuAdmin"
import HomeMenuUser from "./pages/HomeMenuUser"
import Footer from "./components/Footer"
import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import { db } from "./firebase"
import useLocalStorage from "use-local-storage"

function App() {

  const [isAdmin, setIsAdmin] = useState(true)
  const [userid, setUserid] = useLocalStorage([{'id':''}])

  return (
    <div class="homediv">
      <Navbar />
      <HomeMenuAdmin />
      {/* ⚠️ TRY TO ADMIN PROTECT THIS BUTTON ⚠️ */}
      {/* It makes sense to */}



      {/* <div className="switchdiv">
        {isAdmin
          ? <div>
            <p>🟢 Logged In</p>
            <p>🔑 Admin</p>
            <button className={"switchButton"} onClick={(e) => setIsAdmin(false)}>Switch to User</button>
          </div>
          : <div>
            <p>🟢 Logged In</p>
            <p>User Account</p>
            <button className={"switchButton"} onClick={(e) => setIsAdmin(true)}>Switch to Admin</button>
          </div>
        }
      </div> */}



      <div className="switchdiv">
          <p>🟢 Logged In</p>
          <p>🔑 Admin</p>
          {/* <button className={"switchButton"} onClick={(e) => setIsAdmin(false)}>Switch to User</button> */}
          <Link to={'/'}><button className={"switchButton"} /*onClick={(e) => setIsAdmin(false) }*/>Log Out</button></Link>
      </div>
      <Footer />
    </div>
  )
}



export default App