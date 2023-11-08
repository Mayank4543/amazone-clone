// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDlJWG4_JJleBWhqRXRmt6KH5GgELXCG3c",
  authDomain: "clone-8c606.firebaseapp.com",
  projectId: "clone-8c606",
  storageBucket: "clone-8c606.appspot.com",
  messagingSenderId: "725860854514",
  appId: "1:725860854514:web:df8853ff78b7af91f03e6b",
  measurementId: "G-7WJRMR40SN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
