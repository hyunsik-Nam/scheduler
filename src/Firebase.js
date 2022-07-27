// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7FWrF6VJRCHikOvo7skemDxZxthXZ3hg",
  authDomain: "scheduler-aaa13.firebaseapp.com",
  databaseURL: "https://scheduler-aaa13-default-rtdb.firebaseio.com",
  projectId: "scheduler-aaa13",
  storageBucket: "scheduler-aaa13.appspot.com",
  messagingSenderId: "949677674499",
  appId: "1:949677674499:web:4e1d62c27281acab52be36",
  measurementId: "G-6R56QKLBFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};