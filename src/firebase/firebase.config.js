// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB92XOpCCol4Fwi0rSksGkuyTtCj_H0Wsc",
  authDomain: "cars-doctor-b8b65.firebaseapp.com",
  projectId: "cars-doctor-b8b65",
  storageBucket: "cars-doctor-b8b65.appspot.com",
  messagingSenderId: "43127782708",
  appId: "1:43127782708:web:b52f7897bab91db3e33961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;