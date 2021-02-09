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

export { auth, db };
