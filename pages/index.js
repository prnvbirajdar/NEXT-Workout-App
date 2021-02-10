import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useState, useEffect } from "react";
import { auth, uiConfig } from "../components/data/firebase";
import { useAuth } from "../components/data/authProvider";
import Dashboard from "../components/Dashboard";

export default function Home() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [user, setuser] = useState(null);

  // useEffect(() => {
  //   const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
  //     setIsLoggedIn(!!user);
  //     const { displayName, email } = user;
  //     setuser({
  //       displayName,
  //       email,
  //     });
  //   });

  //   return () => unregisterAuthObserver();
  // }, []);

  const { user, loading, logout } = useAuth();

  console.log(user);

  if (loading) return null;
  // if (!user)
  //   return (
  //     <main>
  //       <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  //         <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
  //           <div className="flex flex-col overflow-y-auto md:flex-row">
  //             <div className="h-32 md:h-auto md:w-1/2">
  //               <img
  //                 aria-hidden="true"
  //                 className="object-cover w-full h-full dark:hidden"
  //                 //src={ImageLight}
  //                 alt="Office"
  //               />
  //               <img
  //                 aria-hidden="true"
  //                 className="hidden object-cover w-full h-full dark:block"
  //                 //src={ImageDark}
  //                 alt="Office"
  //               />
  //             </div>

  //             <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
  //               <div className="flex flex-col items-center">
  //                 <h1 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
  //                   Login
  //                 </h1>
  //                 <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  //               </div>
  //             </main>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   );

  return user ? (
    <Dashboard />
  ) : (
    <main>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                //src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                //src={ImageDark}
                alt="Office"
              />
            </div>

            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="flex flex-col items-center">
                <h1 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}

//import Link from "next/link";
//import ImageLight from '../assets/img/login-office.jpeg'
//import ImageDark from '../assets/img/login-office-dark.jpeg'
//import { Label, Input, Button } from "@windmill/react-ui";
//import { Facebook, Google } from "../components/Icons/Icons";

// useEffect(() => {
//   auth.onAuthStateChanged( (user)=> {
//     if (user) {
//       // User is signed in.
//       console.log("user", user.photoURL);
//       setIsLoggedIn(true);
//       router.push("/home");
//     } else {
//       // No user is signed in.
//       console.log("not signed in");
//     }
//   });
// }, []);

// <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
//                   Login
//                 </h1>
//                 <Label>
//                   <span>Email</span>
//                   <Input
//                     className="mt-1"
//                     type="email"
//                     placeholder="john@doe.com"
//                   />
//                 </Label>

//                 <Label className="mt-4">
//                   <span>Password</span>
//                   <Input
//                     className="mt-1"
//                     type="password"
//                     placeholder="***************"
//                   />
//                 </Label>

//                 <Button block className="mt-4">
//                   <Link href="/home">
//                     <a>Log in</a>
//                   </Link>
//                 </Button>

//                 <hr className="my-8" />

// <div className="w-full">
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
// </div>

// <p className="mt-4">
// <Link href="/ForgotPassword">
//   <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
//     Forgot your password?
//   </a>
// </Link>
// </p>
// <p className="mt-1">
// <Link href="/CreateAccount">
//   <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
//     Create account
//   </a>
// </Link>
// </p>
