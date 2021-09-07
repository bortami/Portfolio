import React from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKHiwT_3-jk12CJyL0oP9Zn5VMS1qq6zc",
  authDomain: "portfolio-812b3.firebaseapp.com",
  projectId: "portfolio-812b3",
  storageBucket: "portfolio-812b3.appspot.com",
  messagingSenderId: "564397408782",
  appId: "1:564397408782:web:9691ea68ec32f33499b25f",
  measurementId: "G-ERK29BDNX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes />
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color="237, 51, 185"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
      />
    </>
  );
};

export default App;
