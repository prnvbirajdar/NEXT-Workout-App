import { useAuth } from "../components/data/authProvider";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export default function Home() {
  const { user, loading } = useAuth();

  console.log(user);

  if (loading) return null;

  return user ? <Dashboard /> : <Login />;
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
