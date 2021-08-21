// import React from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase";

// // Configure Firebase.
// const firebaseConfig = {
//   apiKey: "AIzaSyCdMv7p_QoRRC3UIMVgwsNj8JENvKYo9OY",
//   authDomain: "hostel-book.firebaseapp.com",
//   projectId: "hostel-book",
//   storageBucket: "hostel-book.appspot.com",
//   messagingSenderId: "661329283031",
//   appId: "1:661329283031:web:a7bfbdd7c5282c18096d92",
//   measurementId: "G-PZN36FGRW3",
// };
// firebase.initializeApp(firebaseConfig);

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: "popup",
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: "/signedIn",
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
// };

// function SignInScreen() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

// export default SignInScreen;
