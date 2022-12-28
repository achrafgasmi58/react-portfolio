// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPq2b00FAfJPSwOPlujYS_EF8_fqveLZ8",
  authDomain: "react-portfolio-ec8a1.firebaseapp.com",
  projectId: "react-portfolio-ec8a1",
  storageBucket: "react-portfolio-ec8a1.appspot.com",
  messagingSenderId: "855277184770",
  appId: "1:855277184770:web:162b557475d8bfb21bc41b",
  measurementId: "G-K8PZ1G0GF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);