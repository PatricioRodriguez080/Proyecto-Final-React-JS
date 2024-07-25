import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1RREqOoHHv_L7sgv9faxuR6zuWf349k",
  authDomain: "cusrsoreactjs.firebaseapp.com",
  projectId: "cusrsoreactjs",
  storageBucket: "cusrsoreactjs.appspot.com",
  messagingSenderId: "180993639399",
  appId: "1:180993639399:web:724082dbf9953e761cb342"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
