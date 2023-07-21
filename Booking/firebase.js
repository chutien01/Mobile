// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsv5iFGCCeNwB_QLuwxVoiBWmlUAqJic",
  authDomain: "booking-project-5abc0.firebaseapp.com",
  projectId: "booking-project-5abc0",
  storageBucket: "booking-project-5abc0.appspot.com",
  messagingSenderId: "551913481258",
  appId: "1:551913481258:web:d82f9ac2548b7099f64f53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};