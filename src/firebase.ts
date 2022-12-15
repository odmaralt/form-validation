// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app";
// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJgswVoMnSM9R8U8g2imneNdsFPTxt_c",
  authDomain: "reactproject-one.firebaseapp.com",
  projectId: "reactproject-one",
  storageBucket: "reactproject-one.appspot.com",
  messagingSenderId: "76508889469",
  appId: "1:76508889469:web:da410762d419fe503b0c14",
  measurementId: "G-GTWGJJZKFT",
};
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase

export const db = app.firestore();
export const auth = app.auth();
