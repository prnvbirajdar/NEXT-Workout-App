import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import { WindmillContext } from "@windmill/react-ui";
import { useAuth } from "./data/authProvider";
import { Moon, Sun, Calender, Home, LiftLogo, Calculator } from "./Icons/Icons";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DeleteAccountModal from "./Profile/DeleteAccountModal";

const Nav = ({ handleDateChange, selectedDate, highlightDates }) => {
  const [profileOpen, setProfileOpen] = useState(false); //profile toggle
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }
  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  const { mode, toggleMode } = useContext(WindmillContext); //dark mode

  const wrapperRef = useRef(null);

  const { user, logout } = useAuth(); //firebase context

  const router = useRouter();

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
    user && (
      <nav className="transition bg-white shadow-bottom dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => {
                  router.push("/home");
                }}
              >
                <LiftLogo />
              </div>

              <div className="md:block">
                <div className="ml-8 flex items-baseline sm:space-x-4">
                  <a
                    aria-label="Home"
                    onClick={() => {
                      router.push("/home");
                    }}
                    className="cursor-pointer dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Home aria-label="Home" />
                  </a>

                  <DatePicker
                    aria-label="Calender"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    highlightDates={highlightDates}
                    name="startDate"
                    dateFormat="MMM dd, yyyy"
                    closeOnScroll={true}
                    withPortal
                    customInput={
                      <div className="cursor-pointer dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Calender />
                      </div>
                    }
                  />

                  <a
                    aria-label="Home"
                    onClick={() => {
                      router.push("/calculator");
                    }}
                    className="cursor-pointer dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Calculator aria-label="Home" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:block">
              <div className="sm:ml-4 flex items-center md:ml-6">
                <button
                  aria-label="dark mode"
                  onClick={toggleMode}
                  className="hidden sm:block bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500 transition dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
                >
                  {mode === "dark" ? (
                    <Sun aria-hidden="true" />
                  ) : (
                    <Moon aria-hidden="true" />
                  )}
                </button>
                <div className="ml-2 sm:ml-6 relative" ref={wrapperRef}>
                  <div>
                    <button
                      aria-label="profile menu"
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={() => setProfileOpen(!profileOpen)}
                      onKeyDown={() => setProfileOpen(!profileOpen)}
                    >
                      <span className="sr-only">Open user menu</span>
                      {user?.photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.photoURL}
                          alt="User profile picture"
                        />
                      ) : (
                        <img
                          src="/whitepng.png"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      )}
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
                      className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 text-gray-700 dark:text-gray-100  bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block sm:hidden px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 "
                        role="menuitem"
                        tabIndex="0"
                        onClick={() => {
                          toggleMode();
                          setProfileOpen(false)
                        }}
                      >
                        {mode === "dark" ? (
                          <Sun aria-hidden="true" />
                        ) : (
                          <Moon aria-hidden="true" />
                        )}
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 "
                        role="menuitem"
                        tabIndex="0"
                        onClick={() => router.push("/profile")}
                      >
                        Profile
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-800"
                        role="menuitem"
                        tabIndex="0"
                        onClick={logout}
                      >
                        Sign out
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-800"
                        role="menuitem"
                        tabIndex="0"
                        onClick={openDeleteModal}
                      >
                        Delete account
                      </a>
                    </div>
                  </Transition>
                  <DeleteAccountModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    closeDeleteModal={closeDeleteModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  );
};

export default Nav;
