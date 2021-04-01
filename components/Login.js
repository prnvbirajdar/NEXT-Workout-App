import { Button } from "@windmill/react-ui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, uiConfig } from "../components/data/firebase";

const Login = () => {
  return (
    <main>
      <div className="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
        <div className="flex-0 h-full max-w-4xl mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-xl dark:bg-black">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-48 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src="/whitepng.png"
                alt="Office"
                height="640px"
                width="426px"
              />

              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block "
                src="/darkpng.png"
                alt="Office"
                height="640px"
                width="426px"
              />
            </div>
            <main className="flex items-center justify-center md:p-6 mt-2 py-6 md:mt-0 md:w-1/2">
              <div className=" text-gray-700 dark:text-gray-200  ">
                <h1 className="px-0 sm:px-4 md:px-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-2 md:mb-3 tracking-tighter md:leading-3 ">
                  Welcome to Lift
                </h1>

                <h2 className="  md:text-lg text-center text-base font-medium mb-6 md:mb-12 leading-3  lg:leading-3 ">
                  Train hard, track smart.
                </h2>
                <div>
                  {/*  <button
                    onClick={() => auth.signInAnonymously()}
                    className="flex space-x-4 items-center mx-auto py-2.5 pl-4 lg:pr-14 pr-10 sm:pr-14 md:pr-10 lg:ml-14 shadow-lg bg-indigo-700 text-white rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm font-medium"> Sign in as Guest</p>
               </button>*/}
                  <button
                    onClick={() => auth.signInAnonymously()}
                    className="flex space-x-3 items-center mx-auto py-2.5 pl-3.5 lg:pr-12 pr-7 sm:pr-12 md:pr-7 lg:ml-14 shadow-lg bg-indigo-700 text-white rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm font-semibold"> Continue as Guest</p>
                  </button>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
