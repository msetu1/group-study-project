// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbMwRryjiarQJP7FjZcx3AjUX3A_eKg2o",
  authDomain: "group-study-client-side.firebaseapp.com",
  projectId: "group-study-client-side",
  storageBucket: "group-study-client-side.appspot.com",
  messagingSenderId: "887236896311",
  appId: "1:887236896311:web:b34bb39a50ed9f32b6c1b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app