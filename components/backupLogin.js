import Link from "next/link";
import { useState, useEffect } from "react";
import { auth, handleGoogleLogin } from "../components/data/firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//import ImageLight from '../assets/img/login-office.jpeg'
//import ImageDark from '../assets/img/login-office-dark.jpeg'
import { Label, Input, Button } from "@windmill/react-ui";
import { Facebook, Google } from "../components/Icons/Icons";

export default function Home() {
  //const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // const handleFacebookLogin = () => {
  //   const facebookProvider = new firebase.auth.FacebookAuthProvider();

  //   auth
  //     .signInWithPopup(facebookProvider)
  //     .then((result) => {
  //       /** @type {firebase.auth.OAuthCredential} */
  //       var credential = result.credential;

  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log(user);

  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       var accessToken = credential.accessToken;

  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;

  //       // ...
  //     });
  // };

  // useEffect(() => {
  //   auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log("user", user);
  //     } else {
  //       // No user is signed in.
  //       console.log("not signed in");
  //     }
  //   });
  // }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );

  // return isLoggedIn ? (
  //   <div>not signed in</div>
  // ) : (
  //   <main>
  //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
  //         <div className="flex flex-col overflow-y-auto md:flex-row">
  //           <div className="h-32 md:h-auto md:w-1/2">
  //             <img
  //               aria-hidden="true"
  //               className="object-cover w-full h-full dark:hidden"
  //               //src={ImageLight}
  //               alt="Office"
  //             />
  //             <img
  //               aria-hidden="true"
  //               className="hidden object-cover w-full h-full dark:block"
  //               //src={ImageDark}
  //               alt="Office"
  //             />
  //           </div>
  //           <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
  //             <div className="w-full">
  //               <Button block layout="outline" onClick={handleGoogleLogin}>
  //                 <div className="mr-2">
  //                   <Google />{" "}
  //                 </div>
  //                 Sign in with Google
  //               </Button>
  //               <Button
  //                 className="mt-4"
  //                 block
  //                 layout="outline"
  //                 onClick={handleFacebookLogin}
  //               >
  //                 <div className="mr-2">
  //                   <Facebook />
  //                 </div>
  //                 Sign in with Facebook
  //               </Button>
  //             </div>
  //           </main>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}
