// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPW9GG7CRLzH9Ybzz7PEXyC0hBKhqVwmQ",
  authDomain: "bizhacks-2022.firebaseapp.com",
  projectId: "bizhacks-2022",
  storageBucket: "bizhacks-2022.appspot.com",
  messagingSenderId: "160379575061",
  appId: "1:160379575061:web:86bca395476efcdcc6e71c"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }