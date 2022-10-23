// Import the functions you need from the SDKs you need
// import dotenv from 'dotenv'
// dotenv.config()
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
