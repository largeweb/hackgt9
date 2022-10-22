import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AppAdmin from './AppAdmin';
import Login from './Login';
import CubiclePage from './pages/CubiclePage';
import CubicleManager from './pages/CubicleManager';
import ChildCarePage from './pages/ChildCarePage';
import ChildCareManagerPage from './pages/ChildCareManagerPage';
import SocialHolidaysPage from './pages/SocialHolidaysPage';
import SocialHolidaysManagerPage from './pages/SocialHolidaysManagerPage';
import RDPRequestPage from './pages/RDPRequestPage';
import RDPManagerPage from './pages/RDPManagerPage';
import AboutPage from './pages/AboutPage';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import useLocalStorage from "./hooks/useLocalStorage"

const root = ReactDOM.createRoot(document.getElementById('root'));

// const [userid, setUserid] = useLocalStorage({id:''})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* USE HOOKS TO DETERMINE WHERE / ROUTES TO */}

        {/* {userId=='0'
          : <Route path="/" element={<Login/>} />
          ? <Route path="/" element={<Login/>} />
        } */}

        <Route path="/" element={<Login/>} />
        <Route path="/app" element={<App/>} />
        <Route path="/appadmin" element={<AppAdmin/>} />
        <Route path="/cubicle" element={<CubiclePage/>} />
        <Route path="/cubiclemanager" element={<CubicleManager/>} />
        <Route path="/childcare" element={<ChildCarePage />} />
        <Route path="/childcaremanager" element={<ChildCareManagerPage />} />
        <Route path="/social" element={<SocialHolidaysPage />} />
        <Route path="/socialmanager" element={<SocialHolidaysManagerPage />} />
        <Route path="/rdp" element={<RDPRequestPage />} />
        <Route path="/rdpmanager" element={<RDPManagerPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
