import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import useLocalStorage from "./hooks/useLocalStorage"


import IntroHomePage from './pages/IntroHomePage';
import LoginPage from './pages/LoginPage';
import HomeDashboardPage from './pages/HomeDashboardPage';
import PreferencePage from './pages/PreferencePage';
import DirectionPage from './pages/DirectionPage';
import RatingPage from './pages/RatingPage';

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

        <Route path="/" element={<IntroHomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<HomeDashboardPage/>} />
        <Route path="/preferences" element={<PreferencePage/>} />
        <Route path="/directions" element={<DirectionPage/>} />
        <Route path="/rating" element={<RatingPage/>} />
      </Routes>
    </BrowserRouter>
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
