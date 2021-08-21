// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCdMv7p_QoRRC3UIMVgwsNj8JENvKYo9OY",
  authDomain: "hostel-book.firebaseapp.com",
  projectId: "hostel-book",
  storageBucket: "hostel-book.appspot.com",
  messagingSenderId: "661329283031",
  appId: "1:661329283031:web:a7bfbdd7c5282c18096d92",
  measurementId: "G-PZN36FGRW3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
