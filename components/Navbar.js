import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import { Button, WindmillContext } from "@windmill/react-ui";
import { auth } from "./data/firebase";
import { useRouter } from "next/router";
import { useAuth } from "./data/authProvider";

const Nav = () => {
  //const [isOpen, setisOpen] = useState(false); //hamburger toggle
  const [current, setCurrent] = useState("first"); //highlight nav options on large screens
  const [profileOpen, setProfileOpen] = useState(false); //profile toggle

  const { mode, toggleMode } = useContext(WindmillContext); //dark mode

  const wrapperRef = useRef(null);

  const router = useRouter();

  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <nav className=" bg-white shadow-bottom dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>

            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  onClick={() => setCurrent("first")}
                  href="#"
                  className={`${
                    current === "first"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Dashboard
                </a>

                <a
                  onClick={() => setCurrent("second")}
                  href="#"
                  className={`${
                    current === "second"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Calender
                </a>
              </div>
            </div>
          </div>
          <div className=" md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button onClick={toggleMode}>{mode}</Button>
              <div className="ml-3 relative" ref={wrapperRef}>
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setProfileOpen(!profileOpen)}
                    onKeyDown={() => setProfileOpen(!profileOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <Transition
                  show={profileOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Profile
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Settings
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="0"
                      onClick={logout}
                    >
                      Sign out
                    </a>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
