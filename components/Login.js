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
                src="/final.webp"
                alt="Office"
                height="640px"
                width="426px"
              />

              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block "
                src="/fitness1.webp"
                alt="Office"
                height="640px"
                width="426px"
              />
            </div>
            <main className="flex items-center justify-center md:p-6 mt-2 py-6 md:mt-0 md:w-1/2">
              <div className=" text-gray-700 dark:text-gray-200 ">
                <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-3 leading-normal">
                  Welcome to Lift
                </h1>
                <h2 className="  md:text-lg text-center text-base font-medium mb-6 md:mb-12  ">
                  Train hard, track smart.
                </h2>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
