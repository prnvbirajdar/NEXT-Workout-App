import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD250hJjDTgufbmVlO3Y1w0IaMdirJlBy8",
  authDomain: "workout-app-a829e.firebaseapp.com",
  projectId: "workout-app-a829e",
  storageBucket: "workout-app-a829e.appspot.com",
  messagingSenderId: "769673552474",
  appId: "1:769673552474:web:782bee071ecfb3a8586e63",
  measurementId: "G-NP4K8MLQ4W",
};

if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  console.log("firebase apps already running...");
}

const auth = firebase.auth();
const db = firebase.firestore();

const handleGoogleLogin = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

const handleFacebookLogin = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  auth
    .signInWithPopup(facebookProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
      console.log(user.photoURL);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
};

export { auth, db, handleGoogleLogin, handleFacebookLogin };
