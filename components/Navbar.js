import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import { Button, WindmillContext } from "@windmill/react-ui";

const Nav = () => {
  //const [isOpen, setisOpen] = useState(false); //hamburger toggle
  const [current, setCurrent] = useState("first"); //highlight nav options on large screens
  const [profileOpen, setProfileOpen] = useState(false); //profile toggle

  const { mode, toggleMode } = useContext(WindmillContext); //dark mode

  const wrapperRef = useRef(null);

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

{
  /*div className="-mr-2 flex md:hidden">
                <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className={`${isOpen ? "hidden" : "block"}  h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden={isOpen}
                    onClick={() => setisOpen(!isOpen)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className={`${isOpen ? "block" : "hidden"}  h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden={isOpen}
                    onClick={() => setisOpen(!isOpen)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                    </div>*/
}

{
  {
    /*<ul
  className="flex items-center flex-shrink-0 space-x-6"
  ref={wrapperRef}
>
  <li className="relative">
    <button
      className="rounded-full focus:shadow-outline-purple focus:outline-none"
      onClick={handleProfileImageClick}
      aria-label="Account"
      aria-haspopup="true"
    >
      <Avatar
        className="align-middle"
        src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
        alt=""
        aria-hidden="true"
      />
    </button>
    <Dropdown
      align="right"
      isOpen={isProfileMenuOpen}
      onClose={() => console.log("hi")}
    >
      <DropdownItem tag="a" href="#">
        <OutlinePersonIcon
  className="w-4 h-4 mr-3"
  aria-hidden="true"
/> 
        <span>Profile</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#">
         <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" /> 
        <span>Settings</span>
      </DropdownItem>
      <DropdownItem onClick={() => alert("Log out!")}>
       <OutlineLogoutIcon
  className="w-4 h-4 mr-3"
  aria-hidden="true"
/>
        <span>Log out</span>
      </DropdownItem>
    </Dropdown>
  </li>
</ul>


*/
  }

  /*<Transition
            show={isOpen}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Your Profile
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </Transition>*/
}
