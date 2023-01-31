// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU4XqyRt5kW54Wc-VWd7RgISpB19VA5mU",
  authDomain: "gettingstarted-48ad9.firebaseapp.com",
  projectId: "gettingstarted-48ad9",
  storageBucket: "gettingstarted-48ad9.appspot.com",
  messagingSenderId: "102531338176",
  appId: "1:102531338176:web:98e18247c65a674f334225",
  measurementId: "G-FMMVQWSW0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app)