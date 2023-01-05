const Add = ({ lineHeight, lineWidth, circleHeight, circleWidth }) => {
  return (
    <button
      aria-label="add"
      className={`inline-flex items-center justify-center ${circleHeight} ${circleWidth} mr-2 text-indigo-100 transition-colors bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800`}
    >
      <svg
        className={`${lineHeight} ${lineWidth} fill-current`}
        viewBox="0 0 20 20"
      >
        <path
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

const Paste = ({ lineHeight, lineWidth, circleHeight, circleWidth }) => {
  return (
    <button
      aria-label="Paste"
      className={`inline-flex items-center justify-center ${circleHeight} ${circleWidth} mr-2 text-indigo-100 transition-colors bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800`}
    >
      <svg
        className={`${lineHeight} ${lineWidth} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
      </svg>
    </button>
  );
};

const Correct = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="correct"
      className=" inline-flex items-center justify-center w-10 h-10 text-white transition-colors bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        height="24"
        width="24"
        fill="currentColor"
        className="fill-current text-white"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

const Delete = () => {
  return (
    <button className=" inline-flex items-center justify-center w-10 h-10 text-gray-500 transition-colors rounded-lg focus:shadow-outline hover:bg-indigo-900  hover:text-white">
      <svg
        aria-label="delete"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height="24"
        width="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

const Home = () => {
  return (
    <button>
      <svg
        aria-label="home"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height="24"
        width="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </button>
  );
};

const Calculator = () => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    </button>
  );
};

const Calender = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="calender">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height="24"
        width="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </button>
  );
};

const Close = () => {
  return (
    <button
      className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
      aria-label="close"
    >
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

const Moon = () => {
  return (
    <svg
      aria-label="moon"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="fill-current text-gray-700"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
};

const Sun = () => {
  return (
    <svg
      aria-label="sun"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="fill-current text-gray-50"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Edit = () => {
  return (
    <button
      aria-label="edit"
      className=" inline-flex items-center justify-center w-10 h-10 text-gray-400 transition-colors rounded-lg focus:shadow-outline  hover:bg-indigo-900  hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        height="20"
        width="20"
        stroke="currentColor"
        className="fill-current"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    </button>
  );
};

const Logo = () => {
  return (
    <button
      aria-label="logo"
      className=" inline-flex items-center justify-center w-10 h-10 text-black transition-colors rounded-lg focus:shadow-outline  hover:bg-indigo-900  hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 0 512 512"
        width="32"
        stroke="currentColor"
        className="fill-current"
      >
        <path d="m289.9 52.7h31c8.9 0 17 3.7 22.9 9.5 5.8 5.9 9.5 14 9.5 22.9v24.3c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.3-7.5-7.5v-24.3c0-4.8-1.9-9.1-5.1-12.2-3.1-3.1-7.5-5.1-12.2-5.1h-31c-1.4 6.3-4.6 12-9.1 16.4-6.2 6.2-14.6 9.9-23.9 9.9h-137.1c-9.3 0-17.8-3.8-23.9-9.9-4.4-4.4-7.7-10.1-9.1-16.4h-31c-4.8 0-9.1 2-12.2 5.1-3.1 3.1-5.1 7.5-5.1 12.2v336.4c0 4.1-3.3 7.5-7.5 7.5s-7.5-3.3-7.5-7.5v-336.4c0-8.9 3.6-17 9.5-22.9 5.9-5.8 13.9-9.5 22.8-9.5h31c1.4-6.3 4.7-12 9.1-16.4 6.1-6.2 14.6-10 23.9-10h11.7c1.4-6.3 4.7-12 9.1-16.4 6.1-6.2 14.6-9.9 23.9-9.9h47.7c9.3 0 17.8 3.8 23.9 9.9 4.4 4.4 7.7 10.1 9.1 16.4h11.7c9.3 0 17.8 3.8 23.9 10 4.4 4.4 7.6 10.1 9.1 16.4zm19.8 266.7c4.2 0 7.5 3.4 7.5 7.5s-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.3-7.5-7.5 0-4.1 3.4-7.5 7.5-7.5zm0-81.5c4.2 0 7.5 3.3 7.5 7.5 0 4.1-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5zm0-81.6c4.2 0 7.5 3.3 7.5 7.5 0 4.1-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.3-7.5-7.5 0-4.2 3.4-7.5 7.5-7.5zm-235.1 223.3h42.7c4.2 0 7.5 3.4 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.3-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.5h42.7c4.2 0 7.5 3.3 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.4-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.6h42.7c4.2 0 7.5 3.4 7.5 7.5v42.7c0 4.2-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.3-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.5h42.7c4.2 0 7.5 3.3 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.4-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm218.2 270.5c-4.1 0-7.5-3.3-7.5-7.5 0-4.1 3.4-7.5 7.5-7.5h10.2v-262.1c0-4.1 3.4-7.5 7.5-7.5s7.5 3.3 7.5 7.5v262.1h28.7v-47.5c0-4.1 3.4-7.5 7.5-7.5h45.8c4.1 0 7.5 3.3 7.5 7.5v26.4h38.3c4.1 0 7.5 3.3 7.5 7.5v78.8c0 4.1-3.3 7.5-7.5 7.5h-38.3v26.4c0 4.1-3.3 7.5-7.5 7.5h-45.8c-4.1 0-7.5-3.3-7.5-7.5v-47.5h-28.7v22.6c0 8.9-3.7 17-9.5 22.8-5.9 5.9-13.9 9.5-22.9 9.5-88.4 0-176.7 0-265.1 0-8.9 0-17-3.6-22.8-9.5-5.9-5.8-9.5-13.9-9.5-22.8v-24.3c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v24.3c0 4.8 2 9.1 5.1 12.2 3.1 3.1 7.5 5.1 12.2 5.1h165.9v-18.9h-38.3c-4.1 0-7.5-3.4-7.5-7.5v-78.8c0-4.1 3.4-7.5 7.5-7.5h38.3v-26.4c0-4.1 3.4-7.5 7.5-7.5h45.8c4.1 0 7.5 3.3 7.5 7.5v47.5h11.6c4.1 0 7.5 3.3 7.5 7.5 0 4.2-3.4 7.5-7.5 7.5h-11.6v21.7h99.5v-21.7h-53.9zm10.2 36.7h-55.8v40h38.4c4.8 0 9.1-2 12.2-5.1 3.2-3.1 5.1-7.5 5.1-12.2zm104.5 6.1h30.8v-63.8h-30.8zm-251.9 0h30.8v-63.8h-30.8zm206.1 33.9h30.8v-131.6h-30.8zm-129.5 0c0-43.9 0-87.7 0-131.6h-30.8v131.6zm-55.3-482h-47.7c-5.2 0-9.9 2.1-13.3 5.6-3.4 3.4-5.5 8.1-5.5 13.3 0 4.1-3.4 7.5-7.5 7.5h-18.4c-5.2 0-9.9 2.1-13.3 5.6-3.4 3.4-5.5 8.1-5.5 13.3 0 5.2 2.1 9.9 5.5 13.3 3.4 3.4 8.1 5.6 13.3 5.6h137.1c5.2 0 9.9-2.1 13.3-5.6 3.4-3.4 5.6-8.1 5.6-13.3 0-5.2-2.1-9.9-5.6-13.3-3.4-3.4-8.1-5.6-13.3-5.6h-18.4c-4.2 0-7.5-3.3-7.5-7.5 0-5.2-2.1-9.9-5.5-13.3-3.4-3.4-8.1-5.6-13.3-5.6z" />
      </svg>
    </button>
  );
};

const LiftLogo = () => {
  return (
    <button
      aria-label="calender 2"
      className=" inline-flex items-center justify-center w-12 h-12 text-gray-800 dark:text-gray-100 transition rounded-lg focus:shadow-outline hover:bg-indigo-200 dark:hover:bg-indigo-800   "
    >
      <svg
        viewBox="0 0 500.03 500.03"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="fill-current h-8 w-8 md:h-9 md:w-9"
      >
        <path d="M252.581 395.053c15.688 15.708 15.591 40.979 0 56.57l-35.28 35.28c-15.461 15.5-40.874 15.696-56.57 0l-147.61-147.61c-15.59-15.6-15.59-40.98 0-56.57l35.28-35.28c15.591-15.592 40.862-15.688 56.57 0zM19.068 377.737c-3.609-3.609-9.609-2.946-12.395 1.331-11.067 16.986-7.654 37.463 5.028 50.146l59.11 59.11c12.572 12.572 33.034 16.189 50.14 5.034 4.278-2.79 4.949-8.788 1.338-12.4zm257.773-209.024c-6.25-6.24-16.38-6.24-22.63 0l-85.5 85.5c-6.25 6.25-6.25 16.38 0 22.63l54.47 54.47c6.229 6.229 16.359 6.251 22.63 0l85.5-85.5c6.25-6.25 6.25-16.38 0-22.63zm204.132-46.442c3.612 3.612 9.613 2.939 12.402-1.341 11.146-17.11 7.485-37.577-5.054-50.117l-59.11-59.11C416.56-.939 396.096-4.423 379.088 6.654c-4.278 2.786-4.944 8.787-1.334 12.397zM339.291 13.123c-15.6-15.59-40.98-15.6-56.57 0l-35.28 35.28c-15.591 15.59-15.688 40.861 0 56.57l147.61 147.61c15.723 15.703 40.996 15.575 56.57 0l35.28-35.28c15.59-15.59 15.59-40.97 0-56.57z" />
      </svg>
    </button>
  );
};

const RightArrow = () => {
  return (
    <button
      aria-label="right"
      className=" w-5 h-5 text-gray-600 dark:text-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 16"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

const DownArrow = () => {
  return (
    <button
      aria-label="down"
      className=" w-5 h-5 text-gray-600 dark:text-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 14"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

const CopySet = () => {
  return (
    <div
      aria-label="Copy Sets"
      className=" cursor-pointer inline-flex items-center justify-center w-10 h-10 text-gray-500 transition-colors rounded-lg focus:shadow-outline hover:bg-indigo-900  hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        height="24"
        width="24"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
      </svg>
    </div>
  );
};

export {
  RightArrow,
  DownArrow,
  Home,
  Calender,
  Add,
  Correct,
  Delete,
  Close,
  Sun,
  Moon,
  Edit,
  Logo,
  LiftLogo,
  CopySet,
  Paste,
  Calculator
};
