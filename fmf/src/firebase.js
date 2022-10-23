// Import the functions you need from the SDKs you need
// import dotenv from 'dotenv'
// dotenv.config()
// import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";

import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqt-doLLBO4oL4LLGGVNO8CM6ZiGfSlvY",
  authDomain: "hackgt9-fmf.firebaseapp.com",
  projectId: "hackgt9-fmf",
  storageBucket: "hackgt9-fmf.appspot.com",
  messagingSenderId: "894823869284",
  appId: "1:894823869284:web:effd6f5b868773dbaba871",
  measurementId: "G-KSBB0YHWTQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = 'it';

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// const analytics = getAnalytics(app);

// export const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider()
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(googleProvider).then((res) => {
//     console.log(res.user)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }