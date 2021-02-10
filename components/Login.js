import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, uiConfig } from "../components/data/firebase";

const Login = () => {
  return (
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
};

export default Login;
