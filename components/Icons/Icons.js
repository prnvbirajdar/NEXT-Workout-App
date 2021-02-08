const Plus = () => {
  return (
    <button className="inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

const Minus = () => {
  return (
    <button className="inline-flex items-center justify-center w-10 h-10  text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 298.7 298.7">
        <path d="M0 128h299v43H0z" clipRule="evenodd" fillRule="evenodd"></path>
      </svg>
    </button>
  );
};

const Add = ({ lineHeight, lineWidth, circleHeight, circleWidth }) => {
  return (
    <button
      className={`inline-flex items-center justify-center ${circleHeight} ${circleWidth} mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800`}
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

const Correct = () => {
  return (
    <button className=" inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
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
    <button className=" inline-flex items-center justify-center w-10 h-10 text-gray-400 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-900  hover:text-white">
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
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

const Close = () => {
  return (
    <button
      className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
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

export { Add, Plus, Minus, Correct, Delete, Close };
